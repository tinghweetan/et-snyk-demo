import { Button, Browser, Page, findBy, elementIsVisible, pageHasLoaded, WebComponent, delay } from '../../common';
import { config } from '../../config';
import { CompanyListPage } from './companyList';
import { NewsDetailPage } from './newsDetail';
import { NewsListPage } from './newsListPage';

export class CompanyDetailPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}`);
  }

  @findBy('//table[@aria-label="financial-table"]')
  public financialTable!: WebComponent;

  @findBy('//*[@id="react-app"]/div/div[3]/div/div/div/div[2]/div[3]/div[1]/div/button[2]')
  public CNY!: Button;

  @findBy('//button[@id="hs-company-financial-data-tab-0"]')
  public overviewButton!: Button;
  
  @findBy('//div[@id="table_content"]//table/tbody/tr[1]/th/div[2]/a')
  public firstCompaniesItem!: WebComponent;

  @findBy('//a[@href="https://fwpresearch.com/lp/"]')
  public FWPResearch!: WebComponent;

  @findBy('//a[@data-trackable="article"]')
  public article!: WebComponent;

  @findBy('//h3')
  public h3!: WebComponent;

  @findBy('//h3[text()="Contact Information"]')
  public contactInformation!: WebComponent;

  @findBy('//span[text()="address"]')
  public contactAddress!: WebComponent;

  @findBy('//h5[text()="Description"]')
  public description!: WebComponent;

  @findBy('//div[@id="hs-company-news-tab-0"]//a[@data-trackable="article"]')
  public companyNews!: WebComponent;

  @findBy('//button/span[text()="Back to results"]')
  public backToResultsButton!: Button;

  @findBy('//button/span[text()="KRW"]')
  public krw!: Button;

  @findBy('//button/span[text()="JPY"]')
  public jpy!: Button;

  @findBy('//button/span[text()="USD"]')
  public usd!: Button;

  @findBy('//h5[contains(text(), "¥")]')
  public jpyUnit!: WebComponent;

  @findBy('//button/span[text()="INR"]')
  public inr!: Button;

  @findBy('//h5[contains(text(), "₹")]')
  public inrUnit!: WebComponent;

  @findBy('//button[@id="hs-news-mention-tab-0"]')
  public day5!: Button;
  
  @findBy('//button[@id="hs-news-mention-tab-1"]')
  public month1!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-0"]')
  public marketData5D!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-1"]')
  public marketData1M!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-2"]')
  public marketData6M!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-3"]')
  public marketDataYTD!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-4"]')
  public marketData1Y!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-5"]')
  public marketData5Y!: Button;

  @findBy('//button[@id="hs-company-market-data-tab-6"]')
  public marketDataMAX!: Button;
  
  @findBy('//button[@id="hs-news-mention-tab-3"]')
  public year1!: Button;

  @findBy('//span[text()="News Mentions"]')
  public newsMentions!: WebComponent;

  @findBy('//button/span[text()="View All"]')
  public viewAll!: Button;

  @findBy('//button[@data-trackable="connections-page"]')
  public connections!: Button;

  @findBy('//div[text()="Operational structure"]')
  public operationalStructure!: WebComponent;

  @findBy('//*[text()="SHOWA CORP." or text()="Showa Corp."]')
  public showaCOPR!: WebComponent;

  @findBy('//p[.="Market cap"]/following-sibling::div/h5')
  public marketCap!: WebComponent;

  public loadCondition() {
    return elementIsVisible(() => this.h3);
  }

  public async awaitNews() {
    await this.browser.wait(elementIsVisible(() => this.companyNews));
    await this.browser.wait(elementIsVisible(() => this.financialTable));
  }

  public async backToResult() {
    await this.backToResultsButton.click();
    await this.browser.wait(pageHasLoaded(CompanyListPage));
  }

  public async switchCurrencyByJPY() {
    await this.browser.wait(elementIsVisible(() => this.financialTable));
    await this.jpy.click();
    await this.browser.wait(elementIsVisible(() => this.jpyUnit));
  }

  public async switchCurrencyByINR() {
    await this.browser.wait(elementIsVisible(() => this.financialTable));
    await this.inr.click();
    await this.browser.wait(elementIsVisible(() => this.inrUnit));
  }

  public async switchNewsChartDate() {
    await this.day5.click();
    await this.browser.wait(elementIsVisible(() => this.newsMentions));
    await this.month1.click();
    await this.browser.wait(elementIsVisible(() => this.newsMentions));
    await this.year1.click();
    await this.browser.wait(elementIsVisible(() => this.newsMentions));
  }

  public async viewAllNews() {
    await this.browser.wait(elementIsVisible(() => this.viewAll));
    await this.viewAll.click();
    await this.browser.wait(pageHasLoaded(NewsListPage));
  }

  public async goToNewsDetail() {
    await this.browser.wait(elementIsVisible(() => this.companyNews));
    await this.companyNews.click();
    await this.browser.wait(pageHasLoaded(NewsDetailPage));
  }
  
  public async goToConnections() {
    await this.connections.click();
    await this.browser.wait(elementIsVisible(() => this.operationalStructure));
  }

}
