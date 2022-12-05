const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnGenerate () {
        return $('#buttonGenerate');
    }

    get editForm () {
        return $('#editField');
    }

    get btnCopy () {
        return $('#buttonCopy');
    }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async shadowFuncionality () {
        await (await this.btnGenerate).isExisting();
        await this.editForm.getText();
        await this.btnCopy.click() 
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('shadowdom');
    }
}

module.exports = new ShadowPage();
