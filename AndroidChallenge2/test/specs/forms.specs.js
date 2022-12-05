const HomeScreen = require("../Pages/Home.screen")
const FormsScreen = require("../Pages/Forms.screen")

describe("Validate the different elements on the form tab", () => {

  it("Should validate the default selection of the tab", async () => {
    await HomeScreen.homeValidate();
    await expect(HomeScreen.formOption).toBePresent(); 
  });

it("Should validate the input behavior is working as intended", async () => {
    await $('~text-input').setValue("TEST ANDOIRD CHALLENGE");
    await expect (FormsScreen.inputFieldResult).toHaveText("TEST ANDOIRD CHALLENGE")
  });

  it("Should validate that picker element is working and it has 3 options tab form", async () => {
    await FormsScreen.form("TEST PICKER");
    await expect (FormsScreen.dropdownListItem1),
    (FormsScreen.dropdownListItem2),
    (FormsScreen.dropdownListItem3).toBePresent();

  });

  it("Should validate that android native alerts are functional", async () => {
    //await FormsScreen.form("TEST ALERT");
    await $('~button-Active').click();
    await expect (FormsScreen.messageLabel).toHaveText("This button is active");
  });

});

