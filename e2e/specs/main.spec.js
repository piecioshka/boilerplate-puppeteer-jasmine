const puppeteer = require('puppeteer');

const URL = 'https://example.org';

describe('Home Page', () => {
    let browser = null;
    let page = null;

    beforeEach(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto(URL, { waitUntil: 'networkidle2' });
    });

    afterEach(async () => {
        await browser.close();
    });

    it('should set correct title', async () => {
        expect(await page.title()).toBe('Example Domain');
    });

    it('should have proper title', async () => {
        expect(await page.content()).toContain('<h1>Example Domain</h1>');
        expect(await page.$eval('h1', (e) => e.textContent)).toEqual('Example Domain');
    });
});
