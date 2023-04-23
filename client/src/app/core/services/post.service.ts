import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiServe = `${environment.apiserver}/posts`;

  constructor(
    private http: HttpClient,
  ) { }

  getPosts() {
    return this.http.get(`${this.apiServe}/`).pipe(map((res: any) => {
      return res;
    }, 
    catchError((err) => {return err;})));
  }

}
