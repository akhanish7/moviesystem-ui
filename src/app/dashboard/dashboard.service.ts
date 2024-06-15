import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})
export class DashboardService{

  baseUrl;
  constructor(private httpClient : HttpClient) {
    this.baseUrl = 'https://movie-system-lbrl.onrender.com'
  }

  getTopMovies(filters : any){
    let params = new HttpParams();

    for (let key in filters) {
      if (filters[key] != null && filters[key] !== undefined) {
        params = params.set(key, filters[key]);
      }
    }

    return this.httpClient.get(`${this.baseUrl}/movie/top`, { params });
  }

}
