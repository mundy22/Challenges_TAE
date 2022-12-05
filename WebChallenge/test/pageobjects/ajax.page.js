const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AjaxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTrigger () {
        return $('#ajaxButton');
    }

    get contentDiv () {
        return $('#content');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async ajaxFuncionality () {
        await this.btnTrigger.click();
        await this.btnTrigger.click();
        await this.contentDiv.waitUntil(
            async function () {
            return (this)
            },
            { timeout:80000, timeoutMsg:'NOT APPEAR CONTENT DIV'} 
        ) 

        await expect($$('#content')).toBeElementsArrayOfSize(1);
        await expect($$('#content').toHaveLength(expected = 1));
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('ajax');
    }
}

module.exports = new AjaxPage();
