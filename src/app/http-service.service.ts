import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from './model/Post';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Categories} from './model/linkHeader';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {
  }
  getData(category: string): Observable<Post[]> {
    return this.http.get<Post[]>("/api/category/" + category);
  }
  getPostPage(id: number): Observable<Post> {
    return this.http.get<Post>("/api/post/" + id.toString());
  }
  getLinkHeader(): Observable<Categories[]> {
    return this.http.get<Categories[]>("/api/getHeaderLink");
  }
  getRecommendation(category: string): Observable<Post[]> {
    console.log( this.http.post<Post[]>("/api/getRecommendation", category));
    return (this.http.post<Post[]>("/api/getRecommendation", category));
    }
}
