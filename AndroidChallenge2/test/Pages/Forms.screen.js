class FormsScreen {
    get inputField() {
        return $('~text-input');
    }

    get inputFieldResult() {
        return $('~input-text-result');
    }

    get inputSwitch() {
        return $('~switch');
    }

    get inputSwitchText() {
        return $('~switch-text');
    }

    get dropdownControl() {
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.view.ViewGroup');
    }
    
    get dropdownList() {
        const element = (
            "new UiScrollable(new UiSelector().scrollable(true))" +
            ".scrollIntoView(new UiSelector().resourceIdMatches(\"com.wdiodemoapp:id/select_dialog_listview\"))");
            return $(`android=${element}`);
    }

    get dropdownListItem1() {
        const element = (
            "new UiScrollable(new UiSelector().scrollable(true))" +
            ".scrollIntoView(new UiSelector().resourceIdMatches(\"android:id/text1\").text(\"webdriver.io is awesome\"))");
            return $(`android=${element}`);
    }

    get dropdownListItem2() {
        const element = (
            "new UiScrollable(new UiSelector().scrollable(true))" +
            ".scrollIntoView(new UiSelector().resourceIdMatches(\"android:id/text1\").text(\"Appium is awesome\"))");
            return $(`android=${element}`);
    }

    get dropdownListItem3() {
        const element = (
            "new UiScrollable(new UiSelector().scrollable(true))" +
            ".scrollIntoView(new UiSelector().resourceIdMatches(\"android:id/text1\").text(\"This app is awesome\"))");
            return $(`android=${element}`);
    }

    get buttonActive() {
        return $('~button-Active');
    }
  
    get buttonInactive() {
        return $('~button-Inactive');
    }

    get messageAlert() {
        const element = (
        "new UiScrollable(new UiSelector().scrollable(true))" +
        ".scrollIntoView(new UiSelector().resourceIdMatches(\"android:id/content\"))");
        return $(`android=${element}`);
    }
  
    get messageLabel() {
        const element = (
        "new UiScrollable(new UiSelector().scrollable(true))" +
        ".scrollIntoView(new UiSelector().resourceIdMatches(\"android:id/message\"))");
        return $(`android=${element}`);
    }

    get messageButtonAsk() {
    const element = (
    "new UiScrollable(new UiSelector().scrollable(true))" +
     ".scrollIntoView(new UiSelector().resourceIdMatches(\"android:id/button3\"))");
        return $(`android=${element}`);
    }

    async form(textfield) {
      await this.inputField.setValue(textfield);
      await this.inputFieldResult;
      await this.inputSwitch.click();
      await this.dropdownControl.click();
      await this.dropdownListItem1.click();
      await this.buttonActive.click();
      await this.messageButtonAsk.click();
    }
  }
  
  module.exports = new FormsScreen();
  