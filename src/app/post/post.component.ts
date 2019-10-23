import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {HttpServiceService} from '../http-service.service';
import {Post} from '../model/Post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  notes: Post[] = [];
  category: string;
  private subscription: Subscription;

  constructor(private router: Router, private httpService: HttpServiceService, private activatedRoute: ActivatedRoute) {
    this.subscription = activatedRoute.params.subscribe(params => {
      this.category = params.category;
      this.getData();
    });
  }


  ngOnInit() {
    this.getData();
  }

  getData() {
    this.httpService.getData(this.category).subscribe((data) => this.notes = data);
  }

  goToPostPage(id) {
    this.router.navigateByUrl(`post/${id}`);
  }
}
