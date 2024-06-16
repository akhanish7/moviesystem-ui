import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { environment } from '../../environments/environment';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class AuthService{
  private storageChangeSubject = new BehaviorSubject<string>('');
  constructor(private httpClient : HttpClient) {
    window.addEventListener('storage', (event:any) => {
      if (event.key === 'userName') {
        this.storageChangeSubject.next(event.newValue);
      }
    });
  }

  validateUserCredentails(token : string){
    const params = new HttpParams().set('id_token',token);
    return this.httpClient.get(`${environment.googleEndPoint}/tokeninfo`, {params});
  }

  saveUserData(userData: any){
    const body = {
      name : userData.name,
      email : userData.email
      , profileImage : userData.picture
    }
    return this.httpClient.post(`${environment.backendUrl}/user/create`,body);
  }


  getStorageChanges() {
    return this.storageChangeSubject.asObservable();
  }


}
