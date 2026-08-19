const puppeteer = require("puppeteer");

const URL = "https://example.org";

// Launching the browser and hitting an external URL does not fit into the
// default 5s jasmine timeout on a cold CI runner.
jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

describe("Home Page", () => {
  let browser = null;
  let page = null;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    page = await browser.newPage();
    await page.goto(URL, { waitUntil: "domcontentloaded" });
  });

  afterEach(async () => {
    await browser?.close();
  });

  it("should set correct title", async () => {
    expect(await page?.title()).toBe("Example Domain");
  });

  it("should have proper title", async () => {
    expect(await page?.content()).toContain("<h1>Example Domain</h1>");
    expect(await page?.$eval("h1", (e) => e.textContent)).toEqual(
      "Example Domain"
    );
  });
});
