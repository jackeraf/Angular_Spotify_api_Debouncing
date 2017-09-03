import { SpotifySearcherPage } from './app.po';

describe('spotify-searcher App', () => {
  let page: SpotifySearcherPage;

  beforeEach(() => {
    page = new SpotifySearcherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
