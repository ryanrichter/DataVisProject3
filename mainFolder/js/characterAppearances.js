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
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.lindsayData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.gobData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.georgemichaelData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.maebyData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.busterData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.tobiasData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.georgeData = [
        { 'season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.lucilleData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];
    this.narratorData = [
        { 'Season': 'Season 1', 'Does Not Appear': 22, 'Appears': 0 },
        { 'Season': 'Season 2', 'Does Not Appear': 18, 'Appears': 0 },
        { 'Season': 'Season 3', 'Does Not Appear': 13, 'Appears': 0 },
        { 'Season': 'Season 4', 'Does Not Appear': 15, 'Appears': 0 }
    ];

    this.initVis();
  }

  
  /**
   * Initialize scales/axes and append static elements, such as axis titles
   */
  initVis() {
    let vis = this;

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
                    vis.michaelData[season]['Does Not Appear'] -= 1;
                    vis.michaelData[season]['Appears'] += 1;
                    michaelLastAddedEp = currentEp
                }
                break;
            case "Lindsay":
                if (lindsayLastAddedEp != currentEp){
                    vis.lindsayData[season]['Does Not Appear'] -= 1;
                    vis.lindsayData[season]['Appears'] += 1;
                    lindsayLastAddedEp = currentEp
                }
                break;
            case "G.O.B.":
                if (gobLastAddedEp != currentEp){
                    vis.gobData[season]['Does Not Appear'] -= 1;
                    vis.gobData[season]['Appears'] += 1;
                    gobLastAddedEp = currentEp
                }
                break;
            case "George Michael":
                if (georgemichaelLastAddedEp != currentEp){
                    vis.georgemichaelData[season]['Does Not Appear'] -= 1;
                    vis.georgemichaelData[season]['Appears'] += 1;
                    georgemichaelLastAddedEp = currentEp
                }
                break;
            case "Maeby":
                if (maebyLastAddedEp != currentEp){
                    vis.maebyData[season]['Does Not Appear'] -= 1;
                    vis.maebyData[season]['Appears'] += 1;
                    maebyLastAddedEp = currentEp
                }
                break;
            case "Buster":
                if (busterLastAddedEp != currentEp){
                    vis.busterData[season]['Does Not Appear'] -= 1;
                    vis.busterData[season]['Appears'] += 1;
                    busterLastAddedEp = currentEp
                }
                break;
            case "Tobias":
                if (tobiasLastAddedEp != currentEp){
                    vis.tobiasData[season]['Does Not Appear'] -= 1;
                    vis.tobiasData[season]['Appears'] += 1;
                    tobiasLastAddedEp = currentEp
                }
                break;
            case "George, Sr.":
                if (georgeLastAddedEp != currentEp){
                    vis.georgeData[season]['Does Not Appear'] -= 1;
                    vis.georgeData[season]['Appears'] += 1;
                    georgeLastAddedEp = currentEp
                }
                break;
            case "Lucille":
                if (lucilleLastAddedEp != currentEp){
                    vis.lucilleData[season]['Does Not Appear'] -= 1;
                    vis.lucilleData[season]['Appears'] += 1;
                    lucilleLastAddedEp = currentEp
                }
                break;
            case "Narrator":
                if (narratorLastAddedEp != currentEp){
                    vis.narratorData[season]['Does Not Appear'] -= 1;
                    vis.narratorData[season]['Appears'] += 1;
                    narratorLastAddedEp = currentEp
                }
                break;
        }
    }

    console.log(vis.lindsayData)
    console.log(vis.georgemichaelData)
    console.log(vis.georgeData)
    console.log(vis.lucilleData)
    console.log(vis.gobData)

    var colors = ["#fcae54", "#643d12"];

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
        .keys(['Does Not Appear', 'Appears']);

    vis.updateVis();
  }

  /**
   * Prepare data and scales before we render it
   */
  updateVis() {
    let vis = this;

    // Set the scale input domains
    vis.xScale.domain(['Season 1','Season 2','Season 3','Season 4']);
    vis.yScale.domain([0, 22]);

    vis.stackedData = vis.stack(vis.georgeData)

    console.log(vis.stackedData)

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
        .attr('x', d => vis.xScale(d.data.year))
        .attr('y', d => vis.yScale(d[1]))
        .attr('height', d => vis.yScale(d[0]) - vis.yScale(d[1]))
        .attr('width', vis.xScale.bandwidth());

    // Update the axes
    vis.xAxisG.call(vis.xAxis);
    vis.yAxisG.call(vis.yAxis);
  }
}

