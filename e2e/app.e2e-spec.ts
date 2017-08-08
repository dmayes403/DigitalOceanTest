import { DigitalOceanTestPage } from './app.po';

describe('digital-ocean-test App', () => {
  let page: DigitalOceanTestPage;

  beforeEach(() => {
    page = new DigitalOceanTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
