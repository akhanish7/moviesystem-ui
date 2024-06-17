import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-movie-graph',
  templateUrl: './movie-graph.component.html',
  styleUrls: ['./movie-graph.component.scss']
})
export class MovieGraphComponent implements OnInit, OnChanges, OnDestroy {
  @Input() movies: any[] = [];
  public chart: any;

  public yAxisData: any = [];
  public xAxisData: any = [];

  ngOnInit() {
    this.getRequiredChartData(this.movies);
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movies']) {
      this.updateChart();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  getRequiredChartData(movieData: any[]) {
    this.yAxisData = [];
    this.xAxisData = [];
    movieData.forEach((movie: any) => {
      if (movie.title && movie.revenue) {
        this.yAxisData.push(movie.revenue);
        this.xAxisData.push(movie.title);
      }
    });
  }

  createChart() {
    const chartElement = document.getElementById("MyChart") as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(chartElement, {
      type: 'bar', // This denotes the type of chart

      data: { // Values on X-Axis
        labels: this.xAxisData, // Movie Name
        datasets: [
          {
            label: "Revenue",
            data: this.yAxisData, // Revenue Array
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }

  updateChart() {
    this.getRequiredChartData(this.movies);
    this.createChart();
  }
}
