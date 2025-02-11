import { expect, test } from "@playwright/test";
import { envVar } from "../../environmentVar";
import { UserFormPage } from "../pages/user/userFormPage";
import { Homepage } from "../pages/home/homePage";

test.describe("American Express L1 test", () => {
  test("User traverses FR credit card Applications", async ({ page }) => {
    const homePage = new Homepage(page);
    const userForm = new UserFormPage(page);

    await page.goto(`${envVar.MAIN_PAGE_URL}/fr-fr/?inav=NavLogo`); // Navigate to main page

    expect(await page.title()).toEqual("American Express FR : Cartes de Paiement & Services Privilégiés"); 

    await homePage.selectCartesAmericanExpress(); // Click on Credit Cards
    await homePage.handleCookies(); // accept cookies
    await homePage.selectGoldCardAmericanExpress(); // Click on gold card
    await homePage.applyButton(); // apply button

    // filling user details
    await userForm.selectGender("MR"); // Select MR
    await userForm.enterFirstName("Parthiban"); // Enter on First Name
    await userForm.enterLastName("Murugan"); // Enter on Last Name
    await userForm.enterDateOfBirth("27/05/1999"); // Enter on date of birth
    await userForm.enterEmailId("randomaname@gmail.com"); // Enter on email address
    await userForm.enterPhoneNumber("0712345678"); // Enter on date of birth
    await userForm.submitForm(); // Enter on date of birth
    expect(await userForm.isVosInformationsPersonnellesTitleDisplayed()).toEqual(true); // Enter on date of birth
  });
});
