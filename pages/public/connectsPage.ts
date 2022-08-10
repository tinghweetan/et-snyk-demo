import { Browser, Page, findBy, elementIsVisible, WebComponent, Button } from '../../common';
import { config } from '../../config';

export class ConnectsPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(config.connectsUrl);
  }

  @findBy('//a[@title="Terms of Use"]')
  public termsOfUse!: WebComponent;
  
  @findBy('//button[@data-trackable-object-name="connectionsplus"]')
  public connectionsplus!: Button;

  @findBy('//input[@id="compactCheckbox-termOfUse"]')
  public accept!: Button;

  @findBy('//button[@data-trackable="connectsplus_try_features_btn"]')
  public tryFeatures!: Button;

  public loadCondition() {
    return elementIsVisible(() => this.termsOfUse);
  }

  public async tryFeatureNow() {
    await this.connectionsplus.click();
    await this.accept.click();
    await this.tryFeatures.click();
    const originalWindow = await this.browser.getWindowHandle();
    const windows = await this.browser.getAllWindowHandles();
    windows.forEach(async handle => {
      if (handle !== originalWindow) {
        await this.browser.close();
        await this.browser.window(handle);
      }
    });
    await this.browser.wait(elementIsVisible(() => this.termsOfUse));
  }
}
