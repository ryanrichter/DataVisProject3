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

        this.dropdown = d3.select("#selectEpButton");

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

        vis.updateVis("");
    }

    updateVis(selSeason) {
        let vis = this;

        console.log("Update episode Dropdown", selSeason);

        let episodes = [];

        switch (selSeason) {
            case "Season 1":
                episodes = [
                    "",
                    "Pilot",
                    "Top Banana",
                    "Bringing Up Buster",
                    "Key Decisions",
                    "Charity Drive",
                    "Visiting Ours",
                    "In God We Trust",
                    "My Mother, the Car",
                    "Storming the Castle",
                    "Pier Pressure",
                    "Public Relations",
                    "Marta Complex",
                    "Beef Consommé",
                    "Shock and Aww",
                    "Staff Infection",
                    "Altar Egos",
                    "Justice Is Blind",
                    "Missing Kitty",
                    "Best Man for the Gob",
                    "Whistler's Mother",
                    "Not Without My Daughter",
                    "Let 'Em Eat Cake",
                ];
                break;
            case "Season 2":
                episodes = [
                    "",
                    "The One Where Michael Leaves",
                    "The One Where They Build a House",
                    "¡Amigos!",
                    "Good Grief",
                    "Sad Sack",
                    "Afternoon Delight",
                    "Switch Hitter",
                    "Queen for a Day",
                    "Burning Love",
                    "Ready, Aim, Marry Me",
                    "Out on a Limb",
                    "Hand to God",
                    "Motherboy XXX",
                    "The Immaculate Election",
                    "Sword of Destiny",
                    "Meat the Veals",
                    "Spring Breakout",
                    "Righteous Brothers",
                ];
                break;
            case "Season 3":
                episodes = [
                    "",
                    "The Cabin Show",
                    "For British Eyes Only",
                    "Forget-Me-Now",
                    "Notapusy",
                    "Mr. F",
                    "The Ocean Walker",
                    "Prison Break-In",
                    "Making a Stand",
                    "S.O.B.s",
                    "Fakin' It",
                    "Family Ties",
                    "Exit Strategy",
                    "Development Arrested",
                ];
                break;
            case "Season 4":
                episodes = [
                    "",
                    "Flight of the Phoenix",
                    "Borderline Personalities",
                    "Indian Takers",
                    "The B. Team",
                    "A New Start",
                    "Double Crossers",
                    "Colony Collapse",
                    "Red Hairing",
                    "Smashed",
                    "Queen B.",
                    "A New Attitude",
                    "Señoritis",
                    "It Gets Better",
                    "Off the Hook",
                    "Blockheads",
                ];
                break;
            default:
                episodes = [];
        }

        console.log(episodes, "vis.dropdown", vis.dropdown);

        if (vis.dropdown != undefined) {
            console.log(vis.dropdown, episodes);

            vis.dropdown.selectAll("option").remove();

            console.log(vis.dropdown);

            vis.dropdown
                .selectAll("myOptions")
                .data(episodes)
                .enter()
                .append("option")
                .text(function (d) {
                    return d;
                }) // text showed in the menu
                .attr("value", function (d) {
                    return d;
                }); // corresponding value returned by the button
        } else {
            console.log("else");

            // add the options to the button
        }
    }
}
