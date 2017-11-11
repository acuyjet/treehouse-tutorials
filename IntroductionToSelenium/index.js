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

homePage.removeInvitee('Shadd Anderson');

homePage.toggleNonresponderVisibility();