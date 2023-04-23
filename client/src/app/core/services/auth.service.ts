import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map } from 'rxjs';
import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';

const defaultUser = null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject(defaultUser);

  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) { 
    const dataUser = this.sessionService.getItem("currentUser");
    if (dataUser != null) {
        this.user$.next(dataUser);
    }
  }

  setUser(user: any) {
    this.sessionService.removeItem("currentUser");
    this.sessionService.setItem("currentUser", user);
    this.user$.next(user);
  }

  login(mail: string, password: string): Promise<IUser> {
    let data = {mail, password};
    return this.http.post(`${environment.apiserver}/auth/login`, data).pipe(map((res: any) => {
      return {...res.usuario, token: res.token};
    })).toPromise();
  }
  
  logout() {
    this.sessionService.removeItem("currentUser");
    this.user$.next(defaultUser);
  }


}
