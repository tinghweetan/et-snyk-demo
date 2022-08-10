import { Button, Browser, Page, findBy, elementIsVisible, WebComponent, delay } from '../../common';
import { config } from '../../config';

export class AlertSettingsPage extends Page {
  constructor(browser: Browser) {
    super(browser);
    this.setUrl(`${config.publicUrl}/alerts/scout-ai`);
  }
  
  @findBy('//ul[@aria-labelledby="list-subheader"]/li[1]')
  public loadScoutAI!: WebComponent;
  
  @findBy('//button[@id="hs-alert-settings-tab--2"]')
  public targetList!: Button;

  @findBy('//ul[@aria-labelledby="list-subheader"]/li[1]')
  public firstTargetListItem!: WebComponent;
  
  @findBy('//ul[@aria-labelledby="list-subheader"]/li//button[contains(@data-trackable, "delete-alerts-item-targetList")]')
  public deleteTargetListItem!: Button;

  @findBy(`//h5[text()="You haven't created any Target Lists yet."]`)
  public notHaveTargetList!: WebComponent;

  @findBy('//button[@data-trackable="delete-Target List-modal-confirm"]')
  public deleteTargetListItemConfirm!: Button;

  @findBy('//button[@id="hs-alert-settings-tab--1"]')
  public savedSearch!: Button;

  @findBy('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]')
  public firstSavedSearchItem!: WebComponent;

  @findBy('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li//button[contains(@data-trackable, "delete-alerts-item")]')
  public trashbin!: WebComponent;

  @findBy('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]//button[contains(@data-trackable, "delete-alerts-item")]')
  public deleteSearchItem!: WebComponent;

  @findBy('//button[@data-trackable="delete-Saved Search-modal-confirm"]')
  public deleteSavedConfirm!: Button;

  @findBy('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]//a')
  public firstSavedSearchItemLink!: WebComponent;

  @findBy('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]//button[@aria-label="checkbox"]')
  public firstSavedSearchCheck!: WebComponent;

  @findBy('//div[@id="hs-alert-settings-tab-panel--2"]//ul/li[1]//button[@aria-label="checkbox"]')
  public firstTargetCheck!: WebComponent;
    
  public loadCondition() {
    return elementIsVisible(() => this.loadScoutAI);
  }

  public async deleteAllTargetList() {
    await this.targetList.click();
    await this.browser.wait(elementIsVisible(() => this.deleteTargetListItem));
    const deleteTargetListItems = await this.browser.findElements(this.deleteTargetListItem.selector);
    for await (const deleteTargetListItem of deleteTargetListItems) {
      await deleteTargetListItem.click();
      await this.deleteTargetListItemConfirm.click();
      await delay(2000);
    }
    await this.browser.wait(elementIsVisible(() => this.notHaveTargetList));
  }

  public async switchSavedSearchTab() {
    await this.savedSearch.click();
    await this.browser.wait(elementIsVisible(() => this.firstSavedSearchItem));
  }
  
  public async switchTargetListTab() {
    await this.targetList.click();
    await this.browser.wait(elementIsVisible(() => this.firstTargetListItem));
  }

  public async deleteFirstTargetListItem() {
    await this.deleteSearchItem.click();
    await this.deleteSavedConfirm.click();
    await delay(3000);
    return await this.getFirstItemName();
  }

  public async deleteSavedSearchItem() {
    await this.deleteSearchItem.click();
    await this.deleteSavedConfirm.click();
    await delay(3000);
    return await this.getFirstItemName();
  }

  public async deleteSavedSearchItems(remain?: number) {
    const trashbins = await this.browser.findElements(this.trashbin.selector);
    const loop = async () => {
      for (const trashbin of trashbins.slice(0,remain ?? -5)) {
        await trashbin.click();
        await this.deleteSavedConfirm.click();
        await delay(4000);
      }
    }
    loop();
  }

  public async getFirstItemName() {
    return await this.firstSavedSearchItemLink.getText();
  }

  public async changeOnSiteAndEmailDigest() {
    const firstSavedSearchCheckList = await this.browser.findElements(this.firstSavedSearchCheck.selector);
    for await (const item of firstSavedSearchCheckList) {
      await item.click();
      await delay(2000);
    }
  }

  public async changeTargetListOnSiteAndEmailDigest() {
    const firstTargetCheckList = await this.browser.findElements(this.firstTargetCheck.selector);
    for await (const item of firstTargetCheckList) {
      await item.click();
      await delay(2000);
    }
  }
}
