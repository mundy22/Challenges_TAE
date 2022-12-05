const ProgressBar = require('../pageobjects/progressBar.page');

describe('ProgressBar funcionality', () => {

    
        it(`should start progressbar and end at 75%: @smoke @id01`, async function () {
            this.retries(2);
            await ProgressBar.open();
            await ProgressBar.bar();


        });
});


