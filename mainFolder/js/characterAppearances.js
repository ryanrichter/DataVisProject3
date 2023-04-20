class appearancesBarchart {

  /**
   * Class constructor with basic chart configuration
   * @param {Object}
   * @param {Array}
   */
  constructor(_config, _data) {
    // Configuration object with defaults
    this.config = {
      parentElement: _config.parentElement,
      containerWidth: _config.containerWidth || 400,
      containerHeight: _config.containerHeight || 200,
      margin: _config.margin || {top: 10, right: 5, bottom: 25, left: 30},
      reverseOrder: _config.reverseOrder || false,
      tooltipPadding: _config.tooltipPadding || 15
    }
    this.data = _data;

    console.log("Attempt charAppearances");

    this.michaelData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.lindsayData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.gobData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.georgemichaelData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.maebyData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.busterData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.tobiasData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.georgeData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.lucilleData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];
    this.narratorData = [
        { season: 'Season 1', 'DoesNotAppear': 22, 'Appears': 0 },
        { season: 'Season 2', 'DoesNotAppear': 18, 'Appears': 0 },
        { season: 'Season 3', 'DoesNotAppear': 13, 'Appears': 0 },
        { season: 'Season 4', 'DoesNotAppear': 15, 'Appears': 0 }
    ];


    this.dataBeingUsed = this.michaelData
    this.initVis();
  }

  
  /**
   * Initialize scales/axes and append static elements, such as axis titles
   */
  initVis() {
    let vis = this;

    vis.legend = d3
        .select("#legend")
        .append("svg")
        .attr("width", 200)
        .attr("height", 100);
    
    vis.legend
        .append("circle")
        .attr("cx", 10)
        .attr("cy", 10)
        .attr("r", 5)
        .attr("stroke", "black")
        .attr("fill", "#643d12");
    vis.legend
        .append("circle")
        .attr("cx", 10)
        .attr("cy", 30)
        .attr("r", 5)
        .attr("stroke", "black")
        .attr("fill", "#fcae54");

    vis.legend
        .append("text")
        .attr("x", 20)
        .attr("y", 10)
        .text("Appears")
        .style("font-size", "15px")
        .attr("alignment-baseline", "middle");
    vis.legend
        .append("text")
        .attr("x", 20)
        .attr("y", 30)
        .text("Does Not Appear")
        .style("font-size", "15px")
        .attr("alignment-baseline", "middle");

    let michaelLastAddedEp = "";
    let lindsayLastAddedEp = "";
    let gobLastAddedEp = "";
    let georgemichaelLastAddedEp = "";
    let maebyLastAddedEp = "";
    let busterLastAddedEp = "";
    let tobiasLastAddedEp = "";
    let georgeLastAddedEp = "";
    let lucilleLastAddedEp = "";
    let narratorLastAddedEp = "";
    
    for (let i=0; i < vis.data.length; i++){
        let currentEp = vis.data[i].episode;
        let season = checkSeason(currentEp)-1
        switch (vis.data[i].character) {
            case "Michael":
                if (michaelLastAddedEp != currentEp){
                    vis.michaelData[season]['DoesNotAppear'] -= 1;
                    vis.michaelData[season]['Appears'] += 1;
                    michaelLastAddedEp = currentEp
                }
                break;
            case "Lindsay":
                if (lindsayLastAddedEp != currentEp){
                    vis.lindsayData[season]['DoesNotAppear'] -= 1;
                    vis.lindsayData[season]['Appears'] += 1;
                    lindsayLastAddedEp = currentEp
                }
                break;
            case "G.O.B.":
                if (gobLastAddedEp != currentEp){
                    vis.gobData[season]['DoesNotAppear'] -= 1;
                    vis.gobData[season]['Appears'] += 1;
                    gobLastAddedEp = currentEp
                }
                break;
            case "George Michael":
                if (georgemichaelLastAddedEp != currentEp){
                    vis.georgemichaelData[season]['DoesNotAppear'] -= 1;
                    vis.georgemichaelData[season]['Appears'] += 1;
                    georgemichaelLastAddedEp = currentEp
                }
                break;
            case "Maeby":
                if (maebyLastAddedEp != currentEp){
                    vis.maebyData[season]['DoesNotAppear'] -= 1;
                    vis.maebyData[season]['Appears'] += 1;
                    maebyLastAddedEp = currentEp
                }
                break;
            case "Buster":
                if (busterLastAddedEp != currentEp){
                    vis.busterData[season]['DoesNotAppear'] -= 1;
                    vis.busterData[season]['Appears'] += 1;
                    busterLastAddedEp = currentEp
                }
                break;
            case "Tobias":
                if (tobiasLastAddedEp != currentEp){
                    vis.tobiasData[season]['DoesNotAppear'] -= 1;
                    vis.tobiasData[season]['Appears'] += 1;
                    tobiasLastAddedEp = currentEp
                }
                break;
            case "George, Sr.":
                if (georgeLastAddedEp != currentEp){
                    vis.georgeData[season]['DoesNotAppear'] -= 1;
                    vis.georgeData[season]['Appears'] += 1;
                    georgeLastAddedEp = currentEp
                }
                break;
            case "Lucille":
                if (lucilleLastAddedEp != currentEp){
                    vis.lucilleData[season]['DoesNotAppear'] -= 1;
                    vis.lucilleData[season]['Appears'] += 1;
                    lucilleLastAddedEp = currentEp
                }
                break;
            case "Narrator":
                if (narratorLastAddedEp != currentEp){
                    vis.narratorData[season]['DoesNotAppear'] -= 1;
                    vis.narratorData[season]['Appears'] += 1;
                    narratorLastAddedEp = currentEp
                }
                break;
        }
    }

    vis.width = vis.config.containerWidth - vis.config.margin.left - vis.config.margin.right;
    vis.height = vis.config.containerHeight - vis.config.margin.top - vis.config.margin.bottom;

    vis.xScale = d3.scaleBand()
        .range([0, vis.width])
        .paddingInner(0.2)
        .paddingOuter(0.2);

    vis.yScale = d3.scaleLinear()
        .range([vis.height, 0]);
    
    // Initialize axes
    vis.xAxis = d3.axisBottom(vis.xScale);
    vis.yAxis = d3.axisLeft(vis.yScale).ticks(6);

    // Define size of SVG drawing area
    vis.svg = d3.select(vis.config.parentElement)
        .attr('width', vis.config.containerWidth)
        .attr('height', vis.config.containerHeight);

    // Append group element that will contain our actual chart
    vis.chart = vis.svg.append('g')
        .attr('transform', `translate(${vis.config.margin.left},${vis.config.margin.top})`);

    // Append empty x-axis group and move it to the bottom of the chart
    vis.xAxisG = vis.chart.append('g')
        .attr('class', 'axis x-axis')
        .attr('transform', `translate(0,${vis.height})`);
    
    // Append y-axis group
    vis.yAxisG = vis.chart.append('g')
        .attr('class', 'axis y-axis');

    vis.stack = d3.stack()
        .keys(['DoesNotAppear', 'Appears']);


    var allGroup = ["Michael", "Lindsay", "G.O.B.", "George Michael", "Maeby", "Buster", "Tobias", "George", "Lucille", "Narrator"]
    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button

  }

  /**
   * Prepare data and scales before we render it
   */
  updateVis() {
    let vis = this;

    switch (vis.config.character) {
        case "Michael":
            vis.dataBeingUsed = vis.michaelData
            break;
        case "Lindsay":
            vis.dataBeingUsed = vis.lindsayData
            break;
        case "G.O.B.":
            vis.dataBeingUsed = vis.gobData
            break;
        case "George Michael":
            vis.dataBeingUsed = vis.georgemichaelData
            break;
        case "Maeby":
            vis.dataBeingUsed = vis.maebyData
            break;
        case "Buster":
            vis.dataBeingUsed = vis.busterData
            break;
        case "Tobias":
            vis.dataBeingUsed = vis.tobiasData
            break;
        case "George":
            vis.dataBeingUsed = vis.georgeData
            break;
        case "Lucille":
            vis.dataBeingUsed = vis.lucilleData
            break;
        case "Narrator":
            vis.dataBeingUsed = vis.narratorData
            break;
    }

    // Set the scale input domains
    vis.xScale.domain(['Season 1','Season 2','Season 3','Season 4']);
    vis.yScale.domain([0, 22]);

    vis.stackedData = vis.stack(vis.dataBeingUsed)

    vis.renderVis();
  }

  /**
   * Bind data to visual elements
   */
  renderVis() {
    let vis = this;

    vis.chart.selectAll('category')
        .data(vis.stackedData)
      .join('g')
        .attr('class', d => `category cat-${d.key}`)
      .selectAll('rect')
        .data(d => d)
      .join('rect')
        .attr('x', d => vis.xScale(d.data.season))
        .attr('y', d => vis.yScale(d[1]))
        .attr('height', d => vis.yScale(d[0]) - vis.yScale(d[1]))
        .attr('width', vis.xScale.bandwidth());
    
    

    // Update the axes
    vis.xAxisG.call(vis.xAxis);
    vis.yAxisG.call(vis.yAxis);
  }
}

