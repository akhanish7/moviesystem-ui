import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn : 'root'
})
export class DashboardService{
  constructor(private httpClient : HttpClient) {
  }

  getX(){
    return this.httpClient.get('https://api.restful-api.dev/objects');
  }

}
