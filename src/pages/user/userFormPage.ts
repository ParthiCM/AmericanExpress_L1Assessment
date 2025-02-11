import { UserFormLocators } from "./userFormLocators";

export class UserFormPage extends UserFormLocators {
  public userFormLocators: UserFormLocators;
  constructor(page: any) {
    super(page);
    this.page = page;
    this.userFormLocators = new UserFormLocators(page);
  }
  async selectGender(gender: "MR" | "MS") {
    const firstNameElement = await this.getElement(this.genderRadioBtn(gender));
    await firstNameElement.click();
  }
  async enterFirstName(firstName: string) {
    const firstNameElement = await this.getElement(this.firstName);
    await firstNameElement.fill(firstName);
  }
  async enterLastName(lastName: string) {
    const lastNameElement = await this.getElement(this.lastName);
    await lastNameElement.fill(lastName);
  }
  async enterDateOfBirth(dateOfBirth: string) {
    const dateOfBirthElement = await this.getElement(this.dateOfBirth);
    await dateOfBirthElement.fill(dateOfBirth);
  }
  async enterEmailId(emailId: string) {
    const emailIdElement = await this.getElement(this.emailId);
    await emailIdElement.fill(emailId);
  }
  async enterPhoneNumber(phoneNumber: string) {
    const phoneNumberElement = await this.getElement(this.phoneNumber);
    await phoneNumberElement.fill(phoneNumber);
  }
  async submitForm() {
    const phoneNumberElement = await this.getElement(this.submit);
    await phoneNumberElement.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
  async isVosInformationsPersonnellesTitleDisplayed(): Promise<boolean> {
    const vosInformationsPersonnelles = await this.getElement(
      this.vosInformationsPersonnelles
    );
    await vosInformationsPersonnelles.waitFor({
      state: "visible",
      timeout: 10000,
    });
    return await vosInformationsPersonnelles.isDisabled();
  }
}
