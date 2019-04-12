import { FrontSextaPage } from './app.po';

describe('front-sexta App', () => {
  let page: FrontSextaPage;

  beforeEach(() => {
    page = new FrontSextaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
