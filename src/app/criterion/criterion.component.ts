import { Component, OnInit } from '@angular/core';
import { HttpServiceService} from '../http-service.service';
import { Categories} from '../model/linkHeader';

@Component({
  selector: 'app-criterion',
  templateUrl: './criterion.component.html',
  styleUrls: ['./criterion.component.css']
})
export class CriterionComponent implements OnInit {
  links: Categories[];
  constructor(private http: HttpServiceService) {
  }
  ngOnInit() {
    this.http.getLinkHeader().subscribe(res => { this.links = res; });
  }


}
