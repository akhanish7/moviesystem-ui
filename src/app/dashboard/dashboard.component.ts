import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  movies: any[] = [];
  isDataLoaded = false;

  constructor(private dashboardService: DashboardService) { }

  async ngOnInit() {
    await this.fetchMovies({});
  }

  onFiltersChanged(filters: any) {
    this.fetchMovies(filters);
  }

  fetchMovies(filters: any) {
    this.dashboardService.getTopMovies(filters).subscribe((data : any) => {
      this.movies = data;
      this.isDataLoaded = true;
    });
  }


}
