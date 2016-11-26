$(document).ready(function() {
	//var data = [35, 34, 33, 32, 29, 33, 36, 38, 35, 32, 30, 31, 27, 33, 35, 36, 33, 30, 29, 26, 25];
	var data2 = [35, 34, 33, 32, 29, 31];


	//Variables
	var alertmaxvalue = 70;
	var minvalue = 10; //? implement ?
	var ymax = 100;
	var ymin = 0;
	var test = $('#test')[0];

	var margin = {top: 20, right: 20, bottom: 30, left: 50},
		width = 480 - margin.left - margin.right,
		height = 320 - margin.top - margin.bottom;

	function createGraph(target, label){
	  
	  d3.select("svg")
		   .remove();

	  var x = d3.scale.linear()
			  .range([0, width]);

	  var y = d3.scale.linear()
			  .range([height, 0]);

	  var xAxis = d3.svg.axis()
				  .scale(x)
				  .orient("bottom")
				  .innerTickSize(-height)
				  .outerTickSize(0)
				  .tickPadding(10);

	  var yAxis = d3.svg.axis()
				  .scale(y)
				  .orient("left")
				  .innerTickSize(-width)
				  .outerTickSize(0)
				  .tickPadding(10);
	  
	  //Filling under line
	  var area = d3.svg.area()
		.x(function(d, i) { return x(i); })
		.y0(height)
		.y1(function(d) { return y(d); });
	  
	  //Line
	  var line = d3.svg.line()
				 .x(function(d, i) { return x(i); })
				 .y(function(d) { return y(d); });
	  
	  var maxline = d3.svg.line()
					  .x(10)
					  .y(60);

	  var graph = d3.select(target).append("svg")
				.attr("width", width + margin.left + margin.right)
				.attr("height", height + margin.top + margin.bottom + 40)
				.append("g")
				.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	  x.domain(d3.extent(data2, function(d, i) { return i; }));
	  //y.domain(d3.extent(data2, function(d) { return d; }));
	  
	  y.domain([ymin, ymax]); //Max, min

	  graph.append("g")
		  .attr("class", "x axis")
		  .attr("transform", "translate(0," + height + ")")
		  .style("text-anchor", "end")
		  .call(xAxis)

//		  .attr("transform", "translate("+ height +",-180px")

	  graph.append("g")
		  .attr("class", "y axis")
		  .style("text-anchor", "end")
		  .call(yAxis)
	   .append("text")
		  .attr("transform", "rotate(-90)")
		  .attr("y", -40)
		  .attr("dy", ".41em")
		  .attr("font-size", "1.3em")
		  .style("text-anchor", "end")
		  .text(label);
	  
	  //Filling under line
	  graph.append("path")
			.datum(data2)
			.attr("class", "area")
			.attr("d", area);
	  
	  //Line
	  graph.append("path")
		  .datum(data2)
		  .attr("class", "line")
		  .attr("d", line);  
	   
	  graph.append("g")
		.append("line")
		.attr("x1", 0)
		.attr("x2", width)
		.attr("y1", height/100 * (100 - alertmaxvalue))
		.attr("y2", height/100 * (100 - alertmaxvalue))
		.style("stroke", "#ff0000")
		.style("stroke-width", "3");
	  
	}

	function updateGraph(target, label, value)
	{
	  
		//Implement alert functionality here?
	  
		var maxlength = 10;
	  
		if (data2.length == maxlength){
		  data2.shift();    }
	  
		data2.push(value);
		createGraph(target, label);
	}

	function myFunction() {
		var numb = Math.random() * (42 - 22) + 22;
		updateGraph(test, "test", numb)
	}


	createGraph(test, "WORK PLZ");

/*
	setTimeout(myFunction, 1000);
	setTimeout(myFunction, 2000);
	setTimeout(myFunction, 3000);
	setTimeout(myFunction, 4000);
	setTimeout(myFunction, 5000);
	setTimeout(myFunction, 6000);
	setTimeout(myFunction, 7000);
	setTimeout(myFunction, 8000);
	setTimeout(myFunction, 9000);
	setTimeout(myFunction, 11000);
	setTimeout(myFunction, 12000);
	setTimeout(myFunction, 13000);
	setTimeout(myFunction, 14000);
	setTimeout(myFunction, 15000);
	setTimeout(myFunction, 16000);
	setTimeout(myFunction, 17000);
	setTimeout(myFunction, 18000);
	//setTimeout(myFunction, 19000);


	//myFunction();
	//setTimeout(myFunction, 3000);
*/

});


