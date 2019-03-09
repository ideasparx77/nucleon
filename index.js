const { CanvasRenderService } = require('chartjs-node-canvas');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 8888;

app.get('/', async (req, res) => {
    const canvasRenderService = new CanvasRenderService(width, height, chartCallback);
    var conf = configTimeChart;
    conf.data.datasets[0].data = getRandomdata();

    const image = await canvasRenderService.renderToBuffer(conf);
    var wstream = fs.createWriteStream('sample.png');
    wstream.write(image);
    wstream.end();

    const dataUrl = await canvasRenderService.renderToDataURL(conf);
    var html = `<img src="` + dataUrl + `"/>`
    res.send(html);
});
app.listen(port, () => console.log(`app listening on port ${port}!`));

const width = 400;
const height = 300;
const configuration = {
    type: 'line',
    borderColor : "#fffff",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: (value) => { '$' + value; }
                }
            }]
        }
    }
}

const configTimeChart = {
    type: 'line',
    data: {
        datasets:[{
            label: '# Users logged in',
            data : getRandomdata(),
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            xAxes: [{
                type: 'time',
                distribution: 'series'
            }]
        }
    }
}

const chartCallback = (ChartJS) => {

    ChartJS.defaults.global.responsive = true;
    ChartJS.defaults.global.maintainAspectRatio = false;
}

function getRandomdata(){
    var d = [];
    var startDate = new Date();
    startDate = new Date(startDate.getTime()-(7*24*60*60*1000));
    for(var i=0;i<100; i++){
        startDate = new Date(startDate.getTime() + (Math.random()*60*60000));
        d.push(
            {
                x : startDate,
                y : (10 + (Math.random() *5))
            }
        );
    } 
    return d;
}

/*
(async () => {
    const canvasRenderService = new CanvasRenderService(width, height, chartCallback);
    var conf = configTimeChart;
    const image = await canvasRenderService.renderToBuffer(conf);
    const dataUrl = await canvasRenderService.renderToDataURL(conf);
    const stream = canvasRenderService.renderToStream(conf);
    var html = `<img src="` + dataUrl + `"/>`
    fs.writeFile("sample.html", html, (err,data)=>{});
})();
*/
