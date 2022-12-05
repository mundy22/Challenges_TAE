const ajax = require('../pageobjects/ajax.page');

describe('Ajax funcionality', () => {

    
        it(`should be able to wait for an element to show up: @smoke @id01`, async function () {
            //this.retries(1);
            await ajax.open();
            await ajax.ajaxFuncionality();
            await expect(ajax.contentDiv).toBeDisplayed();
        });
});


