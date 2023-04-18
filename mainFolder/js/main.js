console.log("Hello World");

d3.csv("data/export_dataframe.csv").then((_data) => {
    data = _data;
    console.log("Data loading complete. Work with dataset.");
    console.log(data);
});
