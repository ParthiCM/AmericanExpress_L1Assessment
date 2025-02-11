import { UserFormLocators } from "./userFormLocators";

export class UserFormPage extends UserFormLocators {
  public userFormLocators: UserFormLocators;
  constructor(page: any) {
    super(page);
    this.page = page;
    this.userFormLocators = new UserFormLocators(page);
  }

  /**
   * Selects the gender radio button and clicks on it.
   * This method finds the radio button element associated with the specified gender and performs a click action on it.
   * @param {("MR" | "MS")} gender - The gender to select ("MR" or "MS").
   */
  async selectGender(gender: "MR" | "MS") {
    const firstNameElement = await this.getElement(this.genderRadioBtn(gender));
    await firstNameElement.click();
  }

  /**
   * Enters the first name into the corresponding input field.
   * This method finds the element associated with `firstName` and fills it with the provided value.
   * @param {string} firstName - The first name to enter.
   * @throws Will throw an error if the element is not found or the input action fails.
   */
  async enterFirstName(firstName: string) {
    const firstNameElement = await this.getElement(this.firstName);
    await firstNameElement.fill(firstName);
  }

  /**
   * Enters the last name into the corresponding input field.
   * This method finds the element associated with `lastName` and fills it with the provided value.
   * @param {string} lastName - The last name to enter.
   */
  async enterLastName(lastName: string) {
    const lastNameElement = await this.getElement(this.lastName);
    await lastNameElement.fill(lastName);
  }

  /**
   * Enters the date of birth into the corresponding input field.
   * This method finds the element associated with `dateOfBirth` and fills it with the provided value.
   * @param {string} dateOfBirth - The date of birth to enter.
   */
  async enterDateOfBirth(dateOfBirth: string) {
    const dateOfBirthElement = await this.getElement(this.dateOfBirth);
    await dateOfBirthElement.fill(dateOfBirth);
  }

  /**
   * Enters the email ID into the corresponding input field.
   * This method finds the element associated with `emailId` and fills it with the provided value.
   * @param {string} emailId - The email ID to enter.
   */
  async enterEmailId(emailId: string) {
    const emailIdElement = await this.getElement(this.emailId);
    await emailIdElement.fill(emailId);
  }

  /**
   * Enters the phone number into the corresponding input field.
   * This method finds the element associated with `phoneNumber` and fills it with the provided value.
   * @param {string} phoneNumber - The phone number to enter.
   */
  async enterPhoneNumber(phoneNumber: string) {
    const phoneNumberElement = await this.getElement(this.phoneNumber);
    await phoneNumberElement.fill(phoneNumber);
  }

  /**
   * Submits the form by clicking the submit button and waits for the page to load.
   * This method finds the element associated with `submit`, performs a click action on it, and waits for the page to load completely.
   */
  async submitForm() {
    const phoneNumberElement = await this.getElement(this.submit);
    await phoneNumberElement.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  /**
   * Checks if the "Vos Informations Personnelles" title is displayed.
   * @returns {Promise<boolean>} A promise that resolves to `true` if the element is visible, otherwise `false`.
   */
  async isVosInformationsPersonnellesTitleDisplayed(): Promise<boolean> {
    const vosInformationsPersonnelles = await this.getElement(
      this.vosInformationsPersonnelles
    );
    await vosInformationsPersonnelles.waitFor({
      state: "visible",
      timeout: 10000,
    });
    return await vosInformationsPersonnelles.isVisible();
  }
}
