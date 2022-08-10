import { Key } from 'selenium-webdriver';
import { TextInput, Button, Browser, Page, findBy, elementIsVisible, pageHasLoaded, WebComponent, random, delay } from '../../common';
import { config } from '../../config';
import { CompanyDetailPage } from './companyDetail';
import { NewsListPage } from './newsListPage';

export class CompanyListPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}/search/companies`);
  }
  @findBy('//input[@id="compactCheckbox-enhanced-table-checkbox-0"]')
  public firstCompaniesItem!: WebComponent;

  @findBy('//input[@id="compactCheckbox-enhanced-table-checkbox-1"]')
  public secondCompaniesItem!: WebComponent;

  @findBy('//input[@id="compactCheckbox-enhanced-table-checkbox-2"]')
  public thirdCompaniesItem!: WebComponent;
  
  @findBy('//input[@id="compactCheckbox-enhanced-table-checkbox-3"]')
  public fourthCompaniesItem!: WebComponent;

  @findBy('//div[@id="data_table_container"]/table//tbody/tr[1]/th//a')
  public firstCompanyLink!: WebComponent;

  @findBy('//input[@id="compactCheckbox-select-all"]')
  public checkedAll!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Countries & regions"]')
  public countriesRegionsButton!: Button;

  @findBy('//div[@data-trackable-context-country="MMR"]')
  public myanmar!: WebComponent;

  @findBy('//input[@placeholder="Search Companies"]')
  public searchCompanies!: TextInput;

  @findBy('//button[@aria-label="search"]')
  public search!: Button;

  @findBy('//p[text()="41 selected"]')
  public sectorsSelected!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Business Lines"]')
  public businessLines!: Button;

  @findBy('//div[@id="hs-menu-search-list-tab-0"]//div[@data-trackable="find-business-lines-tab"][1]')
  public firstBusinessLinesItem!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Countries & regions"]')
  public countriesRegions!: Button;

  @findBy('//div[@data-trackable-context-country="CHN"]')
  public china!: WebComponent;

  @findBy('//div[@data-trackable-context-country="MYS"]')
  public malaysia!: WebComponent;

  @findBy('//div[@data-trackable-context-country="KOR"]')
  public southKorea!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Financials"]')
  public financials!: Button;

  @findBy('//div[@x-placement="right-start"]//input[@inputmode="numeric"]')
  public revenue!: TextInput;

  @findBy('//button[@data-trackable-context-filter_title="Ownership"]')
  public ownership!: Button; 

  @findBy('//div[@aria-label="ownership"]//p[text()="Private"]')
  public private!: WebComponent;

  @findBy('//div[@aria-label="ownership"]//p[text()="Listed"]')
  public listed!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="No. Employees"]')
  public noEmployess!: Button;

  @findBy('//p[text()="From"]/following-sibling::div//input')
  public fromNumber!: TextInput;

  @findBy('//p[text()="To"]/following-sibling::div//input')
  public toNumber!: TextInput;

  @findBy('//button[.="Save"]')
  public saveSearch!: Button;

  @findBy('//*[@role="button" and .="Saved Search"]')
  public optionSavedSearch!: Button;

  @findBy('//input[@placeholder="Enter name..."]')
  public saveSearchName!: TextInput;

  @findBy('//nav[@aria-label="Alerts for Saved Search"]/li[1]//a')
  public firstSavedSearchItem!: WebComponent;

  @findBy('//nav[@aria-label="Alerts for Saved Search"]/li[2]//a')
  public secondSavedSearchItem!: WebComponent;

  @findBy('//nav[@aria-label="Alerts for Targets"]/li[1]')
  public firstTargetsItem!: WebComponent;

  @findBy('//button[@data-trackable="create-new-list-button"]')
  public createNewList!: Button;

  @findBy('//input[@placeholder="Target list name"]')
  public targetListName!: TextInput;

  @findBy('//div[@x-placement="right-start"]//p[text()="Basic Materials"]')
  public basicMaterials!: WebComponent;

  @findBy('//div[@x-placement="right-start"]//p[text()="Chemicals"]')
  public chemicals!: WebComponent;

  @findBy('//div[@x-placement="right-start"]//span[text()="Custom Compounding of Purchased Resins"]')
  public customCompoundingOfPurchasedResins!: WebComponent;

  @findBy('//input[@placeholder="Search business lines"]')
  public searchBusinessLines!: TextInput;

  @findBy('//nav[@aria-label="Alerts for Targets"]/li[1]//button[@aria-label="checkbox"]')
  public firstTargetsListCheckBox!: WebComponent;

  @findBy('//button[@data-trackable="add-to-selected-lists-confirm"]')
  public addToSelectedListsConfirm!: WebComponent;

  @findBy('//button[@data-trackable="Saved Searches"]')
  public savedSearches!: Button;

  @findBy('//button[@data-trackable="saved searches-drawer"]')
  public closeSavedSearches!: Button;

  @findBy('//h2[contains(text(), "companies found")]')
  public companiesFound!: WebComponent;

  @findBy(`//p[text()="You haven't created any Target Lists yet."]`)
  public notHaveTargetList!: WebComponent;

  @findBy('//h4[text()="No companies found."]')
  public noCompaniesFound!: WebComponent;

  @findBy('//span[text()="Investment Advice"]')
  public investmentAdvice!: WebComponent;

  @findBy('//button[@data-trackable-context-filter_title="Sectors"]')
  public sectorsButton!: Button;

  @findBy('//div[@data-trackable-context-sector="Oil & Gas"]')
  public oilGasItem!: WebComponent;

  @findBy('//input[@name="0001"]')
  public oilGasItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Basic Materials"]')
  public basicMaterialsItem!: WebComponent;

  @findBy('//input[@name="1000"]')
  public basicMaterialsItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Basic Materials"]/div/span')
  public basicMaterialsItemCount!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Industrials" and @data-trackable="sector-menu"]')
  public industrialsItem!: WebComponent;

  @findBy('//input[@name="2000"]')
  public industrialsItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Industrials" and @data-trackable="sector-menu"]//span')
  public industrialsItemCount!: WebComponent;

  @findBy('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Goods"]')
  public consumerGoodsItem!: WebComponent;

  @findBy('//input[@name="3000"]')
  public consumerGoodsItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Goods"]//span')
  public consumerGoodsItemCount!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Health Care"]')
  public healthCareItem!: WebComponent;

  @findBy('//input[@name="4000"]')
  public healthCareItemCheckAll!: WebComponent;
  
  @findBy('//div[@data-trackable-context-sector="Health Care"]//span')
  public healthCareItemCount!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Social & Government"]')
  public socialGovernmentItem!: WebComponent;

  @findBy('//input[@name="X4900"]')
  public socialGovernmentItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Social & Government"]//span')
  public socialGovernmentItemCount!: WebComponent;

  @findBy('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Services"]')
  public consumerServicesItem!: WebComponent;

  @findBy('//input[@name="5000"]')
  public consumerServicesItemCheckAll!: WebComponent;
    
  @findBy('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Services"]//span')
  public consumerServicesItemCount!: WebComponent;

  @findBy('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Telecommunication"]')
  public telecommunicationItem!: WebComponent;

  @findBy('//input[@name="6000"]')
  public telecommunicationItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Telecommunication"]//span')
  public telecommunicationItemCount!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Utilities"]')
  public utilitiesItem!: WebComponent;
  
  @findBy('//input[@name="7000"]')
  public utilitiesItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Utilities"]//span')
  public utilitiesItemCount!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Financials"]')
  public financialsItem!: WebComponent;
  
  @findBy('//input[@name="8000"]')
  public financialsItemCheckAll!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Financials"]//span')
  public financialsItemCount!: WebComponent;

  @findBy('//div[@data-trackable-context-sector="Technology"]')
  public technologyItem!: WebComponent;

  @findBy('//input[@name="9000"]')
  public technologyItemCheckAll!: WebComponent;
  
  @findBy('//div[@data-trackable-context-sector="Technology"]//span')
  public technologyItemCount!: WebComponent;

  @findBy('//button[@data-trackable="news"]')
  public news!: Button;

  @findBy('//nav[@aria-label="Alerts for Targets"]/li[1]//button[@aria-label="checkbox"]')
  public checkTargetListItem!: WebComponent;

  @findBy('//button[@data-trackable="Targets"]')
  public targetsButton!: Button;

  @findBy('//p[.="Market cap"]/following-sibling::div/h5')
  public marketCap!: WebComponent;

  public loadCondition() {
    return elementIsVisible(() => this.firstCompaniesItem);
  }

  public async selectAllCompanies() {
    await this.checkedAll.click();
  }

  public async searchCompaniesByKeyword(value: string) {
    await this.searchCompanies.setValue(`${Key.CONTROL}a`);
    await this.searchCompanies.setValue(value);
    await this.searchCompanies.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async displayedCompaniesInMyanmar() {
    await this.countriesRegionsButton.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await this.myanmar.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectBusinessLines() {
    await this.businessLines.click();
    await this.browser.wait(elementIsVisible(() => this.investmentAdvice));
    await this.investmentAdvice.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectCountriesRegions() {
    await this.countriesRegions.click();
    await this.china.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await this.malaysia.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await this.southKorea.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectFinancials() {
    await this.sectorsButton.click();
    await delay(4000);
    await this.financials.click();
    await this.browser.wait(elementIsVisible(() => this.revenue));
    const revenues = await this.browser.findElements(this.revenue.selector);
    await revenues[0].sendKeys(Key.CONTROL + 'a');
    await revenues[0].sendKeys('20000');
    await revenues[0].sendKeys(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await revenues[1].sendKeys(Key.CONTROL + 'a');
    await revenues[1].sendKeys('20000000');
    await revenues[1].sendKeys(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectOwnership() {
    await this.ownership.click();
    await this.listed.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await this.private.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async openCompanySectors() {
    await this.sectorsButton.click();
    await this.browser.wait(elementIsVisible(() => this.oilGasItem));
  }

  public async selectAllOilGasOnSectors() {
    await this.oilGasItem.click();
    await this.oilGasItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllBasicMaterialsOnSectors() {
    await this.basicMaterialsItem.click();
    await this.basicMaterialsItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllIndustrialsOnSectors() {
    await this.industrialsItem.click();
    await this.industrialsItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllConsumerGoodsOnSectors() {
    await this.consumerGoodsItem.click();
    await this.consumerGoodsItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllHealthCareOnSectors() {
    await this.healthCareItem.click();
    await this.healthCareItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllSocialGovernmentOnSectors() {
    await this.socialGovernmentItem.click();
    await this.socialGovernmentItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllConsumerServicesOnSectors() {
    await this.consumerServicesItem.click();
    await this.consumerServicesItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllTelecommunicationOnSectors() {
    await this.telecommunicationItem.click();
    await this.telecommunicationItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllUtilitiesOnSectors() {
    await this.utilitiesItem.click();
    await this.utilitiesItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllFinancialsOnSectors() {
    await this.financialsItem.click();
    await this.financialsItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectAllTechnologyOnSectors() {
    await this.technologyItem.click();
    await this.technologyItemCheckAll.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectNoEmployees() {
    await this.noEmployess.click();
    await delay(1000);
    await this.fromNumber.setValue(Key.CONTROL + 'a');
    await this.fromNumber.setValue('50');
    await this.fromNumber.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await this.toNumber.setValue(Key.CONTROL + 'a');
    await this.toNumber.setValue('5000');
    await this.toNumber.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async saveCompanySearch(name?: string) {
    await this.saveSearch.click();
    await this.browser.wait(elementIsVisible(() => this.optionSavedSearch));
    await this.optionSavedSearch.click();
    await delay(1000);
    await this.browser.moveAndDoubleClick(this.saveSearchName.selector);
    if (name) {
      await this.saveSearchName.setValue(`${name}`);
      await delay(1000);
    } else {
      await this.saveSearchName.setValue(`Saved Search By Auto ${random()}`);
    }
    await this.saveSearchName.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstSavedSearchItem));
  }

  public async addCompanyToTargetList() {
    await this.firstCompaniesItem.click();
    await this.targetsButton.click();
    await this.checkTargetListItem.click();
    await this.addToSelectedListsConfirm.click();
    await this.browser.wait(elementIsVisible(() => this.firstTargetsItem));
  }
  
  public async addFirstPageCompaniesToTargetList() {
    await this.checkedAll.click();
    await this.targetsButton.click();
    await this.createNewList.click();
    await this.targetListName.setValue(`Created New Targets List By Auto ${random()}`);
    await this.targetListName.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstTargetsItem));
    return await this.firstTargetsItem.isDisplayed();
  }

  public async addCompanyToNewTargetList() {
    await this.firstCompaniesItem.click();
    await this.targetsButton.click();
    await delay(5000);
    await this.createNewList.click();
    await delay(2000);
    await this.targetListName.setValue(`Created New Targets List By Auto ${random()}`);
    await this.targetListName.setValue(Key.ENTER);
    await delay(5000);
    await this.targetsButton.click();
    await this.browser.wait(elementIsVisible(() => this.firstTargetsItem));
  }

  public async selectSpecificOnSectors() {
    await this.basicMaterials.click();
    await this.chemicals.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async selectSpecificOnBusinessLines() {
    await this.businessLines.click();
    await this.customCompoundingOfPurchasedResins.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async searchBusinessLineAndSelectSpecific() {
    await this.businessLines.click();
    await delay(1000);
    await this.searchBusinessLines.setValue('Customs');
    await this.searchBusinessLines.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstBusinessLinesItem));
    await this.firstBusinessLinesItem.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async addMultipleCompaniesToExistingTargetList() {
    await this.firstCompaniesItem.click();
    await this.secondCompaniesItem.click();
    await this.thirdCompaniesItem.click();
    await this.fourthCompaniesItem.click();
    await delay(1000);
    await this.targetsButton.click();
    await this.browser.wait(elementIsVisible(() => this.firstTargetsItem));
    await this.firstTargetsListCheckBox.click();
    await this.addToSelectedListsConfirm.click();
    await this.browser.wait(elementIsVisible(() => this.firstTargetsItem));
  }

  public async openSavedSearch() {
    await this.savedSearches.click();
    await this.browser.wait(elementIsVisible(() => this.firstSavedSearchItem));
    await this.secondSavedSearchItem.click();
    await this.browser.wait(elementIsVisible(() => this.companiesFound));
    await this.closeSavedSearches.click();
  }

  public async useFinancialFilters() {
    await this.financials.click();
    await this.browser.wait(elementIsVisible(() => this.revenue));
    const revenues = await this.browser.findElements(this.revenue.selector);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await revenues[1].sendKeys(Key.CONTROL + 'a');
    await revenues[1].sendKeys('1000000000');
    await revenues[1].sendKeys(Key.ENTER);
    await delay(1000);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async findCompanyIsLoss() {
    await this.financials.click();
    await this.browser.wait(elementIsVisible(() => this.revenue));
    const revenues = await this.browser.findElements(this.revenue.selector);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
    await revenues[3].sendKeys(Key.CONTROL + 'a');
    await revenues[3].sendKeys('-8000');
    await revenues[3].sendKeys(Key.ENTER);
    await delay(1000);
    await this.browser.wait(elementIsVisible(() => this.firstCompaniesItem));
  }

  public async switchSearchNews() {
    await this.navigate();
    await this.news.click();
    await this.browser.wait(pageHasLoaded(NewsListPage));
  }

  public async goToCompanyDetail(companyGUID?: string) {
    if (!companyGUID) {
      await this.firstCompanyLink.click();
    }
    if (companyGUID) {
      await this.browser.navigate(`${config.publicUrl}/companies/${companyGUID}`);
      await this.browser.wait(elementIsVisible(() => this.marketCap));
    }
    await this.browser.wait(pageHasLoaded(CompanyDetailPage));
  }

}
