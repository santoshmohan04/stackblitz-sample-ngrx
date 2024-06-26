/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { provideStore } from '@ngrx/store';
import { ArticleReducer } from './store/course.reducer';
import { ArticlesComponent } from './app/articles/articles.component';

bootstrapApplication(ArticlesComponent, {
  providers: [provideStore({ course: ArticleReducer })],
});
