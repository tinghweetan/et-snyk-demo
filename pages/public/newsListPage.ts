import { Key } from 'selenium-webdriver';
import { Browser, Page, findBy, elementIsVisible, pageHasLoaded, WebComponent, Button, TextInput, delay } from '../../common';
import { config } from '../../config';
import { SourceNames } from '../../constants/enums';
import { newsPressRange } from '../../constants/types';
import { NewsDetailPage } from './newsDetail';

export class NewsListPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}/search/news`);
  }

  @findBy('//div[@id="table_content"]/div/div[1]//a')
  public article!: WebComponent;

  @findBy('//div[@id="table_content"]/div/div[1]//p')
  public articleDigest!: WebComponent;

  @findBy('//div[@id="table_content"]/div/div[1]/div/div[1]')
  public articleCreatedAt!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Publication Date"]')
  public publicationData!: WebComponent;

  @findBy('//li[@style="color: rgb(255, 167, 38);"]')
  public startData!: WebComponent;

  @findBy('//li[@style="color: rgb(57, 178, 169);"]')
  public endDate!: WebComponent;

  @findBy('//button[@data-trackable="savesearch-ARTICLE-button"]')
  public savedNewsButton!: Button;

  @findBy('//nav[@aria-label="Alerts for Saved Search"]/li[1]')
  public firstSavedSearchItem!: WebComponent;

  @findBy('//input[@placeholder="Enter name..."]')
  public savedSearchName!: TextInput;

  @findBy('//button[@data-trackable-context-filter_title="Sectors"]')
  public sectors!: Button;

  @findBy('//div[@data-trackable-context-sector="Oil & Gas"]//p[text()="Oil & Gas"]')
  public oilGas!: WebComponent;

  @findBy('//p[text()="All Oil & Gas"]')
  public allOilGas!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Oil & Gas"]/div/span')
  public allOilGasCount!: WebComponent;

  @findBy('//*[text()="Oil & Gas Producers"]')
  public oilGasProducers!: WebComponent;

  @findBy('//div[@x-placement="right-start"]')
  public submenu!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Source"]')
  public source!: WebComponent;

  @findBy('//p[text()="Articles"]')
  public newsSource!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Articles"]//p[text()="Nikkei Asia (Japan)"]')
  public nikkeiAsia!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Articles"]//p[text()="Financial Times (UK)"]')
  public financialTimes!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Articles"]//p[text()="South China Morning Post (Hong Kong)"]')
  public southChinaMorningPost!: WebComponent;

  @findBy('//p[text()="All Articles"]')
  public allNews!: WebComponent;

  @findBy('//p[text()="ANTARA News (Indonesia)"]')
  public antataNews!: WebComponent;

  @findBy('//p[text()="BERNAMA News (Malaysia)"]')
  public bernamaNews!: WebComponent;

  @findBy('//span[text()="38"]')
  public newsSelected38!: WebComponent;

  @findBy('//input[@checked and @type="checkbox"]')
  public inputChecked!: WebComponent;

  @findBy('//p[text()="3 selected"]')
  public selectedSectorsOilGas!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Companies"]')
  public companiesButton!: Button;

  @findBy('//button/span[text()="Find Companies"]')
  public findCompanies!: WebComponent;

  @findBy('//button/span[text()="No Companies Selected"]')
  public noCompaniesSelected!: WebComponent;

  @findBy('//input[@placeholder="Search Companies"]')
  public searchCompanies!: TextInput;

  @findBy('//span[text()="RELIANCE INDUSTRIES LTD"]')
  public relianceIndustriesLTD!: WebComponent;

  @findBy('//li[contains(@class, "Cal__Day__today")]')
  public today!: WebComponent;

  @findBy('//*[contains(text(), "articles found") or contains(text(), "No news found.")]')
  public articlesFoundCount!: WebComponent;

  @findBy('//p[text()="Exchange Filings"]')
  public exchangeFilings!: WebComponent;

  @findBy('//p[text()="Opinion & Analysis"]')
  public opinionAnalysis!: WebComponent;

  @findBy('//p[text()="Press Releases"]')
  public pressReleases!: WebComponent;

  @findBy('//p[text()="Reports"]')
  public reports!: WebComponent;

  @findBy('//p[text()="Transcripts"]')
  public transcripts!: WebComponent;

  @findBy('//p[text()="Web Content"]')
  public webContent!: WebComponent;

  @findBy('//p[text()="All Exchange Filings"]')
  public allExchangeFilings!: WebComponent;

  @findBy('//p[text()="All Web Content"]')
  public allWebContent!: WebComponent;

  @findBy('//p[text()="Health Care"]')
  public healthCare!: WebComponent;

  @findBy('//p[text()="All Health Care"]')
  public allHealthCare!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Scout AI"]')
  public scoutAI!: Button;

  @findBy('//*[text()="COVID-19 General"]')
  public COVID19General!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Countries & regions"]')
  public countriesRegions!: WebComponent;

  @findBy('//div[@data-trackable-context-country="CHN"]')
  public china!: WebComponent;

  @findBy('//div[@data-trackable="find-business-lines-tab"]')
  public companyItem!: WebComponent;

  @findBy('//input[@placeholder="Search News"]')
  public searchNews!: TextInput;

  @findBy('//*[contains(text(), "Nikkei Asia") or contains(text(), "Nikkei") ]')
  public nikkeiAsiaLable!: WebComponent;

  @findBy('//div[@id="table_content"]/div//*[@viewBox="0 0 17 9"]')
  public theLock!: WebComponent;

  @findBy('//button[@data-trackable="remove-filter"]')
  public removeFilter!: Button;

  @findBy('//h6[text()="Please subscribe to read the full article."]')
  public pleaseSubscribe!: WebComponent;

  @findBy('//*[text()="No news found."]')
  public noNewsFound!: WebComponent;

  @findBy('//ul/li[2]/div[@data-trackable="subsector"]')
  public subsector1!: WebComponent;

  @findBy('//ul/li[3]/div[@data-trackable="subsector"]')
  public subsector2!: WebComponent;

  @findBy('//ul/li[4]/div[@data-trackable="subsector"]')
  public subsector3!: WebComponent;

  @findBy('//ul/li[5]/div[@data-trackable="subsector"]')
  public subsector4!: WebComponent;

  @findBy('//ul/li[6]/div[@data-trackable="subsector"]')
  public subsector5!: WebComponent;

  @findBy('//ul/li[7]/div[@data-trackable="subsector"]')
  public subsector6!: WebComponent;

  @findBy('//ul/li[8]/div[@data-trackable="subsector"]')
  public subsector7!: WebComponent;

  @findBy('//ul/li[9]/div[@data-trackable="subsector"]')
  public subsector8!: WebComponent;

  @findBy('//ul/li[10]/div[@data-trackable="subsector"]')
  public subsector9!: WebComponent;

  @findBy('//ul/li[11]/div[@data-trackable="subsector"]')
  public subsector10!: WebComponent;

  @findBy('//ul/li[12]/div[@data-trackable="subsector"]')
  public subsector11!: WebComponent;

  @findBy('//ul/li[13]/div[@data-trackable="subsector"]')
  public subsector12!: WebComponent;

  @findBy('//ul/li[14]/div[@data-trackable="subsector"]')
  public subsector13!: WebComponent;

  @findBy('//ul/li[15]/div[@data-trackable="subsector"]')
  public subsector14!: WebComponent;

  @findBy('//ul/li[16]/div[@data-trackable="subsector"]')
  public subsector15!: WebComponent;

  @findBy('//ul/li[17]/div[@data-trackable="subsector"]')
  public subsector16!: WebComponent;

  @findBy('//ul/li[18]/div[@data-trackable="subsector"]')
  public subsector17!: WebComponent;

  @findBy('//ul/li[19]/div[@data-trackable="subsector"]')
  public subsector18!: WebComponent;

  @findBy('//ul/li[20]/div[@data-trackable="subsector"]')
  public subsector19!: WebComponent;

  @findBy('//ul/li[21]/div[@data-trackable="subsector"]')
  public subsector20!: WebComponent;

  @findBy('//ul/li[22]/div[@data-trackable="subsector"]')
  public subsector21!: WebComponent;

  @findBy('//ul/li[23]/div[@data-trackable="subsector"]')
  public subsector22!: WebComponent;

  @findBy('//ul/li[24]/div[@data-trackable="subsector"]')
  public subsector23!: WebComponent;

  @findBy('//ul/li[25]/div[@data-trackable="subsector"]')
  public subsector24!: WebComponent;

  @findBy('//ul/li[26]/div[@data-trackable="subsector"]')
  public subsector25!: WebComponent;

  @findBy('//ul/li[27]/div[@data-trackable="subsector"]')
  public subsector26!: WebComponent;

  @findBy('//ul/li[28]/div[@data-trackable="subsector"]')
  public subsector27!: WebComponent;

  @findBy('//ul/li[29]/div[@data-trackable="subsector"]')
  public subsector28!: WebComponent;

  @findBy('//ul/li[30]/div[@data-trackable="subsector"]')
  public subsector29!: WebComponent;

  @findBy('//ul/li[31]/div[@data-trackable="subsector"]')
  public subsector30!: WebComponent;

  @findBy('//ul/li[32]/div[@data-trackable="subsector"]')
  public subsector31!: WebComponent;

  @findBy('//ul/li[33]/div[@data-trackable="subsector"]')
  public subsector32!: WebComponent;

  @findBy('//ul/li[34]/div[@data-trackable="subsector"]')
  public subsector33!: WebComponent;

  @findBy('//ul/li[35]/div[@data-trackable="subsector"]')
  public subsector34!: WebComponent;

  @findBy('//ul/li[36]/div[@data-trackable="subsector"]')
  public subsector35!: WebComponent;

  @findBy('//ul/li[37]/div[@data-trackable="subsector"]')
  public subsector36!: WebComponent;

  @findBy('//ul/li[38]/div[@data-trackable="subsector"]')
  public subsector37!: WebComponent;

  @findBy('//ul/li[39]/div[@data-trackable="subsector"]')
  public subsector38!: WebComponent;

  @findBy('//ul/li[40]/div[@data-trackable="subsector"]')
  public subsector39!: WebComponent;

  @findBy('//ul/li[41]/div[@data-trackable="subsector"]')
  public subsector40!: WebComponent;

  @findBy('//ul/li[42]/div[@data-trackable="subsector"]')
  public subsector41!: WebComponent;

  @findBy('//ul/li[43]/div[@data-trackable="subsector"]')
  public subsector42!: WebComponent;

  @findBy('//ul/li[44]/div[@data-trackable="subsector"]')
  public subsector43!: WebComponent;

  @findBy('//ul/li[45]/div[@data-trackable="subsector"]')
  public subsector44!: WebComponent;

  @findBy('//ul/li[46]/div[@data-trackable="subsector"]')
  public subsector45!: WebComponent;

  @findBy('//ul/li[47]/div[@data-trackable="subsector"]')
  public subsector46!: WebComponent;

  @findBy('//ul/li[48]/div[@data-trackable="subsector"]')
  public subsector47!: WebComponent;

  @findBy('//ul/li[49]/div[@data-trackable="subsector"]')
  public subsector48!: WebComponent;

  @findBy('//ul/li[50]/div[@data-trackable="subsector"]')
  public subsector49!: WebComponent;

  @findBy('//ul/li[51]/div[@data-trackable="subsector"]')
  public subsector50!: WebComponent;

  public loadCondition() {
    return elementIsVisible(() => this.article);
  }

  public async searchNewsByPublicationDate() {
    await this.publicationData.click();
    await delay(2000);
    await this.today.click();
    await this.today.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    return this.articlesFoundCount.getText();
  }

  public async searchNewsPublishedYesterday() {
    await this.publicationData.click();
    const day1 = new Date();
    day1.setTime(day1.getTime()-24*60*60*1000);
    const yesterdayStr = day1.getFullYear()+"-" + (day1.getMonth()+1).toString().padStart(2,"0") + "-" + day1.getDate().toString().padStart(2,'0');
    const yesterdayItem = await this.browser.findElement(`//li[@data-date="${yesterdayStr}"]`)
    await this.today.click();
    await yesterdayItem.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    return this.articlesFoundCount.getText();
  }

  public async searchNewsBySource(sourceName?: SourceNames) {
    await this.source.click();
    switch(sourceName) {
      case SourceNames.news:
        await this.newsSource.click();
        break;
      case SourceNames.exchangeFilings:
        await this.exchangeFilings.click();
        break;
      case SourceNames.opinionAnalysis:
        await this.opinionAnalysis.click();
        break;
      case SourceNames.pressReleases:
        await this.pressReleases.click();
        break;
      case SourceNames.reports:
        await this.reports.click();
        break;
      case SourceNames.transcripts:
        await this.transcripts.click();
        break;
      case SourceNames.webContent:
        await this.webContent.click();
        break;
      default:
        await this.exchangeFilings.click();
        await this.allExchangeFilings.click();
        break;
    }
    await this.browser.waitAny([elementIsVisible(() => this.article), elementIsVisible(() => this.noNewsFound)]);
    return this.articlesFoundCount.getText();
  }

  public async clickSubsector(num: newsPressRange) {
    let subsector: ()=>WebComponent;
    switch(num) {
      case 1:
        subsector = ()=>this.subsector1;
        break;
      case 2:
        subsector = ()=>this.subsector2;
        break;
      case 3:
        subsector = ()=>this.subsector3;
        break;
      case 4:
        subsector = ()=>this.subsector4;
        break;
      case 5:
        subsector = ()=>this.subsector5;
        break;
      case 6:
        subsector = ()=>this.subsector6;
        break;
      case 7:
        subsector = ()=>this.subsector7;
        break;
      case 8:
        subsector = ()=>this.subsector8;
        break;
      case 9:
        subsector = ()=>this.subsector9;
        break;
      case 10:
        subsector = ()=>this.subsector10;
        break;
      case 11:
        subsector = ()=>this.subsector11;
        break;
      case 12:
        subsector = ()=>this.subsector12;
        break;
      case 13:
        subsector = ()=>this.subsector13;
        break;
      case 14:
        subsector = ()=>this.subsector14;
        break;
      case 15:
        subsector = ()=>this.subsector15;
        break;
      case 16:
        subsector = ()=>this.subsector16;
        break;
      case 17:
        subsector = ()=>this.subsector17;
        break;
      case 18:
        subsector = ()=>this.subsector18;
        break;
      case 19:
        subsector = ()=>this.subsector19;
        break;
      case 20:
        subsector = ()=>this.subsector20;
        break;
      case 21:
        subsector = ()=>this.subsector21;
        break;
      case 22:
        subsector = ()=>this.subsector22;
        break;
      case 23:
        subsector = ()=>this.subsector23;
        break;
      case 24:
        subsector = ()=>this.subsector24;
        break;
      case 25:
        subsector = ()=>this.subsector25;
        break;
      case 26:
        subsector = ()=>this.subsector26;
        break;
      case 27:
        subsector = ()=>this.subsector27;
        break;
      case 28:
        subsector = ()=>this.subsector28;
        break;
      case 29:
        subsector = ()=>this.subsector29;
        break;
      case 30:
        subsector = ()=>this.subsector30;
        break;
      case 31:
        subsector = ()=>this.subsector31;
        break;
      case 32:
        subsector = ()=>this.subsector32;
        break;
      case 33:
        subsector = ()=>this.subsector33;
        break;
      case 34:
        subsector = ()=>this.subsector34;
        break;
      case 35:
        subsector = ()=>this.subsector35;
        break;
      case 36:
        subsector = ()=>this.subsector36;
        break;
      case 37:
        subsector = ()=>this.subsector37;
        break;
      case 38:
        subsector = ()=>this.subsector38;
        break;
      case 39:
        subsector = ()=>this.subsector39;
        break;
      case 40:
        subsector = ()=>this.subsector40;
        break;
      case 41:
        subsector = ()=>this.subsector41;
        break;
      case 42:
        subsector = ()=>this.subsector42;
        break;
      case 43:
        subsector = ()=>this.subsector43;
        break;
      case 44:
        subsector = ()=>this.subsector44;
        break;
      case 45:
        subsector = ()=>this.subsector45;
        break;
      case 46:
        subsector = ()=>this.subsector46;
        break;
      case 47:
        subsector = ()=>this.subsector43;
        break;
      case 48:
        subsector = ()=>this.subsector44;
        break;
      case 49:
        subsector = ()=>this.subsector49;
        break;
      case 50:
        subsector = ()=>this.subsector50;
    }
    await subsector().click();
    await this.browser.waitAny([elementIsVisible(() => this.article), elementIsVisible(() => this.noNewsFound)]);
    return this.articlesFoundCount.getText();
  }

  public async searchNewsBySectors() {
    await this.sectors.click();
    await this.oilGas.click();
    await this.allOilGas.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    await this.healthCare.click();
    await this.allHealthCare.click();
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsByScoutAi() {
    await this.scoutAI.click();
    await this.COVID19General.click();
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsByCountriesRegions() {
    await this.countriesRegions.click();
    await this.china.click();
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsByCompanies() {
    await this.companiesButton.click();
    await this.searchCompanies.setValue(Key.CONTROL + 'a');
    await this.searchCompanies.setValue('GOOGLE CLOUD INDIA PRIVATE LIMITED');
    await this.searchCompanies.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.companyItem));
    await this.companyItem.click();
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsByKeyword(value: string) {
    await this.searchNews.setValue(value);
    await this.searchNews.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsBySourceNikkei() {
    await this.removeFilter.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    await this.source.click();
    await this.newsSource.click();
    await this.nikkeiAsia.click();
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsBySourceFinancialTimes() {
    await this.removeFilter.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    await this.source.click();
    await this.newsSource.click();
    await this.financialTimes.click();
    await this.browser.wait(elementIsVisible(() => this.article));
  }

  public async searchNewsBySourceSouthChinaMorningPost() {
    await this.removeFilter.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    await this.source.click();
    await this.newsSource.click();
    await this.southChinaMorningPost.click();
    await this.browser.wait(elementIsVisible(() => this.article));
    
  }

  public async goToNewsDetail() {
    await this.article.click();
    await this.browser.wait(pageHasLoaded(NewsDetailPage));
  }

  public async goToFinancialTimesPage() {
    await this.article.click();
  }

  public async clickRemoveFilter() {
    let maxNum = 9;
    while(maxNum--) {
      if(!await this.removeFilter.isDisplayed()) return;
      await this.removeFilter.click();
    }
  }

}
