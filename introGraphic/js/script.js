// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];


// var dataset = [ 5, 10, 13, 19, 21];


// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
//                 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];




var datasetLength = Math.round(Math.random() * 50)
var dataset = [];                        //Initialize empty array
for (var i = 0; i < datasetLength; i++) {           //Loop 25 times
    var newNumber =  Math.round(Math.random() * 30);  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}

//Width and height
var w = 500;
var h = 150;
var barPadding = 1;  // <-- New!

//Create SVG element
var svg = d3.select("body")
            .append("row")
            .append("div")
            .attr("class", "col-md-offset-3")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   //evenly spaces our bars over 500 pixels of SVG width
   .attr("x", function(d, i) {
      return i * (w / dataset.length);
    })
   .attr("y", function(d) {
      return h - (d * 4)  //Height minus data value
    })
   .attr("width", w / dataset.length - barPadding)
   .attr("height", function(d) {
      return (d * 4);  // <-- Times four!
    })
   .attr("fill", function(d) {
      return "rgb(0, 0, " + (d * 10) + ")";
    });










    svg.selectAll("text")
     .data(dataset)
     .enter()
     .append("text")
     .text(function(d) {
        return d;
      })
      .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
      })
      .attr("y", function(d) {
        return h - (d * 4) + 14;  //15 is now 14
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white")
      .attr("text-anchor", "middle")


setTimeout(function(){location.reload()}, 3500)
  

