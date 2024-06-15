import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Chart,registerables, ChartData, ChartOptions} from "chart.js";
Chart.register(...registerables)
@Component({
  selector: 'app-movie-graph',
  templateUrl: './movie-graph.component.html',
  styleUrl: './movie-graph.component.scss'
})
 export class MovieGraphComponent implements OnInit{
  @Input() movies: any[] = [];
  public chart: any;

  public yAxisData : any = [];
  public xAxisData: any = [];

  ngOnInit() {
    this.getRequiredChartData(this.movies);
    this.createChart();
  }

  getRequiredChartData(movieData : any[]){
    movieData.forEach((movie: any) =>{
      if(movie.title && movie.revenue){
        this.yAxisData.push(movie.revenue);
        this.xAxisData.push(movie.title);
      }
    })
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.xAxisData, //Movie Name
        datasets: [
          {
            label: "Revenue",
            data: this.yAxisData, // Revenue Array
            backgroundColor: 'blue'
          },
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}
