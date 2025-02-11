import { homePageLocators } from "./homePageLocators";

export class Homepage extends homePageLocators {
  public homePageLocators: homePageLocators;

  constructor(page: any) {
    super(page);
    this.page = page;
    this.homePageLocators = new homePageLocators(page);
  }

  async handleCookies() {
    try {
      const cookiesAccept = await this.getElement(this.cookiesAccept);
      await cookiesAccept.waitFor({ state: "visible", timeout: 10000 });
      await cookiesAccept.click();
    } catch (error) {
      console.log("Cookies banner not found");
    }
  }

  async selectCartesAmericanExpress() {
    const firstNameElement = await this.getElement(this.cartesAmericanExpress);
    await firstNameElement.click();
  }
  
  async selectGoldCardAmericanExpress() {
    const goldCardAmericanExpress = await this.getElement(this.goldCardAmericanExpress);
    await goldCardAmericanExpress.click();
  }
  
  async applyButton() {
    const apply = await this.getElement(this.apply);
    await apply.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
