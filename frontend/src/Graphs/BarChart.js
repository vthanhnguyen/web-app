import React from 'react';
import NVD3Chart from 'react-nvd3';
import "../Styling/index.css";
import "../Styling/NVD3.css";


function generateNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function getDatum() {
    let sin = [],
        sin2 = [],
        sin3 = [];

    const len =  35 + (Math.random() * (70-35));
    for (let i = 0; i < len; i++) {
        sin.push({
            'x': i,
            'y': generateNumber(0, 60)
        });
        sin2.push({
            'x': i,
            'y': generateNumber(0, 100)
        });
        sin3.push({
            'x': i,
            'y': generateNumber(0, 30)
        });
    }
    return [
        {
            values: sin,
            key: 'Stream #0',
            color: '#1de9b6'
        },
        {
            values: sin3,
            key: 'Stream #1',
            color: '#04a9f5'
        },
        {
            values: sin2,
            key: 'Stream #3',
            color: '#000080',
            area: true
        }
    ];
}

class BarChart extends React.Component {

    render() {
        const data = getDatum();
        return <div className="barchart">
        <div class="container">
        <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.2} />

        </div>
      </div>
    }
}

export default BarChart;