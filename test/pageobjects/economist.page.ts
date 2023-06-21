import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

class EconomistPage extends Page {
    public get menuHamburguer () {
        return $('#main-header > div > div > div.col-2.col-xl-4.px-0.headerLeftSide > div > button');
    }

    public get acceptCookies() {
        return $('[id="didomi-notice-agree-button"]');
    }

    public get market () {
        return $('#dropdownSideBar > div:nth-child(1) > a');
    }

    public get worldIndices() {
        return $('#MercadosyCotizaciones > li:nth-child(10) > a');
    }

    public get indiceEuropeIvex35() {
        return $('//td[contains(.,"IBEX 35")]/following-sibling::td[1]/descendant::span');
    }

    public get indiceEuropeBe20() {
        return $('//td[contains(.,"BE 20")]/following-sibling::td[1]/descendant::span');
    }

    public get indiceEuropeUk100() {
        return $('//td[contains(.,"UK")]/following-sibling::td[1]/descendant::span');
    }

}

export default new EconomistPage();
