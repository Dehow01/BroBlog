import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CriterionComponent} from './criterion/criterion.component';
import {ShowPostComponent} from './show-post/show-post.component';
import {PostComponent} from './post/post.component';

const routes: Routes = [
  { path: ':category', component:  PostComponent},
  { path: '', component: CriterionComponent },
  { path: 'post/:id', component: ShowPostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
