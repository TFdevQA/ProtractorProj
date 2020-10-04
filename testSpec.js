let homePage = require('./pages/homePage');

describe('Protractor Demo App', function () {

  it('add values', function () {
    homePage.get('https://juliemr.github.io/protractor-demo/');
    homePage.enterFirstNumber('2');
    homePage.enterSecondNumber('3');
    homePage.clickGo();
    homePage.verifyResult('5');

  });

  it('sub values', function () {
    homePage.get('https://juliemr.github.io/protractor-demo/');
    homePage.enterFirstNumber('7');
    homePage.enterSecondNumber('3');
    homePage.clickGo();
    homePage.verifyResult('5');

  });
});