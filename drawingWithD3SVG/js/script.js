var dataset = [ 5, 10, 15, 20, 25 ];

//Width and height
var w = 500;
var h = 50;

// d3.select("body").append("svg");

// var svg = d3.select("body").append("svg");
//Think of svg not as a “variable” but as a “reference pointing to the SVG object that we just created.”

// var svg = d3.select("body")
//             .append("svg")
//             .attr("width", 500)
//             .attr("height", 50);


var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


// svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle");

var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");

// circles.attr("cx", function(d, i) {
//             return (i * 50) + 25;
//         })
//        .attr("cy", h/2)
//        .attr("r", function(d) {
//             return d;
//        });


circles.attr("cx", function(d, i) {
            return (i * 50) + 25;
        })
       .attr("cy", h/2)
       .attr("r", function(d) {
            return d;
       })
      .attr("fill", "yellow")
      .attr("stroke", "orange")
      .attr("stroke-width", function(d) {
          return d/2;
      });

// circles.attr("cx", function(d, i) { return (i * 50) + 25;})
// Takes the reference to all circles and sets the cx attribute for each one. 
// Our data has already been bound to the circle elements, so for each circle, the value d matches the corresponding value in our 
// original data set (5, 10, 15, 20, or 25). Another value, i, is also automatically populated for us. i is a 
// numeric index value of the current element. Counting starts at zero, so for our “first” circle i == 0, the second 
// circle’s i == 1 and so on. We’re using i to push each subsequent circle over to the right, because each subsequent loop through, 
// the value of i increases.
// (0 * 50) + 25 returns 25
// (1 * 50) + 25 returns 75
// (2 * 50) + 25 returns 125
// (3 * 50) + 25 returns 175
// (4 * 50) + 25 returns 225
// To make sure i is available to your custom function, you must include it as an argument in 
// the function definition (function(d, i)). You must also include d, even if 
// you don’t use d within your function (as in the case above).
