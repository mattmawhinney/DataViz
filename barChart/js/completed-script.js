
var dataset = [ 5, 10, 13, 19, 21];

// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];


// var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25,
//                 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
//                 11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];




// var datasetLength = Math.round(Math.random() * 50)
// var dataset = [];                        //Initialize empty array
// for (var i = 0; i < datasetLength; i++) {           //Loop 25 times
//     var newNumber =  Math.round(Math.random() * 30);  //New random number (0-30)
//     dataset.push(newNumber);             //Add new number to array
// }

// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", function(d) {
//         var barHeight = d * 5;
//         return barHeight + "px";
//     });




//Width and height
var w = 500;
var h = 300;
var barPadding = 1;  // <-- New!



//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);


// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("x", 0)
//    .attr("y", 0)
//    .attr("width", 20)
//    .attr("height", 100);



// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("x", function(d, i) {
//       return i * 21;  //Bar width of 20 plus 1 for padding
//     })
//    .attr("y", 0)
//    .attr("width", 20)
//    .attr("height", 300);


// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    //evenly spaces our bars over 500 pixels of SVG width
//    .attr("x", function(d, i) {
//       return i * (w / dataset.length);
//     })
//    // x = 0 * 500/20, x = 1 * 500/20, x = 2 * 500/20 ... x = 19 * 500/20 
//    .attr("y", 0)
//    .attr("width", 20)
//    .attr("height", 300);


//adjusts width to fill entire container leaving even spacing
// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    //evenly spaces our bars over 500 pixels of SVG width
//    .attr("x", function(d, i) {
//       return i * (w / dataset.length);
//     })
//    .attr("y", 0)
//    .attr("width", w / dataset.length - barPadding)
//    .attr("height", 300);



//use heights from data set
//but is updidedown
// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    //evenly spaces our bars over 500 pixels of SVG width
//    .attr("x", function(d, i) {
//       return i * (w / dataset.length);
//     })
//    .attr("y", 0)
//    .attr("width", w / dataset.length - barPadding)
//    .attr("height", function(d) {
//       return d * 4;  // <-- Times four!
//     });



//flip it for real!

// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    //evenly spaces our bars over 500 pixels of SVG width
//    .attr("x", function(d, i) {
//       return i * (w / dataset.length);
//     })
//    .attr("y", function(d) {
//       return h - (d * 4)  //Height minus data value
//     })
//    .attr("width", w / dataset.length - barPadding)
//    .attr("height", function(d) {
//       return (d * 4);  // <-- Times four!
//     });



//add teal
// svg.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    //evenly spaces our bars over 500 pixels of SVG width
//    .attr("x", function(d, i) {
//       return i * (w / dataset.length);
//     })
//    .attr("y", function(d) {
//       return h - (d * 4)  //Height minus data value
//     })
//    .attr("width", w / dataset.length - barPadding)
//    .attr("height", function(d) {
//       return (d * 4);  // <-- Times four!
//     })
//    .attr("fill", "teal");

//add gradient coloring 
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


//add numbers
   // svg.selectAll("text")
   //   .data(dataset)
   //   .enter()
   //   .append("text")
   //   .text(function(d) {
   //      return d;
   //    })
   //    .attr("x", function(d, i) {
   //      return i * (w / dataset.length);
   //    })
   //    .attr("y", function(d) {
   //      return h - (d * 4);
   //    });


  //reorient numbers
  // svg.selectAll("text")
  //    .data(dataset)
  //    .enter()
  //    .append("text")
  //    .text(function(d) {
  //       return d;
  //     })
  //     .attr("x", function(d, i) {
  //       return i * (w / dataset.length) + 5;  // +5
  //     })
  //     .attr("y", function(d) {
  //       return h - (d * 4) + 15;              // +15
  //     })
     
    //make numbers white and nicer font
    // svg.selectAll("text")
    //  .data(dataset)
    //  .enter()
    //  .append("text")
    //  .text(function(d) {
    //     return d;
    //   })
    //   .attr("x", function(d, i) {
    //     return i * (w / dataset.length) + 5;  // +5
    //   })
    //   .attr("y", function(d) {
    //     return h - (d * 4) + 15;              // +15
    //   })
    //   .attr("font-family", "sans-serif")
    //   .attr("font-size", "11px")
    //   .attr("fill", "white")
    //   .attr("text-anchor", "middle")





    //move text to middle
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


// setTimeout(function(){location.reload()}, 3000)
  

