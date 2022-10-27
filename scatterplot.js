function plot_scatter(scat){
    var svg = d3.select("svg"),
    margin = 200,
    width = svg.attr("width") - margin,
    //width = 1200,
    height = svg.attr("height") - margin
    //height = 640

    svg.append("text")
    .attr("transform", "translate("+width/3+","+ 0+")")
    .attr("x", 200)
    .attr("y", 50)
    .attr("font-size", "15px")
    .text("Scatter Plot between Player's " + scat[0] + " and "+ scat[1])
    .text("Preffered Foot - Right(Red) | Left(Blue)")

// for categorical use scaleband    
//    var xScale = d3.scaleBand().range([0, width]).padding(0.4);
//        .domain([ d3.min(arr[0]), d3.max(arr[0]) ])
    var xScale = d3.scaleLinear().range([0, width]);
    yScale = d3.scaleLinear().range([height, 0]);

    var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");
      
    d3.csv("data/processed_fifa22.csv", function(error, data) {
    if (error) {
        throw error;}
    console.log(scat[0]);

    //xScale.domain(data.map(function(d) { return d.Weight; }));
    xScale.domain([d3.min(data, function(d){return d[scat[0]]; }) , d3.max(data, function(d){return d[scat[0]]; } ) ] );
    yScale.domain([d3.min(data, function(d) { return d[scat[1]]; } ) , d3.max(data, function(d) { return d[scat[1]]; } ) ] );

    g.append("g")
    .attr("transform", "translate(0," + height + ")") 
    .call(d3.axisBottom(xScale))
    .append("text")
    .attr("y", 40)
    .attr("x", width/2)
    .attr("text-anchor", "middle")
    .attr("stroke", "black")
    .style("font-size", 15)
    .text(scat[0]);

    g.append("g")
    .call(d3.axisLeft(yScale).tickFormat(function(d){
        return  d;
    }).tickSize(-width))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 27)
//    .attr("x", -180)
    .attr("x",0 - (height / 2))
    .attr("dy", "-5.1em")
    .attr("text-anchor", "middle")
    .attr("stroke", "black")
    .style("font-size", 15)
    .text(scat[1]);

    g.selectAll(".circle")
    .data(data)
    .enter().append("circle")
        .transition()
        .ease(d3.easeLinear)
        .duration(700)
        .delay(function (d, i) {return i * 7;})
        .attr("class", "bar")
        .attr("r", function(d) { return 5; })
        .attr("cx", function(d) { return xScale(d[scat[0]]); })
        .attr("cy", function(d) { return yScale(d[scat[1]]); })
//    .style("fill","red") // pass the data value to our y scale and receive the corresponding y value from the y range.
        .style("fill" , function(d){
            if(d.PreferredFoot == "Right"){
                return "#FF150E"
            }
            else{
                return "#0B31D0"  
            }
        });
    }) 
}

// to handle the radio button
scat = []
if (document.querySelector('input[name="axis_val"]')) {
    document.querySelectorAll('input[name="axis_val"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        scatterRadio = event.target.value;
        // console.log(scatterRadio);
        if(scat.length < 2){
            scat.push(document.getElementById("scatterstselect").value)
            //console.log(scat)
        }
        else if(scat.length === 2){
            // console.log(scat[0], scat[1])
            plot_scatter(scat)
        }
        else{
            console.log("error")
        }
      });
    });
}

// references-
// https://github.com/ayushGHub/CSE332_SampleCode/blob/master/scatterplot.html