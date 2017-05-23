export class Book {
  constructor(private _author: string, private _title: string) {
  }

  get author(): string {
    return this._author;
  }

  get title(): string {
    return this._title;
  }
}
