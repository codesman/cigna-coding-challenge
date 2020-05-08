import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root header h1')).getText() as Promise<string>;
  }

  getListTitleText(): Promise<string> {
    return element(by.css('app-doctors h2')).getText() as Promise<string>;
  }

  getDoctorsList(): Promise<string> {
    return element(by.css('app-doctors table')).getText() as Promise<string>;
  }

  getNameHeader(): Promise<string> {
    return element(by.css('app-doctors table thead th:nth-child(1)')).getText() as Promise<string>;
  }

  getSpecialtyHeader(): Promise<string> {
    return element(by.css('app-doctors table thead th:nth-child(2)')).getText() as Promise<string>;
  }
}
