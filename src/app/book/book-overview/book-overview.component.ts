import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  books: Book[];

  constructor() {
    this.books = [];
  }

  ngOnInit() {
    this.books.push(new Book('John Example', 'Angular in a nutshell'));
    this.books.push(new Book('Super Hero', 'Wrap everything'));
  }
}
