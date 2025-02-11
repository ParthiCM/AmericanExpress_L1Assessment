import { homePageLocators } from "./homePageLocators";

export class Homepage extends homePageLocators {
  public homePageLocators: homePageLocators;

  constructor(page: any) {
    super(page);
    this.page = page;
    this.homePageLocators = new homePageLocators(page);
  }

  /**
   * Handles the acceptance of cookies on the page.
   * This method attempts to find and click the "Accept Cookies" button if it is visible within a 10-second timeout period.
   * If the button is not found or not visible within the timeout, it logs a message indicating that the cookies banner was not found.
   * */
  async handleCookies() {
    try {
      const cookiesAccept = await this.getElement(this.cookiesAccept);
      await cookiesAccept.waitFor({ state: "visible", timeout: 10000 });
      await cookiesAccept.click();
    } catch (error) {
      console.log("Cookies banner not found");
    }
  }

  /**
   * Selects the "Cartes American Express" element and clicks on it.
   * This method finds the element associated with `cartesAmericanExpress` and performs a click action on it.
   */
  async selectCartesAmericanExpress() {
    const firstNameElement = await this.getElement(this.cartesAmericanExpress);
    await firstNameElement.click();
  }
  /**
   * Selects the "Gold Card American Express" element and clicks on it.
   * This method finds the element associated with `goldCardAmericanExpress` and performs a click action on it.
   */
  async selectGoldCardAmericanExpress() {
    const goldCardAmericanExpress = await this.getElement(
      this.goldCardAmericanExpress
    );
    await goldCardAmericanExpress.click();
  }

  /**
   * Clicks the "Apply" button and waits for the page to load.
   * This method finds the element associated with `apply`, performs a click action on it, and waits for the page to load completely.
   */
  async applyButton() {
    const apply = await this.getElement(this.apply);
    await apply.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
