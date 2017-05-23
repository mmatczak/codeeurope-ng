import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  books: Book[];

  constructor(private http: Http) {
    this.books = [];
  }

  ngOnInit() {
    this.http.get('api/books')
      .map((response) => response.json())
      .subscribe((books) => {
        this.books.push(new Book(books[0].author, books[0].title));
      });
  }
}
