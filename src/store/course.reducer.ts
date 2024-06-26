import { createReducer, on } from '@ngrx/store';
import { State } from '../models/state.model';
import * as articleActions from './articles.actions';

const initialState: State = {
  article: [
    {
      id: '1',
      title: 'Angular State Management with NgRx',
      author: 'Santosh',
      publisher: 'SyncFusion',
    },
  ],
};

export const ArticleReducer = createReducer(
  initialState,
  on(articleActions.AddArticleAction, (state: State, action: any) => ({
    ...state,
    article: [...state.article, action.payload],
  }))
);

export const getdata = (state: State) => {
  return state.article;
};
