import { CeBookAppPage } from './app.po';

describe('ce-book-app App', () => {
  let page: CeBookAppPage;

  beforeEach(() => {
    page = new CeBookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Angular workshop at Code Europe!');
  });
});
