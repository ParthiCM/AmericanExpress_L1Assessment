import { Page } from "@playwright/test";

export class homePageLocators {
  public page: Page;
  public cartesAmericanExpress: string;
  public cookiesAccept: string;
  public goldCardAmericanExpress: string;
  public apply: string;

  constructor(page: Page) {
    this.page = page;
    this.cartesAmericanExpress = "//*[text()='Cartes American Express®']";
    this.cookiesAccept = '[id="user-consent-management-granular-banner-accept-all-button"]';
    this.goldCardAmericanExpress = '[alt="En savoir plus"][href*="https://www.americanexpress.com/fr/carte-de-paiement/gold-card-americanexpress"]';
    this.apply = '//*[contains(@class,"stickySideRail-modules")] //*[text()="Demandez votre Carte"]';
  }

  async getElement(locator: string) {
    const element = this.page.locator(locator);
    return element;
  }
}
