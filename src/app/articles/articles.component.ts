import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { State } from '../../models/state.model';
import { Store } from '@ngrx/store';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as articleActions from '../../store/articles.actions';
import { selectArticlesDtlsData } from '../../store/acticles.selector';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles$!: Observable<Array<Article>>;
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.articles$ = this.store.select(selectArticlesDtlsData);
  }

  addArticle(form: NgForm) {
    this.store.dispatch(
      articleActions.AddArticleAction({ payload: form.value })
    );
    form.reset();
  }
}
