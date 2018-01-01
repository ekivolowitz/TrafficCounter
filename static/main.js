
function formatData(data) {
    let count = {};
    for(let i = 0; i < data.length; ++i) {
        let hourValue = data[i][3];
        console.log(hourValue);
        
        hourValue in count ? count[hourValue] += 1 : count[hourValue] = 1;
    }
    let array = Object.values(count);
    let max = Math.max.apply(null, array);
    return count;
}

function singleDayHistogram(data) {
    var container = d3.select('body');
    var svg = container.append('svg')
        .attr('width', "500px")
        .attr('height', "500px");
    let formattedData = formatData(data)
    let array = Object.values(formattedData);
    let keys = Object.keys(formattedData);
    let max = Math.max.apply(null, array);
    let bins = 11;
    let xScaleLow = 50;
    let xScaleHigh = 470;
    let yScaleLow = 0;
    let yScaleHigh = 400;
    let numTicks = 10;
    // min x axis value will be 7 as the store opens at 7.
    // max x axis will be 17 as the store closes at 5:30
    var xScale = d3.scaleLinear()
        .domain([7,18])
        .range([xScaleLow, xScaleHigh]);
    
    var yScale = d3.scaleLinear()
        .domain([max, 0])
        .range([yScaleLow, yScaleHigh]);
    var yAxis = d3.axisLeft(yScale)
        .ticks(numTicks);
    var xAxis = d3.axisBottom(xScale)
        .ticks(numTicks);
    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, 450)')
        .call(xAxis);
    svg.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(50, 50)')
        .call(yAxis);
    let height = 106 * (yScaleHigh / max);
    console.log(height);
    let rect = svg.append('g')
        .attr('class', 'rectangles');
    let width = (xScaleHigh - xScaleLow) / (numTicks + 1);
    for(let i = 0; i < keys.length; ++i) {
        let h = formattedData[keys[i]] * (yScaleHigh / max);
        rect.append('rect')
            .attr('class', 'data_rectangle')
            .attr('fill', '#FF0000')
            .attr('width', width - 1)
            .attr('height', h)
            .attr('transform', 'translate(' + (51 + i * width) + ', ' + (450 - h) + ')');
    }

}