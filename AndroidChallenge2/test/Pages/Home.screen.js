class HomeScreen {
    get formOption() {       
        return $('~Forms');
    }

    get homeView () {
        return $('~Home-screen');
    }

    async homeValidate() {
      await this.homeView.waitForDisplayed(); 
      await this.formOption.click();  
      
    }
  }
  
  module.exports = new HomeScreen();
  