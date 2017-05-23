import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookOverviewComponent } from './book-overview/book-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookOverviewComponent],
  exports: [BookOverviewComponent]
})
export class BookModule { }
