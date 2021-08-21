const query = 'https://five-why.herokuapp.com/chart';
const test = 'http://localhost:4000/chart';

fetch(query)
    .then((response) => {
        return response.json();
    }).then((data) => {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawChartReason);
        google.charts.setOnLoadCallback(drawChartImpact);
        google.charts.setOnLoadCallback(drawChartShift);

        const { mechanical, electrical, expirience, materials, control, quality, cost, delivery, moral, shift1, shift2, shift3, shift4 } = data;

        function drawChartReason() {

            var reasonAnalize = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Механика', mechanical],
                ['Электрика', electrical],
                ['Навыки', expirience],
                ['Сырье', materials],
                ['Контроль', control],
            ]);


            var chart = new google.visualization.PieChart(document.getElementById('reason'));

            chart.draw(reasonAnalize, {
                title: 'Анализ причин',
                legend: { position: 'left', alignment: 'center' }
            });
        }

        ////////////////////////

        function drawChartImpact() {

            var reasonAnalize = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Quality', quality],
                ['Cost', cost],
                ['Delivery', delivery],
                ['Moral', moral]
            ]);

            var chart = new google.visualization.PieChart(document.getElementById('impact'));

            chart.draw(reasonAnalize, {
                title: 'Анализ влияний',
                legend: { position: 'left', alignment: 'center' }
            });
        }

        ////////////////////////

        function drawChartShift() {

            var reasonAnalize = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Смена 1', shift1],
                ['Смена 2', shift2],
                ['Смена 3', shift3],
                ['Смена 4', shift4]
            ]);


            var chart = new google.visualization.PieChart(document.getElementById('shift'));

            chart.draw(reasonAnalize, {
                title: 'Анализ смен',
                legend: { position: 'left', alignment: 'center' }
            });
        }
    });