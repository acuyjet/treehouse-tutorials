const By = require('selenium-webdriver').By;

class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            inviteeForm: By.id('registrar'),
            inviteeNameField: By.css('#registrar > input[type = "text"]'),
            toggleNonresponderVisibility: By.css('.main > div input'),
            inviteeByName: name => By.xpath(`//span[text()='${name}']/..`)
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

    findInviteeByName(name) {
        const el = this.driver.findElement(this.locators.inviteeByName(name))
        return new Invitee(el);
    };
}

// This is effectively a private class, since we're not exporting the module
class Invitee {
    constructor(element) {
        this.element = element;
        this.locators = {
            removeButton: By.css('button:last-child'),
            confirmedCheckbox: By.css('input[type="checkbox"]'),
            editButton: By.css('button:first-of-type'),
            editNameField: By.css('input[type="text"]')
        };
    }
    remove() {
        this.element
            .findElement(this.locators.removeButton).click();
    };

    toggleConfirmation() {
        this.element
            .findElement(this.locators.confirmedCheckbox).click();
    };

    edit(name) {
        const button = this.element
            .findElement(this.locators.editButton);
        button.click();
        const textField = this.element
            .findElement(this.locators.editNameField);
        textField.clear();
        textField.sendKeys(name);
        button.click();
    }
};

module.exports = HomePage;