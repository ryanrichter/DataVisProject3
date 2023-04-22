class SeaEpDrop {
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
            margin: _config.margin || {
                top: 10,
                right: 5,
                bottom: 25,
                left: 30,
            },
            reverseOrder: _config.reverseOrder || false,
            tooltipPadding: _config.tooltipPadding || 15,
        };
        this.data = _data;

        this.initvis();
    }

    initvis() {
        let vis = this;

        var seasons = ["", "Season 1", "Season 2", "Season 3", "Season 4"];
        // add the options to the button
        d3.select("#selectSeaButton")
            .selectAll("myOptions")
            .data(seasons)
            .enter()
            .append("option")
            .text(function (d) {
                return d;
            }) // text showed in the menu
            .attr("value", function (d) {
                return d;
            }); // corresponding value returned by the button

        console.log("Attempt dropdowns");
    }
}
