import {
  TextInput, Button, Browser, Page,
  findBy, elementIsVisible, pageHasLoaded, WebComponent} from '../../common';
import { config } from '../../config';
import { CompanyDetailPage } from './companyDetail';

export class TargetListDetailPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}`);
  }

  @findBy('//table[@aria-label="data table"]//tbody/tr//a')
  public firstCompanyLink!: WebComponent;

  @findBy('//button[@data-trackable="target-list-head"][1]')
  public renameList!: Button;

  @findBy('//input[@maxlength="48"]')
  public renameInput!: TextInput;

  @findBy('//button[@data-trackable="rename-button"]')
  public renameConfirmButton!: Button;
  
  @findBy('//button[@data-trackable="delete-target-list"]')
  public deleteList!: Button;

  @findBy('//*[@fill="#EB1730"]')
  public redIconOnTargetListButton!: WebComponent;

  @findBy('//button[@data-trackable="targets-drawer"]')
  public closeTargetList!: Button;

  @findBy('//span[text()="Onsite"]')
  public onSiteToggle!: WebComponent;

  @findBy('//button[@data-trackable="delete-target-list"]')
  public deleteTargetListButton!: Button;

  @findBy('//button[@data-trackable="delete-target-list-modal-confirm"]')
  public deleteTargetListConfirmButton!: Button;

  @findBy('//button[@aria-controls="simple-tabpanel-0"]')
  public companiesButton!: Button;

  @findBy('//button[@aria-controls="simple-tabpanel-1"]')
  public newsButton!: Button;

  @findBy('//a[@data-trackable="article"]')
  public article!: WebComponent;

  @findBy('//input[@id="compactCheckbox-enhanced-table-checkbox-0"]')
  public firstCompanyItem!: WebComponent;

  @findBy('//table[@aria-label="data table"]/tbody/tr[1]/th/div[2]/a')
  public firstCompanyItemLink!: WebComponent;

  @findBy('//button[@data-trackable="remove-companies-button"]')
  public removeCompaniesButton!: Button;

  @findBy('//button[@id="simple-tab-0"]')
  public companies!: Button;

  @findBy('//button[@data-trackable="target-list-head"][2]')
  public alerts!: Button;

  @findBy('//span[text()="Onsite"]')
  public onsite!: WebComponent;

  @findBy('//span[text()="Email digest"]')
  public emailDigest!: WebComponent;

  @findBy('//nav[@aria-label="Alerts for Targets"]//span[text()="View Alerts"]')
  public viewAlerts!: WebComponent;

  public loadCondition() {
    return elementIsVisible(() => this.companies);
  }

  public async goToCompanyDetailFromTargetDetail() {
    await this.browser.waitAny([
      elementIsVisible(() => this.firstCompanyLink), elementIsVisible(() => this.article),
    ]);
    const companyLinkIsDisplayed = await this.firstCompanyItemLink.isDisplayed();
    if (!companyLinkIsDisplayed) await this.companies.click();
    await this.browser.wait(elementIsVisible(() => this.firstCompanyLink));
    await this.firstCompanyLink.click();
    await this.browser.wait(pageHasLoaded(CompanyDetailPage));
  }

  public async checkAlerts() {
    await this.alerts.click();
    await this.browser.wait(elementIsVisible(() => this.onsite));
    let isDisplayed: boolean = false;
    isDisplayed = await this.onsite.isDisplayed();
    isDisplayed = await this.emailDigest.isDisplayed();
    return isDisplayed;
  }

  public async hasViewAlerts() {
    const isDisplayed = await this.viewAlerts.isDisplayed();
    return isDisplayed;
  }
}
