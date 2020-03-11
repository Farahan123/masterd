import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-graphs-dualaxes',
  templateUrl: './dualaxes.component.html',
  styleUrls: ['./dualaxes.component.css']
})
export class DualaxesComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  @Input() data=[];
  constructor() { }

  ngOnInit() {
    this.chartOptions = {
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Transformers'
        },
        subtitle: {
            text: 'Source: Demand Load'
        },
        xAxis: [{
            categories: [20,40,60,80],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}MVA',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Capacity',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Transformer',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        series: [{
            name: 'Transformer',
            type: 'column',
            yAxis: 1,
            data: [50,100,150,200],
            
    
        }, {
            name: 'Capacity',
            type: 'spline',
            data: this.data,
            tooltip: {
                valueSuffix: 'No.'
          }
      }]
  }
  }

}