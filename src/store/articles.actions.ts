import { Article } from '../models/article.model';
import { createAction, props } from '@ngrx/store';

export const AddArticleAction = createAction(
  '[ARTICLE] Add ARTICLE',
  props<{ payload: Article }>()
);
