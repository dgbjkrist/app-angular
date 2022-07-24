import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  LOGIN_URL = '/api/login';
  LOGOUT_URL = '';

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    const loginData = {
      username: 'djegba@gmail.com',
      password: 'Jesuisla'
    }

    return new Observable<boolean>((observer) => {
      this.httpClient.post(environment.baseUrl + this.LOGIN_URL, loginData)
      .subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      })
    });
  }
}
