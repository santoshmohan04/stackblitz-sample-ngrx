import { Article } from './article.model';

export interface State {
  readonly article: Array<Article>;
}
