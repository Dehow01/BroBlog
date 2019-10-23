import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CriterionComponent } from './criterion/criterion.component';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PostComponent } from './post/post.component';
import { HeaderPostComponent } from './header-post/header-post.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { EditorComponent } from './modules/markdown-editor/editor/editor.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';
import {HttpClientModule} from '@angular/common/http';
import { CardRecommendationComponent } from './card-recommendation/card-recommendation.component';

@NgModule({
  declarations: [
    AppComponent,
    CriterionComponent,
    PostComponent,
    HeaderPostComponent,
    ShowPostComponent,
    EditorComponent,
    CardRecommendationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    AngularMarkdownEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
