import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';
import {environment} from '../../../../../environments/environment';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private signInBackendApi = environment.weeklyMenuPlanning + 'public/signin';
  private signUpBackendApi = environment.weeklyMenuPlanning + 'public/signup';

  constructor(private http: HttpClient) {
  }

  public signUp(userName: string, firstName: string, Password: string) {

    return this.http.post<any>(this.signUpBackendApi, {
      email: userName,
      name: firstName,
      password: Password
    })
      .pipe(map(res => {
        if (res && res.id) {
          console.log(res.id);
        }
        return res;
      }));

  }

  public login(userName: string, Password: string) {

    return this.http.post<any>(this.signInBackendApi, {
      email: userName,
      password: Password
    })
      .pipe(map(res => {
        if (res && res.token) {
          localStorage.setItem('token', res.token);
          console.log(res.token);
        }
        return res;
      }));

  }
}
