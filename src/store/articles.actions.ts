import { Article } from '../models/article.model';
import { createAction, props } from '@ngrx/store';

export const AddArticleAction = createAction(
  '[ARTICLE] Add ARTICLE',
  props<{ payload: Article }>()
);

export const DeleteArticleAction = createAction(
  '[ARTICLE] Delete ARTICLE',
  props<{ payload: Article }>()
);