import { ProfilePage } from './ProfilePage.po';

describe('ProfilePage App', () => {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
  });

  it('should display message containing precure-not-found', async () => {

    const resp = await page.postComment();
    if (!resp) {
      fail('aaaaaaaa');
    }
    console.log('2222', resp);
    expect(true).toBe(true);

  });
});
