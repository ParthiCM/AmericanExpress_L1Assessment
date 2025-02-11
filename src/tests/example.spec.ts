import { test, expect } from '@playwright/test';
import { envVar } from '../../environmentVar';
import { UserFormPage } from '../pages/user/userFormPage';



test.describe('American Express L1 test', () => {
  test('User traverses FR credit card Applications', async ({ page }) => {
    const userForm = new UserFormPage(page);

    await page.goto(`${envVar.MAIN_PAGE_URL}/fr-fr/?inav=NavLogo`);  // Navigate to main page 
    //await page.waitForLoadState('domcontentloaded');  // Wait for page to load

    // validate page title 

    await page.click('text=Cartes American Express®');  // Click on Credit Cards
    
    // validate page title 

    // accept cookies
    //[id="user-consent-management-granular-banner-accept-all-button"]

    await page.click('[alt="En savoir plus"][href*="https://www.americanexpress.com/fr/carte-de-paiement/gold-card-americanexpress"]');  // Click on gold card

    // validate page title 

    await page.click('//*[contains(@class,"stickySideRail-modules")] //*[text()="Demandez votre Carte"]');  // Click on Apply Now

    // validate page title 


    // filling user details
    await userForm.selectGender("MR");  // Select MR
    await userForm.enterFirstName("Parthiban");  // Enter on First Name
    await userForm.enterLastName("Murugan");  // Enter on Last Name
    await userForm.enterDateOfBirth("27/05/1999");  // Enter on date of birth
    await userForm.enterEmailId("randomaname@gmail.com");  // Enter on email address
    await userForm.enterPhoneNumber("0712345678");  // Enter on date of birth
    await userForm.submitForm();  // Enter on date of birth
  });
  
});


