import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as articleActions from '../../store/articles.actions';
import { selectArticlesDtlsData } from '../../store/acticles.selector';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent implements OnInit {
  articles$!: Observable<Array<Article>>;
  addArticleForm!: FormGroup;
  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addArticleForm = this.fb.group({
      articleid: [null, [Validators.required]],
      title: [null, [Validators.required]],
      author: [null, [Validators.required]],
      publisher: [null]
    });
    this.articles$ = this.store.select(selectArticlesDtlsData);
  }

  addArticle(form: FormGroup) {
    if(form.invalid){
      return
    }

    const add_payload = {
      id: form.value.articleid,
      title: form.value.title,
      author: form.value.author,
      publisher: form.value.publisher
    }
    this.store.dispatch(
      articleActions.AddArticleAction({ payload: add_payload })
    );
    form.reset();
  }

  deleteArticle(data: Article) {
    this.store.dispatch(articleActions.DeleteArticleAction({ payload: data }));
  }
}
