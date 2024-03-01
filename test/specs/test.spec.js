describe("Test suite", ()=> {
    it("First test", async () => {
        await browser.url("https://www.epam.com/");
        const pageTitle = await browser.getTitle();
        expect(pageTitle).toEqual("EPAM | Software Engneering & Product Development Services");
    });

    it("Second test", async () => {
        await browser.maximizeWindow();
        await $$("a.top-navigation__item-link")[2].click();
    });
});