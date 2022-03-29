 // Load the Visualization API and the corechart package. Escencial
 google.charts.load('current', {'packages':['corechart']});
 google.charts.load('current', {packages: ['corechart', 'bar']});
 // Set a callback to run when the Google Visualization API is loaded.
 google.charts.setOnLoadCallback(dibujarGrafica);
 google.charts.setOnLoadCallback(drawBasic);
 google.charts.setOnLoadCallback(drawChart);
 google.charts.setOnLoadCallback(drawChart2);
 google.charts.setOnLoadCallback(drawChart3);
 google.charts.setOnLoadCallback(drawSeriesChart);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function dibujarGrafica() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['Champiñones', 1.5],
     ['Cebollas', 0.5],
     ['Aceitunas', 0.1],
     ['Queso', 5],
     ['Pepperoni', 3],
     ['Jamón', 1],
     ['Piña', 3]

   ]);

   // Set chart options
   var options = {'title':'¿Cuánta pizza comistes anoche?',
                  'width':480,
                  'height':300};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('grafica'));
   chart.draw(data, options);
 }

 function drawBasic() {

  var data = google.visualization.arrayToDataTable([
    ['City', '2010 Population',],
    ['New York City, NY', 8175000],
    ['Los Angeles, CA', 3792000],
    ['Chicago, IL', 2695000],
    ['Houston, TX', 2099000],
    ['Philadelphia, PA', 1526000]
  ]);

  var options = {
    title: 'Population of Largest U.S. Cities',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Total Population',
      minValue: 0
    },
    vAxis: {
      title: 'City'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mon', 20, 28, 38, 45],
    ['Tue', 31, 38, 55, 66],
    ['Wed', 50, 55, 77, 80],
    ['Thu', 77, 77, 66, 50],
    ['Fri', 68, 66, 22, 15]
    // Treat first row as data as well.
  ], true);

  var options = {
    legend:'none'
    
  };

  var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div2'));

  chart.draw(data, options);
}

function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ['Dinosaur', 'Length'],
    ['Acrocanthosaurus (top-spined lizard)', 12.2],
    ['Albertosaurus (Alberta lizard)', 9.1],
    ['Allosaurus (other lizard)', 12.2],
    ['Apatosaurus (deceptive lizard)', 22.9],
    ['Archaeopteryx (ancient wing)', 0.9],
    ['Argentinosaurus (Argentina lizard)', 36.6],
    ['Baryonyx (heavy claws)', 9.1],
    ['Brachiosaurus (arm lizard)', 30.5],
    ['Ceratosaurus (horned lizard)', 6.1],
    ['Coelophysis (hollow form)', 2.7],
    ['Compsognathus (elegant jaw)', 0.9],
    ['Deinonychus (terrible claw)', 2.7],
    ['Diplodocus (double beam)', 27.1],
    ['Dromicelomimus (emu mimic)', 3.4],
    ['Gallimimus (fowl mimic)', 5.5],
    ['Mamenchisaurus (Mamenchi lizard)', 21.0],
    ['Megalosaurus (big lizard)', 7.9],
    ['Microvenator (small hunter)', 1.2],
    ['Ornithomimus (bird mimic)', 4.6],
    ['Oviraptor (egg robber)', 1.5],
    ['Plateosaurus (flat lizard)', 7.9],
    ['Sauronithoides (narrow-clawed lizard)', 2.0],
    ['Seismosaurus (tremor lizard)', 45.7],
    ['Spinosaurus (spiny lizard)', 12.2],
    ['Supersaurus (super lizard)', 30.5],
    ['Tyrannosaurus (tyrant lizard)', 15.2],
    ['Ultrasaurus (ultra lizard)', 30.5],
    ['Velociraptor (swift robber)', 1.8]]);

  var options = {
    title: 'Lengths of dinosaurs, in meters',
    legend: { position: 'none' },
  };

  var chart = new google.visualization.Histogram(document.getElementById('chart_div3'));
  chart.draw(data, options);
}

function drawSeriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
    ['CAN',    80.66,              1.67,      'North America',  33739900],
    ['DEU',    79.84,              1.36,      'Europe',         81902307],
    ['DNK',    78.6,               1.84,      'Europe',         5523095],
    ['EGY',    72.73,              2.78,      'Middle East',    79716203],
    ['GBR',    80.05,              2,         'Europe',         61801570],
    ['IRN',    72.49,              1.7,       'Middle East',    73137148],
    ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
    ['ISR',    81.55,              2.96,      'Middle East',    7485600],
    ['RUS',    68.6,               1.54,      'Europe',         141850000],
    ['USA',    78.09,              2.05,      'North America',  307007000]
  ]);

  var options = {
    title: 'Fertility rate vs life expectancy in selected countries (2010).' +
      ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
      'width':480,
      'height':300,

    hAxis: {title: 'Life Expectancy'},
    vAxis: {title: 'Fertility Rate'},
    bubble: {textStyle: {fontSize: 11}}
    
  };

  var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
  chart.draw(data, options);
}

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Director (Year)',  'Rotten', 'IMDB'],
    ['Alfred Hitchcock (1935)', 8.4,         7.9],
    ['Ralph Thomas (1959)',     6.9,         6.5],
    ['Don Sharp (1978)',        6.5,         6.4],
    ['James Hawes (2008)',      4.4,         6.2]
  ]);

  var options = {
    title: 'The decline of \'The 39 Steps\'',
    'width':550,
      'height':300,
    vAxis: {title: 'Accumulated Rating'},
    isStacked: true
  };

  var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div4'));

  chart.draw(data, options);
}