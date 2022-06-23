import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarComponent } from './pages/bar/bar.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';


@NgModule({
  declarations: [
    BarComponent,
    BarGraphComponent,
    DoubleBarComponent,
    DoughnutComponent,
    DoughnutHttpComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
