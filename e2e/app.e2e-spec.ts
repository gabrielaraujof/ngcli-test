import { NgcliTestPage } from './app.po';

describe('ngcli-test App', function() {
  let page: NgcliTestPage;

  beforeEach(() => {
    page = new NgcliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
