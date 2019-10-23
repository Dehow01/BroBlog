import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpServiceService} from '../http-service.service';
import {Post} from '../model/Post';
import {Location} from '@angular/common';
import {CardRecommendationComponent} from '../card-recommendation/card-recommendation.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  post: Post;
  idPost: number;
  private sub: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpServiceService,
    private location: Location) {
    this.sub = activatedRoute.params.subscribe(params => {
      this.idPost = params.id;
      console.log(params);
      this.getStart();
    });
  }

  ngOnInit() {
    console.log(this.post);
    this.getStart();
  }

  backClick() {
    this.location.back();
  }

  getStart() {
    this.httpService.getPostPage(this.idPost).subscribe((res) => {
      this.post = res;
    });
  }
}
