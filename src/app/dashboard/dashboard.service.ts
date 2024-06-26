import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn : 'root'
})
export class DashboardService{

  baseUrl;
  constructor(private httpClient : HttpClient) {
    this.baseUrl = environment.backendUrl;
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
