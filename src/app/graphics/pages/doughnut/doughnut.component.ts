import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' , 'Other'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 150 ], backgroundColor: ['#FF4645', '#E87110', '#FAA43C', '#FFEE43'], hoverBackgroundColor: '#95CEFF' }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';


}
