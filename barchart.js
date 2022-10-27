function feature_occurrence(dataset, feature){
	var count_feature = d3.nest()
        .key(function(d) { return eval("d."+ feature)})
        .rollup(function(values) { return values.length; })
        .entries(dataset)
        //.sort(function(x, y){ return d3.descending(x.value, y.value) });
     return count_feature;
}
// as we need data in format -> ["argentina":5, "spain":10, "japan":3] as for barchart we needed count of each categorical features.
//So we will use above function to convert normal csv data into required format.

function plot_bar(feature_str){    
    d3.selectAll(".svg_barhist").remove();
    d3.selectAll(".abc").remove()
    //d3.selectAll("*").remove();

    var margin = {top: 150, right: 40, bottom: 100, left: 250},
        width = 1200 - margin.left - margin.right,
        height = 590 - margin.top - margin.bottom;

    if(feature_str === "Club"){
        var margin = {top: 100, right: 40, bottom: 100, left: 80},
        width = 2000 - margin.left - margin.right - 170,
        height = 590 - margin.top - margin.bottom - 50;
    }

    // add svg object to the body of the page
    var svg = d3.select("body")
        .append("svg")
            .attr("class", "svg_barhist")
            .attr("width", width + margin.left + margin.right + 150)
            .attr("height", height + margin.top + margin.bottom + 80)
        .append("g")
            .attr("transform", 
                "translate(" + 1.3*margin.left + "," + margin.top + ")");    

    d3.csv("./data/processed_fifa22.csv", function(data){
        var cnt = feature_occurrence(data, feature_str)

        var x = d3.scaleBand()
            .domain(cnt.map(function(d){ return d.key; }))
            .range([0, width])
            .paddingInner(0.35)
            .paddingOuter(0.5);

        var y = d3.scaleLinear()
            .domain([0, d3.max(cnt, function(d){
                return d.value;
            })])
            .range([height, 0]);

        //x-axis label
        if(feature_str === "Club"){  
            svg.append("text")             
            .attr("transform", "translate(" + (width/2) + " ," + (height + (margin.top - margin.bottom)+155) + ")")
            .style("text-anchor", "middle")
            .text(feature_str);
        }
        else{  
            svg.append("text")             
            .attr("transform", "translate(" + (width/2) + " ," + (height + (margin.top - margin.bottom)*1.3  ) + ")")
            .style("text-anchor", "middle")
            .text(feature_str);
        }

        //y axis label
        if(feature_str === "Club"){  
            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x",0 - (height / 2))
                .attr("y", (0 - margin.left)/2 )
                //.attr("dx", "10em") //shift along xaxis
                .attr("dy", "1em") //shift along yaxis
                .style("text-anchor", "middle")
                .text("Frequency");  
        }
        else{  
            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("x",0 - (height / 2))
                .attr("y", (0 - margin.left)/6 - 5 )
                //.attr("dx", "10em") //shift along xaxis
                .attr("dy", "1em") //shift along yaxis
                .style("text-anchor", "middle")
                .text("Frequency");
        }

        //tooltip
        var tip = d3.tip()
            .attr('class', 'd3-tip').offset([-7, 0]).html(function(d) {
            return "<strong>Total:</strong> <span style='color:black'>" + d.value + "</span>";
        })
        svg.call(tip);        

        // append the rectangles for the bar chart
        svg.selectAll("rect")
            .data(cnt)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.key); })
            .attr("width", x.bandwidth())
            //.on('mouseover', tip.show)
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); })

            .on('mouseover', function(d){
                x = +d3.select(this).attr('x') - 10;
                width = +d3.select(this).attr('width') +10;
                y = +d3.select(this).attr('y') - 10;
                height = +d3.select(this).attr('height') +10;

                d3.select(this)
                    .attr("x",x )
                    .attr("width", width)
                    .attr("y",y )
                    .attr("height", height)
                    .style("fill", "#EB7C0D")

                tip.show(d);
            })
            .on('mouseout', function(d){
                x = +d3.select(this).attr('x') + 10;
                width = +d3.select(this).attr('width')-10;
                y = +d3.select(this).attr('y') + 10;
                height = +d3.select(this).attr('height') -10;

                d3.select(this)
                    .attr('x', x)
                .attr('width', width)
                .attr('y',  y)
                .attr('height', height)
                .style("fill", "#3364BC");
                tip.hide()
            })
            .style("fill", "#3364BC");

        // add the x Axis
        if(feature_str === "Club"){    
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,75)rotate(-90)");

        // add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
        }
        else{
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,10)rotate(-30)");

        // add the y Axis
        svg.append("g")
            .call(d3.axisLeft(y));
        }
    });
}

function rev_plot(feature_str){

    d3.selectAll(".svg_barhist").remove();

    var margin = {top: 150, right: 40, bottom: 100, left: 250},
    width = 1200 - margin.left - margin.right,
    height = 1290 - margin.top - margin.bottom;

    console.log("ab")

    var svg = d3.select("body")
    .append("svg")
        .attr("class", "svg_barhist")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");

    d3.csv("./data/processed_fifa22.csv", function(data){
        var cnt = feature_occurrence(data, feature_str)

    // Add X axis
    var x = d3.scaleLinear()
        .domain([0, d3.max(cnt.map(function(d){ return d.value; }))])
        .range([width,0]);    

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    var y = d3.scaleBand()
        .range([ height,0 ])
        .domain(cnt.map(function(d) { return d.key; }))
        .padding(.1);
    svg.append("g")
        .attr("transform", "translate(" + width +",0  )")
        .call(d3.axisLeft(y))
        .selectAll("text")
            .attr("transform", "translate(50,0)")
            .attr("x",0 )
            .attr("y", 0 )
            .style("text-anchor", "end");
    
    svg.selectAll("myRect")
        .data(cnt)
        .enter()
        .append("rect")
        .attr("x",  function(d) { return x(d.value); })
        .attr("y", function(d) { return y(d.key); })
        .attr("width", function(d) { return width - x(d.value);} )
        .attr("height", y.bandwidth() )
        .attr("fill", "#69b3a2")
})
// reference - 
// https://github.com/ayushGHub/CSE332_SampleCode/blob/master/basic_bar.html
// https://www.d3-graph-gallery.com/graph/barplot_horizontal.html

}
// $("#barhistselect").on("change", function(){
//     var node = document.getElementById('barhistselect');
//     var drop_down_selected = node.options[node.selectedIndex].value
//     console.log(drop_down_selected);
// })

// var switchStatus = false;
// $("#toggle_bar").on('change', function() {
// console.log(document.getElementsByClassName("toogle"))
//     if ($(this).is(':checked')) {
//         switchStatus = $(this).is(':checked');
//        console.log(switchStatus);// To verify
//        toggle_bar()
//        parent_bar()
//     }
//     else {
//        switchStatus = $(this).is(':checked');
//        console.log(switchStatus);// To verify

//     }
// });



