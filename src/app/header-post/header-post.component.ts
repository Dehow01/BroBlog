import {Component, OnInit, AfterContentChecked} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
// @ts-ignore
import { data } from '../../assets/data/criterion.json';
import { Categories } from  '../model/linkHeader';
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.css']
})
export class HeaderPostComponent implements OnInit, AfterContentChecked   {
  links: Categories[];
  visibility = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private http: HttpServiceService) {}

  ngOnInit() {
    this.http.getLinkHeader().subscribe( res => this.links = res );
  }
  ngAfterContentChecked(): void {
    this.visibility = (this.router.url === '/') ? true : false;
  }
}
