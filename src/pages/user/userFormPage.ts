import { UserFormLocators } from "./userFormLocators";


export class UserFormPage extends UserFormLocators {
    public userFormLocators: UserFormLocators;
    constructor(page: any) {
        super(page);
        this.page = page;
        this.userFormLocators = new UserFormLocators(page);
    }
    async selectGender(gender : "MR" | "MS") {
        const firstNameElement = await this.getElement(this.userFormLocators.genderRadioBtn(gender));
        await firstNameElement.click();
    }
    async enterFirstName(firstName: string) {
        const firstNameElement = await this.getElement(this.userFormLocators.firstName);
        await firstNameElement.fill(firstName);
    }
    async enterLastName(lastName: string) {
        const lastNameElement = await this.getElement(this.userFormLocators.lastName);
        await lastNameElement.fill(lastName);
    }
    async enterDateOfBirth(dateOfBirth: string) {
        const dateOfBirthElement = await this.getElement(this.userFormLocators.dateOfBirth);
        await dateOfBirthElement.fill(dateOfBirth);
    }
    async enterEmailId(emailId: string) {
        const emailIdElement = await this.getElement(this.userFormLocators.emailId);
        await emailIdElement.fill(emailId);
    }
    async enterPhoneNumber(phoneNumber: string) {
        const phoneNumberElement = await this.getElement(this.userFormLocators.phoneNumber);
        await phoneNumberElement.fill(phoneNumber);
    }
    async submitForm() {
        const phoneNumberElement = await this.getElement(this.userFormLocators.submit);
        await phoneNumberElement.click();
    }
}