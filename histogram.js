function plot_hist(data_feature, feature_str, bin_no){
    
    d3.selectAll(".svg_barhist").remove();
    d3.selectAll(".abc").remove()
    //console.log(data_feature);

    var margin = {top: 150, right: 40, bottom: 100, left: 250},
        width = 1200 - margin.left - margin.right,
        height = 590 - margin.top - margin.bottom;
    
    d3.select("body")
        .append("h4")
        .attr("class","abc")
        .attr("transform", "translate("+width/3 +","+ 0+")")
        .attr("x", width/2)
        .attr("y", height/6)
        .text("Histogram for "+feature_str)

    // add svg object to the body of the page
    var svg = d3.select("body")
        .append("svg")
            .attr("class", "svg_barhist")
            .attr("width", width + margin.left + margin.right + 150)
            .attr("height", height + margin.top + margin.bottom + 80)
      	.append("g")
            .attr("transform", 
                "translate(" + 1.3*margin.left + "," + margin.top + ")");    

    var xmin = d3.min(data_feature), 
        xmax = d3.max(data_feature);

    var xscale = d3.scaleLinear()
        .domain([xmin, xmax])
        .range([0, width]);
    
    svg.append("g")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(xscale));

    // here, we will set histogram's params    
    var histogram = d3.histogram()
        .value(function(d) { return d; })
        .domain(xscale.domain())
        .thresholds(xscale.ticks(bin_no));

    // And use this function to data to get the bins
    var bins = histogram(data_feature);
    
    var yscale = d3.scaleLinear()
        .range([height, 0]);
        yscale.domain([0, d3.max(bins, function(d) { return d.length; })]);

    svg.append("g")
        .call(d3.axisLeft(yscale));

    svg.selectAll("rect")
        .data(bins)
        .enter()
        .append("rect")
            .attr("class", "bar1")
            .attr("x", 1)
            .attr("transform", function(d) { return "translate(" + xscale(d.x0) + "," + yscale(d.length) + ")"; })
            .attr("width", function(d) { return (xscale(d.x1) - xscale(d.x0) - 1 < 0) ? 0 : xscale(d.x1) - xscale(d.x0) - 1; })
            .attr("height", function(d) { return height - yscale(d.length); })
            .attr("fill","#2362C5") 

    //x-axis label
    svg.append("text")
        .attr("transform", "translate(" + (width/2) + " ," + (height + margin.bottom/3 ) + ")")
        .attr("dy", "0em") //shift along xaxis     
        .style("text-anchor", "middle")
        .text(feature_str);
  
    //y-axis label
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x",0 - (height / 2))
        .attr("y", (0 - margin.left)/6)
        //.attr("dx", "10em") //shift along xaxis
        .attr("dy", "1em") //shift along yaxis
        .style("text-anchor", "middle")
        .text("Frequency");   
}
// sample code - reference - https://www.d3-graph-gallery.com/graph/histogram_basic.html