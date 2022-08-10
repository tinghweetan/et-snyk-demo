import { Key } from 'selenium-webdriver';
import { Browser, findBy, Button, TextInput, elementIsVisible, pageHasLoaded, WebComponent, Page, random } from '../../common';
import { config } from '../../config';
import { TargetListDetailPage } from './targetListDetail';
import { ScoutAiSingInPage } from '../loginPage';

export class HomePage extends Page {
  @findBy('//ul/a[@data-trackable="my-alerts-article"]')
  public myAlerts!: WebComponent;

  @findBy('//ul')
  public ul!: WebComponent;

  @findBy('//button[@data-trackable="guide-cta-start-TargetList"]')
  public getStarted!: Button;

  @findBy('//p[text()="Search and filter companies you want to add to your target list."]')
  public toolTip1!: WebComponent;
  
  @findBy('//p[text()="Select the companies you want to add."]')
  public toolTip2!: WebComponent;

  @findBy('//p[text()="Create a target list for the companies you selected. "]')
  public toolTip3!: WebComponent;

  @findBy('//p[text()="You can access your target list at any time from this menu."]')
  public toolTip4!: WebComponent;

  @findBy('//button[@data-trackable="end-guide-TargetList"]')
  public endTour!: Button;

  @findBy('//input[@placeholder="Search Companies"]')
  public searchCompanies!: TextInput;

  @findBy('//div[@id="data_table_container"]//tbody/tr[1]')
  public firstCompanyResult!: WebComponent;

  @findBy('//input[@id="compactCheckbox-select-all"]')
  public selectAllCompanies!: WebComponent;

  @findBy('//button[@data-trackable="create-new-list-button"]')
  public createNewTargetList!: Button;

  @findBy('//input[@placeholder="Target list name"]')
  public targetListName!: TextInput;

  @findBy('//button[@data-trackable="Targets"]')
  public targets!: Button;

  @findBy('//nav[@aria-label="Alerts for Targets"]/li[1]//a[contains(@href, "target-lists")]')
  public firstTargetsItem!: WebComponent;

  @findBy('//button[@data-trackable="connection-plus"]')
  public connectionsPlus!: Button;

  @findBy('//div[@role="dialog" and .//span[.="Connections"]]')
  public connectionsPlusModal!: WebComponent;

  @findBy('//button[@data-trackable="connectsplus_try_features_btn"]')
  public tryFeatureNow!: Button;

  @findBy('//input[@id="compactCheckbox-termOfUse"]')
  public acceptTermCheckbox!: WebComponent;

  @findBy('//button[@data-trackable="connectsplus_close_modal_btn"]')
  public closeConnectionPlusPopup!: Button;

  @findBy('//button[@data-trackable="account-dropdown-toggle"]')
  public accountDropdownToggle!: Button;

  @findBy('//button[@data-trackable="Logout"]')
  public logoutButton!: Button;

  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}`);
  }

  public loadCondition() {
    return elementIsVisible(() => this.ul);
  }
  
  public async checkBehaviourOfToolTip() {
    let isValid: boolean = false;
    await this.browser.wait(elementIsVisible(() => this.getStarted));
    await this.getStarted.click();
    isValid = await this.toolTip1.isDisplayed();
    await this.searchCompanies.setValue('test');
    await this.searchCompanies.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.firstCompanyResult));
    isValid = await this.toolTip2.isDisplayed();
    await this.selectAllCompanies.click();
    isValid = await this.toolTip3.isDisplayed();
    await this.createNewTargetList.click();
    await this.targetListName.setValue(`Create New Target List By Auto ${random()}`);
    await this.targetListName.setValue(Key.ENTER);
    await this.browser.wait(elementIsVisible(() => this.toolTip4));
    isValid = await this.toolTip4.isDisplayed();
    return isValid;
  }

  public async goToTargetDetail() {
    await this.targets.click();
    await this.browser.wait(elementIsVisible(() => this.firstTargetsItem));
    await this.firstTargetsItem.click();
    await this.browser.wait(pageHasLoaded(TargetListDetailPage));
  }

  public async goToConnectionsPlus() {
    await this.connectionsPlus.click();
    await this.browser.wait(elementIsVisible(() => this.connectionsPlusModal));
    if(typeof elementIsVisible(() => this.connectionsPlusModal) === 'function'){
      await this.acceptTermCheckbox.click();
      await this.tryFeatureNow.click();
      await this.closeConnectionPlusPopup.click();
    }
  }

  public async logout() {
    await this.accountDropdownToggle.click();
    await this.logoutButton.click();
    await this.browser.wait(pageHasLoaded(ScoutAiSingInPage));
  }
}
