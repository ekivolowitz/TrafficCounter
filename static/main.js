function singleDayHistogram(data) {
    var container = d3.select('body');
    var svg = container.append('svg')
        .attr('width', "75%")
        .attr('height', "75%");


        // g = svg.append('g').attr('transform', "translate(" + margin.left + ", " + margin.top + ")");
    var x = d3.scaleLinear()
        .range([6, 18]);
    var xAxis = d3.svg.axis().scale(x);
    // var bins = d3.histogram()
    //     .domain(x.domain())
    //     .thresholds(x.ticks(12))
    //     (data);
    // var y = d3.scaleLinear()
    //     .domain([0, d3.max(bins, function(d) {return d.length})])
    //     .range([height, 0]);
    // var bar = g.selectAll('.bar')
    //     .data(bins)
    //     .enter().append('g')
    //         .attr('class', 'bar')
    //         .attr('transform', function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });
    // bar.append('rect')
    //     .attr('x', 1)
    //     .attr('width', x(bins[0].x1) - x(bins[0].x0) - 1)
    //     .attr('height', function(d) { return height - y(d.length); });
    // bar.append('text')
    //     .attr('dy', '.75em')
    //     .attr('y', 6)
    //     .attr('x', (x(bins[0].x1) - x(bins[0].x0)) / 2)
    //     .attr('text-anchor', 'middle')
    //     .text(function(d) { return formatCount(d.length); });
    // g.append('g')
    //     .attr('class', 'axis axis--x')
    //     .attr('transform', 'translate(0,' + height + ')')
    //     .call(d3.axisBottom(x));    
    
    // console.log(data);
}