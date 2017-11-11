const By = require('selenium-webdriver').By;

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id('registrar'),
            inviteeNameField: By.css('#registrar > input[type = "text"]'),
            toggleNonresponderVisibility: By.css('.main > div input'),
            removeButtonForInvitee: invitee => By.xpath(`//span[text()='${invitee}']/../button[last()]`)
        };
    }

    open() {
        const URL = 'file:///Users/me2/Code/treehouse-tutorials/IntroductionToSelenium/index.html';
        this.driver.get(URL);
    }

    addInvitee(name) {
        this.driver.findElement(this.locators.inviteeNameField)
            .sendKeys(name);
        this.driver.findElement(this.locators.inviteeForm).submit();
    };

    toggleNonresponderVisibility() {
        this.driver.findElement(this.locators.toggleNonresponderVisibility)
            .click();
    };

    removeInvitee(invitee) {
        this.driver.findElement(this.locators.removeButtonForInvitee(invitee))
            .click();
    };
}

module.exports = HomePage;