import {Injectable} from 'angular2/core';
import {d3} from "../../components/app/app.component";
import * as $ from 'jquery';

@Injectable()
export class GraphService {

    drawGraph(dataArray, y_variable, vizWrapper) {

        var data = dataArray;

        var height = 211,
            width = 260,
            padding = 50;

        var viz = d3.select(vizWrapper)
            .append('svg')
            .attr('height', height + padding * 2)
            .attr('width', width + padding * 2)
            .append('g')
            .attr('id', 'viz')
            .attr('transform', 'translate(' + padding + ',' + padding/2 + ')');

        var xScale = d3.time.scale().range([0, width]);
        var yScale = d3.scale.linear().range([height, 0]);

        var xAxis = d3.svg.axis().scale(xScale)
            .orient('bottom')
            .ticks(20);

        var yAxis = d3.svg.axis().scale(yScale)
            .orient('left')
            .ticks(20);

        var parseTime = d3.time.format.iso;

        var yDomain = d3.extent(data, function (d) {
            return parseInt(d[y_variable]);
        });

        var xMin = d3.min(data, function (d) {
            var time = parseTime.parse(d.time);
            time.setMinutes(time.getMinutes() - 5);
            return time;
        });

        var xMax = d3.max(data, function (d) {
            var time = parseTime.parse(d.time);
            time.setMinutes(time.getMinutes() + 5);
            return time;
        });

        xScale.domain([xMin, xMax]);
        yScale.domain(yDomain);

        viz.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis)
            .selectAll('text')
            .attr('transform', function () {
                return 'rotate(-65)'
            })
            .style('text-anchor', 'end')
            .style('font-size', '10px')
            .attr('dx', '-10px')
            .attr('dy', '10px');

        viz.append('g')
            .attr('class', 'y axis')
            .call(yAxis);

        var x = d3.scale.linear()
            .range([0, width]);

        var y = d3.scale.linear()
            .range([height, 0]);

        var line = d3.svg.line()
            .x(function (d) {

                //console.log("Herro");
                return xScale(parseTime.parse(d.time));


            })
            .y(function (d) {
                return yScale(d[y_variable]);
            });

        viz.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

    };

    data2:[number] = [35, 34, 33, 32, 29, 31];


    //Variables
    alertmaxvalue: number = 70;
    minvalue: number = 10; //? implement ?
    ymax: number = 100;
    ymin: number = 0;
    liveGraph: $ = $('#liveGraph')[0];


    createGraph(target, label){

        var margin = {top: 20, right: 20, bottom: 10, left: 50},
            width = 360 - margin.left - margin.right,
            height = 280 - margin.top - margin.bottom;

        d3.select("#liveGraph svg")
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


        x.domain(d3.extent(this.data2, function(d, i) { return i; }));
        //y.domain(d3.extent(data2, function(d) { return d; }));

        y.domain([this.ymin, this.ymax]); //Max, min

        graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .style("text-anchor", "end")
            .call(xAxis)

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
            .datum(this.data2)
            .attr("class", "area")
            .attr("d", area);

        //Line
        graph.append("path")
            .datum(this.data2)
            .attr("class", "line")
            .attr("d", line);

        graph.append("g")
            .append("line")
            .attr("x1", 0)
            .attr("x2", width)
            .attr("y1", height/100 * (100 - this.alertmaxvalue))
            .attr("y2", height/100 * (100 - this.alertmaxvalue))
            .style("stroke", "#ff0000")
            .style("stroke-width", "3");
    }

    updateGraph(target, label, value, self) {

        //Implement alert functionality here?

        var maxlength = 10;

        if (this.data2.length == maxlength){
            this.data2.shift();    }

        this.data2.push(value);
        self.createGraph(target, label);
    }

    myFunction(self) {
        var numb = Math.random() * (42 - 22) + 22;
        var liveGraph = $('#liveGraph')[0];
        self.updateGraph(liveGraph, "", numb, self);
    }

    prov() {
        console.log('vaaa!');
    }


    graphInit() {
        var liveGraph = $('#liveGraph')[0];
        this.createGraph(liveGraph, "");
        var self = this;

        setTimeout(() => { this.myFunction(self) },1000);
        setTimeout(() => { this.myFunction(self) },2000);
        setTimeout(() => { this.myFunction(self) },3000);
        setTimeout(() => { this.myFunction(self) },4000);
        setTimeout(() => { this.myFunction(self) },5000);
        setTimeout(() => { this.myFunction(self) },6000);
        setTimeout(() => { this.myFunction(self) },7000);
        setTimeout(() => { this.myFunction(self) },8000);
        setTimeout(() => { this.myFunction(self) },9000);
        setTimeout(() => { this.myFunction(self) },10000);
        setTimeout(() => { this.myFunction(self) },11000);
        setTimeout(() => { this.myFunction(self) },12000);
        setTimeout(() => { this.myFunction(self) },13000);
        setTimeout(() => { this.myFunction(self) },14000);
        setTimeout(() => { this.myFunction(self) },15000);
        setTimeout(() => { this.myFunction(self) },16000);
        setTimeout(() => { this.myFunction(self) },17000);
        setTimeout(() => { this.myFunction(self) },18000);
        setTimeout(() => { this.myFunction(self) },19000);
    }

}
