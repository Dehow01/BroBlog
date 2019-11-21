import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Post} from './model/Post';
import {Observable} from 'rxjs';
import { Categories} from './model/linkHeader';
import { map, filter, scan } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'https://us-central1-junonalove-f4d6c.cloudfunctions.net/api';
  }
  getPostPage(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/post/${id.toString()}`);
  }
  getLinkHeader(): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${this.baseUrl}/getHeaderLink`);
  }
  getRecommendation(category: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/getRecommendation/${category}`);
  }
  fetchPosts(category: string, page: number) {
    return this.http.get<Post[]>(`${this.baseUrl}/posts/${category}?page=${page}`);
  }


}
