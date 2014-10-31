// var body = d3.select("body");
// var p = body.append("p");
// p.text("New paragraph!");

// d3.select("body").append("p").text("Second paragraph!");

// d3.select("body")
//   .append("p")
//   .text("Third Paragraphs!");

//var dataset = [ 5, 10, 15, 20, 25, 30 ];

// d3.select("body")
//     .selectAll("p")
//     .data(dataset)
//     .enter()
//     .append("p")
//     .text("New paragraph!");

//console.log(d3.selectAll("p"))

// d3.select("body")
//   .selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text(function(d) { return d; });

// d3.select("body").selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text(function(d) {return "I can count up to " + d; });


// d3.select("body").selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text("I can count up to " +  d);


// d3.select("body").selectAll("p")
//   .data(dataset)
//   .enter()
//   .append("p")
//   .text(function(d) { return d; })
//   .style("color", function(d) {
//     if (d > 15) {   //Threshold of 15
//         return "red";
//     } else {
//         return "black";
//     }
// });



// d3.select("body") — Finds the body in the DOM and hands a reference off to the next step in the chain.

// .selectAll("p") — Selects all paragraphs in the DOM. Since none exist yet, this returns an empty selection. Think of this empty selection as representing the paragraphs that will soon exist.

// .data(dataset) — Counts and parses our data values. There are five values in our data set, so everything past this point is executed five times, once for each value.

// .enter() — To create new, data-bound elements, you must use enter(). This method looks at the DOM, and then at the data being handed to it. If there are more data values than corresponding DOM elements, then enter() creates a new placeholder element on which you may work your magic. It then hands off a reference to this new placeholder to the next step in the chain.

// .append("p") — Takes the placeholder selection created by enter() and inserts a p element into the DOM. Hooray! Then it hands off a reference to the element it just created to the next step in the chain.

// .text("New paragraph!") — Takes the reference to the newly created p and inserts a text value.


// Data Wants to be Held

// You may be wondering why you have to write out function(d)... instead of just d on its own. For example, this won’t work:

// .text("I can count up to " + d);
// In this context, without wrapping d in an anonymous function, d has no value. Think of d as a lonely little placeholder value that just needs a warm, containing hug from a kind, caring function’s parantheses. (Extending this metaphor further, yes, it is creepy that the hug is being given by an anonymous function — stranger danger! — but that only confuses matters.)


