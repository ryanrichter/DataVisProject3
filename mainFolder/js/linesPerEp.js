class LinesPerEp {
    constructor(_config, _data) {
        this.config = {
            parentElement: _config.parentElement,
            containerWidth: _config.containerWidth || 1430,
            containerHeight: _config.containerHeight || 310,
            tooltipPadding: _config.tooltipPadding || 15,
            margin: { top: 40, right: 10, bottom: 10, left: 50 },
        };

        this.data = _data;

        console.log("Attempt linesPerEp");

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
        vis.colorScale = d3
            .scaleOrdinal()
            .range(["#fcae54", "#fb8604", "#b56203", "#643d12"]); // TBD Color

        // Important: we flip array elements in the y output range to position the rectangles correctly
        vis.yScale = d3.scaleLinear().range([vis.height, 0]);

        vis.xScale = d3.scaleBand().range([0, vis.width]).paddingInner(0.2);

        vis.xAxis = d3.axisBottom(vis.xScale).tickValues([]).tickSizeOuter(0);

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
            .attr("y", 15)
            .attr("dy", ".71em")
            .text("Number of Lines Per Episode");
    }

    updateVis() {
        let vis = this;

        console.log("rollup time");

        // Prepare data: count number of stars for each exoplanet
        const aggregatedDataMap = d3.rollups(
            vis.data,
            (v) => v.length,
            (d) => d.episode // .replace('-','').replace('-','')
        );

        console.log(aggregatedDataMap);

        vis.aggregatedData = Array.from(aggregatedDataMap, ([key, count]) => ({
            key,
            count,
        }));

        for (let i = 0; i < vis.aggregatedData.length; i++) {
            switch (checkSeason(vis.aggregatedData[i].key)) {
                case 1:
                    vis.aggregatedData[i].color = "#fcae54";
                    break;
                case 2:
                    vis.aggregatedData[i].color = "#fb8604";
                    break;
                case 3:
                    vis.aggregatedData[i].color = "#b56203";
                    break;
                case 4:
                    vis.aggregatedData[i].color = "#643d12";
                    break;
                default:
                    vis.aggregatedData[i].color = "#a09099";
                    break;
            }
        }

        console.log("lines Per Ep", vis.aggregatedData);

        // Specificy accessor functions
        vis.colorValue = (d) => d.color;
        vis.xValue = (d) => d.key;
        vis.yValue = (d) => d.count;

        // Set the scale input domains
        vis.xScale.domain(vis.aggregatedData.map(vis.xValue));
        vis.yScale.domain([0, d3.max(vis.aggregatedData, vis.yValue)]);

        console.log("Scale Domains", vis.yScale);

        vis.renderVis();
    }

    renderVis() {
        let vis = this;

        // Add rectangles
        const bars = vis.chart
            .selectAll(".bar")
            .data(vis.aggregatedData, vis.xValue)
            .join("rect")
            .attr("class", "bar")
            .attr("x", (d) => vis.xScale(vis.xValue(d)))
            .attr("width", vis.xScale.bandwidth())
            .attr("height", (d) => vis.height - vis.yScale(vis.yValue(d)))
            .attr("y", (d) => vis.yScale(vis.yValue(d)))
            .attr("fill", (d) => d.color);

        // Tooltip event listeners
        bars.on("mouseover", (event, d) => {
            d3.select("#tooltip-bar")
                .style("opacity", 1)
                // Format number with million and thousand separator
                .html(
                    `<div class="tooltip-title">${d.key}</div>
                    <div>${d.count} lines of dialogue</div>`
                );
        })
            .on("mousemove", (event) => {
                d3.select("#tooltip-bar")
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
                d3.select("#tooltip-bar").style("opacity", 0);
            });

        // Update axes
        vis.xAxisG.call(vis.xAxis);
        vis.yAxisG.call(vis.yAxis);
    }
}
