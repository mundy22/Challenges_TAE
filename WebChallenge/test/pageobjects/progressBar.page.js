const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgressBar extends Page {
    /**
     * define selectors using getter methods
     */
    get btnStart () {
        return $('#startButton');
    }

    get barNumber () {
        return $('#progressBar');
    }

    get btnStop () {
        return $('#stopButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async bar () {
        await this.btnStart.click();
        await this.barNumber.waitUntil(
            async function () {
            return (await this.getText()==='75%')
            },
            { timeout:40000, timeoutMsg:'It reach 100% TEST FAIL!!!!'} 
        ) 
          await this.btnStop.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBar();
