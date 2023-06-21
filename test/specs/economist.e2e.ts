import EconomistPage from '../pageobjects/economist.page.js'
import SecurePage from '../pageobjects/secure.page.js';

describe('The economist', () => {
    it('Click on hamburguer menu and select Market and world indices', async () => {
        await EconomistPage.open('https://www.eleconomista.es/');
        (await EconomistPage.acceptCookies).click();
        (await EconomistPage.menuHamburguer).click();
        await browser.pause(5000);
        (await EconomistPage.market).click();
        await browser.pause(5000);
        (await EconomistPage.worldIndices).click();
        await browser.pause(5000);
    });

      it('Select world indices', async () => {
        await browser.pause(5000);
        await EconomistPage.indiceEuropeIvex35.waitForExist();
        await EconomistPage.indiceEuropeBe20.waitForExist();
        await EconomistPage.indiceEuropeUk100.waitForExist();
        const priceValueIvex35 = await EconomistPage.indiceEuropeIvex35.getText();
        const priceValueBe20 = await EconomistPage.indiceEuropeBe20.getText();
        const priceValueUk100 = await EconomistPage.indiceEuropeUk100.getText();
        const resultFinal = [parseInt(priceValueIvex35), parseInt(priceValueBe20), parseInt(priceValueUk100)];
        resultFinal.sort((a, b) => a - b);
        console.log('De menor a mayor:', await resultFinal);
    });
});


