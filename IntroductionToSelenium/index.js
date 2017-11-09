const selenium = require('selenium-webdriver');
const By = selenium.By;
const URL = 'file:///Users/me2/Code/treehouse-tutorials/IntroductionToSelenium/index.html';

const driver = new selenium.Builder()
    .forBrowser('chrome')
    .build();

driver.get(URL);

// Good place for an object literal!
const locators = {
    inviteeForm: By.id('registrar'),
    inviteeNameField: By.css('#registrar > input[type = "text"]'),
    toggleNonresponderVisibility: By.css('.main > div input')
};

function addInvitee(name) {
    driver.findElement(locators.inviteeNameField)
        .sendKeys(name);
    driver.findElement(locators.inviteeForm).submit();
};

function toggleNonresponderVisibility() {
    driver.findElement(locators.toggleNonresponderVisibility)
        .click();
};

addInvitee('Sloane Cuyjet-Brown');
addInvitee('Harriet Brown-Cuyjet');
toggleNonresponderVisibility();