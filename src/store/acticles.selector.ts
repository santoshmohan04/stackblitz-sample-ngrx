import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourse from './course.reducer';
import { State } from '../models/state.model';

export const selectArticlesData = createFeatureSelector<State>(
  'course'
);

export const selectArticlesDtlsData = createSelector(
  selectArticlesData,
  fromCourse.getdata
);
