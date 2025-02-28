const { HomePage } = require("../page-objects/home-page.po");

describe("Home Page (with Page Object)", () => {
  const page = new HomePage();

  beforeEach(async () => {
    await page.open();
  });

  afterEach(async () => {
    await page.close();
  });

  it("should set correct title", async () => {
    expect(await page.title()).toBe("Example Domain");
  });

  it("should have proper title", async () => {
    expect(await page.getHeaderContent()).toEqual("Example Domain");
  });
});
