import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './pages/bar/bar.component';
import { DoubleBarComponent } from './pages/double-bar/double-bar.component';
import { DoughnutComponent } from './pages/doughnut/doughnut.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'bar', component: BarComponent},
      {path: 'double-bar', component: DoubleBarComponent},
      {path: 'doughnut', component: DoughnutComponent},
      {path: 'doughnut-http', component: DoughnutHttpComponent},
      {path: '**', redirectTo: 'bar'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
