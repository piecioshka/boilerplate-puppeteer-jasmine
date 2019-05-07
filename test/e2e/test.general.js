const puppeteer = require('puppeteer');

describe('General', () => {
    let browser = null;
    let page = null;

    beforeEach(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' });
    });

    afterEach(async () => {
        await browser.close();
    });

    it('should set correct title', async () => {
        expect(await page.title()).toBe('Hacker News');
    });
});
