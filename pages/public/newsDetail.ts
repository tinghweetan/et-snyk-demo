import { Browser, Page, findBy, elementIsVisible, WebComponent } from '../../common';
import { config } from '../../config';

export class NewsDetailPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}`);
  }

  @findBy('//h1')
  public newsTitle!: WebComponent;

  @findBy('//*[contains(text(), "WALT DISNEY")]')
  public waltDisneyCompany!: WebComponent;

  @findBy('//li[text()="Nikkei Asia"]')
  public nikkeiASIA!: WebComponent;

  @findBy('//li[text()="South China Morning Post"]')
  public southChinaMorningPost!: WebComponent;

  public loadCondition() {
    return elementIsVisible(() => this.newsTitle);
  }

  public async menitons() {
    await this.browser.wait(elementIsVisible(() => this.waltDisneyCompany));
    return this.waltDisneyCompany;
  }

  public async getNikkeiASIA() {
    await this.browser.wait(elementIsVisible(() => this.nikkeiASIA));
    return this.nikkeiASIA;
  }

  public async getSouthChinaMorningPost() {
    await this.browser.wait(elementIsVisible(() => this.southChinaMorningPost));
    return this.southChinaMorningPost;
  }
}
