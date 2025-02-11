import { Page } from "@playwright/test";

export class UserFormLocators {


    public page :Page;
    public firstName :string;
    public lastName:string;
    public dateOfBirth:string;
    public emailId:string;
    public phoneNumber:string;
    public submit:string;
    public genderRadioBtn:(gender : "MR" | "MS") => string;



    constructor(page : Page) {
        this.page = page;
        this.firstName = '[name="firstName"]',
        this.lastName = '[name="lastName"]',
        this.dateOfBirth = '[name="fieldControl-input-dateOfBirth"]',
        this.emailId = '[id="fieldControl-input-email"]',
        this.phoneNumber = '[id="fieldControl-input-mobilePhoneNumber"]',
        this.submit = '[type="submit"]',
        this.genderRadioBtn = (gender) =>{
            return `[for="${gender}"];`
        }
    }

    async getElement(locator: string) {
        const element = this.page.locator(locator);

        return element;
      }
}