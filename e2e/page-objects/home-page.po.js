const puppeteer = require('puppeteer');

class HomePage {

    constructor() {
        this.url = 'http://example.org';
    }

    async open() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        await this.page.goto(this.url);
    }

    async close() {
        await this.browser.close();
    }

    title() {
        return this.page.title();
    }

    getHeaderContent() {
        return this.page.$eval('h1', ($el) => $el.textContent);
    }

}

module.exports = {
    HomePage
};
