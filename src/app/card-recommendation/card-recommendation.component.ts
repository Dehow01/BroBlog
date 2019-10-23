import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import {Post} from '../model/Post';
import {HttpServiceService} from '../http-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-recommendation',
  templateUrl: './card-recommendation.component.html',
  styleUrls: ['./card-recommendation.component.css']
})
export class CardRecommendationComponent implements OnInit {
  @Input() category: string;
  posts: Post[];
  constructor(private http: HttpServiceService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.category);
    this.http.getRecommendation(this.category).subscribe( (res) => {
      this.posts = res;
      console.log(res);
    });
  }
  goToPostPage(id: number) {
    this.router.navigateByUrl(`post/${id}`);
  }

}
