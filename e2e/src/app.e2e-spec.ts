import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Cigna Challenge App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a page title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Cigna Coding Challenge');
  });

  it(`should display a subtitle for the doctor's list`, () => {
    page.navigateTo();
    expect(page.getListTitleText()).toEqual(`Doctor's Hall of Fame`);
  });

  it(`should display a table of famous doctors`, () => {
    page.navigateTo();
    expect(page.getDoctorsList()).toBeTruthy();
  });

  it(`should have a name header cell in the table`, () => {
    page.navigateTo();
    expect(page.getNameHeader()).toEqual('Name');
  });

  it(`should have a specialty header cell in the table`, () => {
    page.navigateTo();
    expect(page.getSpecialtyHeader()).toEqual('Specialty');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
