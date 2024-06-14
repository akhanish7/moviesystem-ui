import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule} from "@angular/router";
import {DashboardService} from "./dashboard.service";
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieGraphComponent } from './movie-graph/movie-graph.component';
import {FormsModule} from "@angular/forms";
import {provideCharts, withDefaultRegisterables} from "ng2-charts";

@NgModule({
  declarations: [
    DashboardComponent,
    MovieFilterComponent,
    MovieGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
     path : '',
     component : DashboardComponent
    }]
    ),
    FormsModule,
  ],
  providers : [DashboardService,provideCharts(withDefaultRegisterables())]
})
export class DashboardModule { }
