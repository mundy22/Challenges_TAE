const shadowdom = require('../pageobjects/shadowdom.page');

describe('should valida the shadowdom page', () => {

    
        it(`should thecopy button copi the test: @smoke @id01`, async function () {
            //this.retries(1);
            await shadowdom.open();
            await shadowdom.shadowFuncionality();
            //await expect(shadowdom.shadowFuncionality).to();


        });

});


