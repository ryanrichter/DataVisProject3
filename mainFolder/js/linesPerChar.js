class CharLines {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: _config.containerWidth || 500,
            containerHeight: _config.containerHeight || 350,
            tooltipPadding: _config.tooltipPadding || 15,
            margin: { top: 40, right: 50, bottom: 120, left: 50 },
        };

        this.data = _data;

        console.log("Attempt linesPerChar Bar Chart");

        this.initVis();
    }

    initVis() {
        let vis = this;

        // Calculate inner chart size. Margin specifies the space around the actual chart.
        vis.width =
            vis.config.containerWidth -
            vis.config.margin.left -
            vis.config.margin.right;
        vis.height =
            vis.config.containerHeight -
            vis.config.margin.top -
            vis.config.margin.bottom;

        // Initialize scales and axes

        // Initialize scales
        vis.colorScale = d3.scaleOrdinal().range(["#fb8604"]); // TBD Color

        // Important: we flip array elements in the y output range to position the rectangles correctly
        vis.yScale = d3.scaleLinear().range([vis.height, 0]);

        vis.xScale = d3.scaleBand().range([0, vis.width]).paddingInner(0.2);

        vis.xAxis = d3.axisBottom(vis.xScale).tickSizeOuter(0);

        vis.yAxis = d3.axisLeft(vis.yScale).tickSizeOuter(0);

        // Define size of SVG drawing area
        vis.svg = d3
            .select(vis.config.parentElement)
            .attr("width", vis.config.containerWidth)
            .attr("height", vis.config.containerHeight);

        // SVG Group containing the actual chart; D3 margin convention
        vis.chart = vis.svg
            .append("g")
            .attr(
                "transform",
                `translate(${vis.config.margin.left},${vis.config.margin.top})`
            );

        // Append empty x-axis group and move it to the bottom of the chart
        vis.xAxisG = vis.chart
            .append("g")
            .attr("class", "axis x-axis")
            .attr("transform", `translate(0,${vis.height})`);

        // Append y-axis group
        vis.yAxisG = vis.chart.append("g").attr("class", "axis y-axis");

        // Append axis title
        vis.svg
            .append("text")
            .attr("class", "chart-title")
            .attr("x", 10)
            .attr("y", 10)
            .attr("dy", ".71em")
            .text("Number of Lines of Dialogue per Character");
    }

    updateVis() {
        let vis = this;

        // Prepare data: count number of stars for each exoplanet
        const aggregatedDataMap = d3.rollups(
            vis.data,
            (v) => v.length,
            (d) => d.character
        );
        aggregatedDataMap.sort(sortFrequency);
        vis.aggregatedData = Array.from(aggregatedDataMap, ([key, count]) => ({
            key,
            count,
        }));

        console.log(vis.aggregatedData);

        vis.newData = [];
        let j = 0;
        for (
            let i = 0;
            vis.newData.length < 10 && i < vis.aggregatedData.length;
            i++
        ) {
            if (
                vis.aggregatedData[i].key == "Michael" ||
                vis.aggregatedData[i].key == "Narrator" ||
                vis.aggregatedData[i].key == "G.O.B." ||
                vis.aggregatedData[i].key == "Tobias" ||
                vis.aggregatedData[i].key == "Lindsay" ||
                vis.aggregatedData[i].key == "Buster" ||
                vis.aggregatedData[i].key == "Lucille" ||
                vis.aggregatedData[i].key == "Maeby" ||
                vis.aggregatedData[i].key == "George Michael" ||
                vis.aggregatedData[i].key == "George" ||
                vis.aggregatedData[i].key == "George, Sr."
            ) {
                vis.newData[j] = vis.aggregatedData[i];
                j++;
            }
        }

        console.log(vis.newData);

        // Specificy accessor functions
        vis.colorValue = (d) => d.key;
        vis.xValue = (d) => d.key;
        vis.yValue = (d) => d.count;

        // Set the scale input domains
        vis.xScale.domain(vis.newData.map(vis.xValue));
        vis.yScale.domain([0, d3.max(vis.newData, vis.yValue)]);

        vis.renderVis();
    }

    renderVis() {
        let vis = this;

        // Add rectangles
        const bars = vis.chart
            .selectAll(".bar")
            .data(vis.newData, vis.xValue)
            .join("rect")
            .attr("class", "bar")
            .attr("x", (d) => vis.xScale(vis.xValue(d)))
            .attr("width", vis.xScale.bandwidth())
            .attr("height", (d) => vis.height - vis.yScale(vis.yValue(d)))
            .attr("y", (d) => vis.yScale(vis.yValue(d)))
            .attr("fill", (d) => vis.colorScale(vis.colorValue(d)));

        // Tooltip event listeners
        bars.on("mouseover", (event, d) => {
            d3.select("#tooltip-perChar")
                .style("opacity", 1)
                // Format number with million and thousand separator
                .html(
                    `<div class="tooltip-title">${d.key}</div>
                <div>${d.count} lines of dialogue</div>`
                );
        })
            .on("mousemove", (event) => {
                d3.select("#tooltip-perChar")
                    .style(
                        "left",
                        event.pageX + vis.config.tooltipPadding + "px"
                    )
                    .style(
                        "top",
                        event.pageY + vis.config.tooltipPadding + "px"
                    );
            })
            .on("mouseleave", () => {
                d3.select("#tooltip-perChar").style("opacity", 0);
            });

        vis.xAxisG
            .call(vis.xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-45)");

        // Update axes
        vis.xAxisG.call(vis.xAxis);
        vis.yAxisG.call(vis.yAxis);
    }
}
