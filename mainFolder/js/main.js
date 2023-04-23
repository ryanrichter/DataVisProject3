console.log("Hello World");

let showFilter = [];
let selectedSeason = "0";

d3.csv("data/export_dataframe.csv").then((_data) => {
    data = _data;
    console.log("Data loading complete. Work with dataset.");
    console.log(data);

    // Create an instance (for example in main.js)
    linesPerEp = new LinesPerEp({ parentElement: "#LinePerEp" }, data);
    linesPerEp.updateVis();

    linesPerChar = new CharLines({ parentElement: "#CharLinesChart" }, data);
    linesPerChar.updateVis();

    charAppearances = new appearancesBarchart(
        { parentElement: "#appearancesBarchart" },
        data
    );

    seaEpDropdown = new SeaEpDrop({ parentElement: "#dropdownRow" }, data);
});

d3.select("#selectCharButton").on("change", function (d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value");

    console.log(selectedOption);
    // update config
    charAppearances.config.character = selectedOption;

    charAppearances.updateVis();
});

d3.select("#selectSeaButton").on("change", function (d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value");

    console.log(selectedOption, d);
    // update config
    if (selectedOption != "") {
        selectedSeason = selectedOption.charAt(7);
        showFilter = [selectedSeason];
        console.log(selectedSeason, showFilter);
        selectedSeason = +selectedSeason;
    } else {
        showFilter = []; // Remove filter
    }
    filterData(0);
    seaEpDropdown.updateVis(selectedOption);
});

d3.select("#selectEpButton").on("change", function (d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value");

    console.log(selectedOption, selectedSeason);

    if (selectedSeason == checkSeason(selectedOption)) {
        showFilter = [selectedOption];
        filterData(1);
    } else if (selectedOption == "" && showFilter != []) {
        showFilter = ["" + selectedSeason];
        console.log(showFilter);
        filterData(0);
    } else {
        console.log("Season and Episode Mismatch");
    }
});

function checkSeason(ep) {
    if (
        ep == "Pilot" ||
        ep == "Top Banana" ||
        ep == "Bringing Up Buster" ||
        ep == "Key Decisions" ||
        ep == "Charity Drive" ||
        ep == "Visiting Ours" ||
        ep == "In God We Trust" ||
        ep == "My Mother, the Car" ||
        ep == "Storming the Castle" ||
        ep == "Pier Pressure" ||
        ep == "Public Relations" ||
        ep == "Marta Complex" ||
        ep == "Beef Consommé" ||
        ep == "Shock and Aww" ||
        ep == "Staff Infection" ||
        ep == "Altar Egos" ||
        ep == "Justice Is Blind" ||
        ep == "Missing Kitty" ||
        ep == "Best Man for the Gob" ||
        ep == "Whistler's Mother" ||
        ep == "Not Without My Daughter" ||
        ep == "Let 'Em Eat Cake"
    ) {
        return 1;
    } else if (
        ep == "The One Where Michael Leaves" ||
        ep == "The One Where They Build a House" ||
        ep == "¡Amigos!" ||
        ep == "Good Grief" ||
        ep == "Sad Sack" ||
        ep == "Afternoon Delight" ||
        ep == "Switch Hitter" ||
        ep == "Queen for a Day" ||
        ep == "Burning Love" ||
        ep == "Ready, Aim, Marry Me" ||
        ep == "Out on a Limb" ||
        ep == "Hand to God" ||
        ep == "Motherboy XXX" ||
        ep == "The Immaculate Election" ||
        ep == "Sword of Destiny" ||
        ep == "Meat the Veals" ||
        ep == "Spring Breakout" ||
        ep == "Righteous Brothers"
    ) {
        return 2;
    } else if (
        ep == "The Cabin Show" ||
        ep == "For British Eyes Only" ||
        ep == "Forget-Me-Now" ||
        ep == "Notapusy" ||
        ep == "Mr. F" ||
        ep == "The Ocean Walker" ||
        ep == "Prison Break-In" ||
        ep == "Making a Stand" ||
        ep == "S.O.B.s" ||
        ep == "Fakin' It" ||
        ep == "Family Ties" ||
        ep == "Exit Strategy" ||
        ep == "Development Arrested"
    ) {
        return 3;
    } else if (
        ep == "Flight of the Phoenix" ||
        ep == "Borderline Personalities" ||
        ep == "Indian Takers" ||
        ep == "The B. Team" ||
        ep == "A New Start" ||
        ep == "Double Crossers" ||
        ep == "Colony Collapse" ||
        ep == "Red Hairing" ||
        ep == "Smashed" ||
        ep == "Queen B." ||
        ep == "A New Attitude" ||
        ep == "Señoritis" ||
        ep == "It Gets Better" ||
        ep == "Off the Hook" ||
        ep == "Blockheads"
    ) {
        return 4;
    } else {
        return 0;
    }
}

function sortFrequency(a, b) {
    if (a[1] === b[1]) {
        return 0;
    } else {
        return a[1] < b[1] ? 1 : -1;
    }
}

function filterData(i) {
    if (showFilter.length == 0) {
        linesPerChar.data = data;
        // linesPerEp.data = data;
    } else {
        if (i == 0) {
            linesPerChar.data = data.filter((d) =>
                showFilter.includes(d.season)
            );
            // linesPerEp.data = data.filter((d) => showFilter.includes(d.season));
        } else {
            linesPerChar.data = data.filter((d) =>
                showFilter.includes(d.episode)
            );
            // linesPerEp.data = data.filter((d) => showFilter.includes(d.episode));
        }
    }
    linesPerChar.updateVis();
    // linesPerEp.updateVis();
}
