const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const fs = require('fs');

let credentials1 = JSON.parse(fs.readFileSync('test/testData/td1.json'));
let credentials2 = JSON.parse(fs.readFileSync('test/testData/td2.json'));
describe('My Login application @login', () => {

    credentials1.forEach( ({username, password}) => {
        it(`should login with user: ${username} and pw: ${password} @smoke @id01`, async function () {
            //this.retries(1);
            await LoginPage.open();

            await LoginPage.login(username, password);
            await expect(SecurePage.flashAlert).toBeExisting();
            await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        });
    });

    credentials2.forEach( ({creds}) => {
        it('should login with valid credentials @smoke @id02', async function () {
            await LoginPage.open();

            await LoginPage.login(creds[0], creds[1]);
            await expect(SecurePage.flashAlert).toBeExisting();
            await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        });
    });
});


