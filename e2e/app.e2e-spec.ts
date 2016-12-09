import { SkyviewPage } from './app.po';

describe('skyview App', function() {
  let page: SkyviewPage;

  beforeEach(() => {
    page = new SkyviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
