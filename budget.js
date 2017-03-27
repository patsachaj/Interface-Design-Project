google.charts.load('current', {
    packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        data = google.visualization.arrayToDataTable([
            ['Category', 'Budget', 'Spending'],
            ['Grocery', 250, 240],
            ['Restaurants', 700, 1600],
            ['Entertainment', 1000, 7000],
            ['Retail', 1000, 20000],
            ['Rent', 840, 840]
        ]);

        options = {
          chart: {
            title: 'Budget and Actual Spending',
            subtitle: 'January',
          }
        };

        chart = new google.charts.Bar(document.getElementById('chart_div'));

        chart.draw(data, options);
      }

function redraw() {
    chart.draw(data, options);
}

function back() {
    window.location.href="home.html";
}

function logout() {
    window.location.href="login.html";
}

function manual() {
    window.location.href="mbud.html";
}

function newCard() {
    window.location.href="mbud.html";
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