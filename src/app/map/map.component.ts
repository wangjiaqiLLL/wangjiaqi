import { Component, OnInit } from '@angular/core';
import { AngularEchartsModule } from 'ngx-echarts';
import { Router } from '@angular/router';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent {


  chartOption: any;
  // 基于准备好的dom，初始化echarts实例
  constructor(private router: Router) {
    // 指定图表的配置项和数据
    this.chartOption = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  }
}
