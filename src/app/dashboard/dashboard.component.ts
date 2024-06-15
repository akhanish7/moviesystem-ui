import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./dashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{

  movies: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    // this.movies = [
    //   {
    //     "_id": "666b774d9cb427a93e1788e2",
    //     "title": "Avengers: Endgame",
    //     "genre": "action",
    //     "language": "english",
    //     "releaseDate": "2019-04-26T00:00:00.000Z",
    //     "revenue": 2797800564,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e3",
    //     "title": "Joker",
    //     "genre": "drama",
    //     "language": "english",
    //     "releaseDate": "2019-10-04T00:00:00.000Z",
    //     "revenue": 1074251311,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788df",
    //     "title": "The Dark Knight",
    //     "genre": "action",
    //     "language": "english",
    //     "releaseDate": "2008-07-18T00:00:00.000Z",
    //     "revenue": 1004558444,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788de",
    //     "title": "Inception",
    //     "genre": "action",
    //     "language": "english",
    //     "releaseDate": "2010-07-16T00:00:00.000Z",
    //     "revenue": 829895144,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e0",
    //     "title": "Interstellar",
    //     "genre": "fantasy",
    //     "language": "english",
    //     "releaseDate": "2014-11-07T00:00:00.000Z",
    //     "revenue": 677471339,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e5",
    //     "title": "Baahubali: The Beginning",
    //     "genre": "action",
    //     "language": "telegu",
    //     "releaseDate": "2015-07-10T00:00:00.000Z",
    //     "revenue": 650000000,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e7",
    //     "title": "Enthiran",
    //     "genre": "sci-fi",
    //     "language": "tamil",
    //     "releaseDate": "2010-10-01T00:00:00.000Z",
    //     "revenue": 290000000,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e1",
    //     "title": "Parasite",
    //     "genre": "thriller",
    //     "language": "english",
    //     "releaseDate": "2019-05-30T00:00:00.000Z",
    //     "revenue": 258754465,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e4",
    //     "title": "3 Idiots",
    //     "genre": "comedy",
    //     "language": "hindi",
    //     "releaseDate": "2009-12-25T00:00:00.000Z",
    //     "revenue": 92000000,
    //     "__v": 0
    //   },
    //   {
    //     "_id": "666b774d9cb427a93e1788e6",
    //     "title": "Drishyam",
    //     "genre": "mystery",
    //     "language": "malayalam",
    //     "releaseDate": "2013-12-19T00:00:00.000Z",
    //     "revenue": 75000000,
    //     "__v": 0
    //   }
    // ];
    this.fetchMovies({});
  }

  onFiltersChanged(filters: any) {
    this.fetchMovies(filters);
  }

  fetchMovies(filters: any) {
    this.dashboardService.getTopMovies(filters).subscribe((data : any) => {
      this.movies = data;
    });
  }


}
