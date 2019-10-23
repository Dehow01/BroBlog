import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';
import {MarkdownEditorOptions} from '../../model/MarkdownEditorOptions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EditorComponent
  ],
  exports: [
    EditorComponent
  ]
})
export class MarkdownEditorModule {
  static forRoot(config: MarkdownEditorOptions) {
    return {
      ngModule: MarkdownEditorModule,
      providers: [{provide: MarkdownEditorOptions, useValue: config}]
    };
  }
}
