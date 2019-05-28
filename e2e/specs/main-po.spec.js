const { HomePage } = require('../page-objects/home-page.po');

describe('Home Page (with page object)', () => {
    let page = null;

    beforeEach(async () => {
        page = new HomePage();
        await page.setup();
    });

    afterEach(async () => {
        await page.close();
    });

    it('should set correct title', async () => {
        expect(await page.title()).toBe('Example Domain');
    });

    it('should have proper title', async () => {
        expect(await page.getHeaderContent()).toEqual('Example Domain');
    });
});
