google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Category', 'Amount'],
        ['Grocery', 240],
        ['Restaurants', 1600],
        ['Entertainment', 7000],
        ['Retail', 20000],
        ['Rent', 840]
    ]);

    var options = {
        title: "Monthly Spending: January"
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

function redraw() {
    drawChart();
}

function back() {
    window.location.href="home.html";
}

function logout() {
    window.location.href="login.html";
}

function manual() {
    window.location.href="manual.html";
}

function newCard() {
    window.location.href="newCard.html";
}

function changeText1(id) {
    var temp = document.getElementById("demo-menu-lower-right1").innerHTML;
    temp = temp.substr(0, temp.length-2);
    document.getElementById("demo-menu-lower-right1").innerHTML = id.textContent + " &#9662";
    id.innerHTML = temp;
}

function changeText(id) {
    var temp = document.getElementById("demo-menu-lower-right").innerHTML;
    temp = temp.substr(0, temp.length-2);
    document.getElementById("demo-menu-lower-right").innerHTML = id.textContent + " &#9662";
    id.innerHTML = temp;
}

/*
// Wait for the DOM to load everything, just to be safe
$(document).ready(

// Pie Chart code
	  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

// Bar chart code
/*    function() {

        // Create our graph from the data table and specify a container to put the graph in
        createGraph('#data-table', '#chart');

        // Here be graphs
        function createGraph(data, container) {
            // Declare some common variables and container elements	
            var bars = [];
            var figureContainer = $('<div id="figure"></div>');
            var graphContainer = $('<div class="graph"></div>');
            var barContainer = $('<div class="bars"></div>');
            var data = $(data);
            var container = $(container);
            var chartData;
            var chartYMax;
            var columnGroups;

            // Timer variables
            var barTimer;
            var graphTimer;

            // Create table data object
            var tableData = {
                // Get numerical data from table cells
                chartData: function() {
                    var chartData = [];
                    data.find('tbody td').each(function() {
                        chartData.push($(this).text());
                    });
                    return chartData;
                },
                // Get heading data from table caption
                chartHeading: function() {
                    var chartHeading = data.find('caption').text();
                    return chartHeading;
                },
                // Get legend data from table body
                chartLegend: function() {
                    var chartLegend = [];
                    // Find th elements in table body - that will tell us what items go in the main legend
                    data.find('tbody th').each(function() {
                        chartLegend.push($(this).text());
                    });
                    return chartLegend;
                },
                // Get highest value for y-axis scale
                chartYMax: function() {
                    var chartData = this.chartData();
                    // Round off the value
                    var chartYMax = Math.ceil(Math.max.apply(Math, chartData)) * 1000;
                    return chartYMax;
                },
                // Get y-axis data from table cells
                yLegend: function() {
                    var chartYMax = this.chartYMax();
                    var yLegend = [];
                    // Number of divisions on the y-axis
                    var yAxisMarkings = 5;
                    // Add required number of y-axis markings in order from 0 - max
                    for (var i = 0; i < yAxisMarkings; i++) {
                        yLegend.unshift(((chartYMax * i) / (yAxisMarkings - 1)) / 1000);
                    }
                    return yLegend;
                },
                // Get x-axis data from table header
                xLegend: function() {
                    var xLegend = [];
                    // Find th elements in table header - that will tell us what items go in the x-axis legend
                    data.find('thead th').each(function() {
                        xLegend.push($(this).text());
                    });
                    xLegend.shift();
                    console.log('x legend: ', xLegend);
                    return xLegend;
                },
                // Sort data into groups based on number of columns
                columnGroups: function() {
                    var columnGroups = [];
                    // Get number of columns from first row of table body
                    var columns = data.find('tbody tr:eq(0) td').length;
                    for (var i = 0; i < columns; i++) {
                        columnGroups[i] = [];
                        data.find('tbody tr').each(function() {
                            columnGroups[i].push($(this).find('td').eq(i).text());
                        });
                    }
                    console.log(columnGroups);
                    return columnGroups;
                }
            }

            // Useful variables for accessing table data		
            chartData = tableData.chartData();
            chartYMax = tableData.chartYMax();
            columnGroups = tableData.columnGroups();

            // Construct the graph

            // Loop through column groups, adding bars as we go
            $.each(columnGroups, function(i) {
                // Create bar group container
                var barGroup = $('<div class="bar-group"></div>');
                // Add bars inside each column
                for (var j = 0, k = columnGroups[i].length; j < k; j++) {
                    // Create bar object to store properties (label, height, code etc.) and add it to array
                    // Set the height later in displayGraph() to allow for left-to-right sequential display
                    var barObj = {};
                    barObj.label = this[j];
                    barObj.height = Math.floor(barObj.label / chartYMax * 100) + '%';
                    barObj.bar = $('<div class="bar fig' + j + '"><span>' + barObj.label + '</span></div>')
                        .appendTo(barGroup);
                    bars.push(barObj);
                }
                // Add bar groups to graph
                barGroup.appendTo(barContainer);
            });

            // Add heading to graph
            var chartHeading = tableData.chartHeading();
            var heading = $('<h4>' + chartHeading + '</h4>');
            heading.appendTo(figureContainer);

            // Add legend to graph
            var chartLegend = tableData.chartLegend();
            var legendList = $('<ul class="legend"></ul>');
            $.each(chartLegend, function(i) {
                var listItem = $('<li><span class="icon fig' + i + '"></span>' + this + '</li>')
                    .appendTo(legendList);
            });
            legendList.appendTo(figureContainer);

            // Add x-axis to graph
            var xLegend = tableData.xLegend();
            var xAxisList = $('<ul class="x-axis"></ul>');
            $.each(xLegend, function(i) {
                var listItem = $('<li><span>' + this + '</span></li>')
                    .appendTo(xAxisList);
            });
            xAxisList.appendTo(graphContainer);

            // Add y-axis to graph	
            var yLegend = tableData.yLegend();
            var yAxisList = $('<ul class="y-axis"></ul>');
            $.each(yLegend, function(i) {
                var listItem = $('<li><span>' + this + '</span></li>')
                    .appendTo(yAxisList);
            });
            yAxisList.appendTo(graphContainer);

            // Add bars to graph
            barContainer.appendTo(graphContainer);

            // Add graph to graph container		
            graphContainer.appendTo(figureContainer);

            // Add graph container to main container
            figureContainer.appendTo(container);

            // Set individual height of bars
            function displayGraph(bars, i) {
                // Changed the way we loop because of issues with $.each not resetting properly
                if (i < bars.length) {
                    // Animate height using jQuery animate() function
                    $(bars[i].bar).animate({
                        height: bars[i].height
                    }, 800);
                    // Wait the specified time then run the displayGraph() function again for the next bar
                    barTimer = setTimeout(function() {
                        i++;
                        displayGraph(bars, i);
                    }, 100);
                }
            }
        }
    }
	);*/
