import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})
export class DashboardService{

  baseUrl;
  constructor(private httpClient : HttpClient) {
    //this.baseUrl = 'https://movie-system-lbrl.onrender.com'
    this.baseUrl = 'http:/localhost:4000'
  }

  getTopMovies(filters : any){
    console.log(this.baseUrl);
    return this.httpClient.get(`http:/localhost:4000/movie/top`);
  }

}
