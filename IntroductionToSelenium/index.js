const fs = require('fs');
const selenium = require('selenium-webdriver');
const By = selenium.By;

const HomePage = require('./pages/home');

const driver = new selenium.Builder()
    .forBrowser('chrome')
    .build();

const homePage = new HomePage(driver);
homePage.open();

const invitees = [
    'Gonzalo Torres del Fierro',
    'Shadd Anderson',
    'George Aparece',
    'Shadab Khan',
    'Joseph Michael Casey',
    'Jennifer Nordell',
    'Faisal Albinali',
    'Taron Foxworth',
    'David Riesz',
    'Maicej Torbus',
    'Martin Luckett',
    'Joel Bardsley',
    'Reuben Varzea',
    'Ken Alger',
    'Amrit Pandey',
    'Rafal Rudzinski',
    'Brian Lynch',
    'Lupe Camacho',
    'Luke Fiji',
    'Sean Christensen',
    'Philip Graf',
    'Mike Norman',
    'Michael Hulet',
    'Brent Suggs'
];

invitees.forEach(homePage.addInvitee, homePage);

homePage.findInviteeByName('David Riesz').remove();

homePage.findInviteeByName('Jennifer Nordell').toggleConfirmation();

homePage
    .findInviteeByName('Mike Norman')
    .edit('Edited Name!');

//homePage.toggleNonresponderVisibility();

driver.takeScreenshot().then((image, err) => {
    fs.writeFile('weird-layout.png', image, 'base64',
        err => console.log(err));
});