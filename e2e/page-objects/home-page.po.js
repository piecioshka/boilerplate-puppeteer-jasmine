const puppeteer = require('puppeteer');

class HomePage {

    constructor() {
        this.url = 'https://example.org';
        this.setup();
    }

    async setup() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        await this.page.goto(this.url, { waitUntil: 'networkidle2' });
    }

    title() {
        return this.page.title();
    }

    close() {
        return this.browser.close();
    }

    getHeaderContent() {
        return this.page.$eval('h1', (e) => e.textContent)
    }

}

module.exports = {
    HomePage
};
