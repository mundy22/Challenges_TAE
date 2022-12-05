const LoginPage = require('./LoginPage.js');

class HomePage extends Page{

    get homeView (){return $('~Home-screen');}
    get logInOption (){return $('~Login');}
    get swipeOption (){return $('~Swipe');}

    constructor(){
        super();
        this.waitForIsShown(this.homeView);        
    }
}

module.exports = HomePage;