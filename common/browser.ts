import 'chromedriver';
import { Builder, ThenableWebDriver, By, WebElementPromise, until, WebElement } from 'selenium-webdriver';
import chrome = require('selenium-webdriver/chrome');
import { WaitCondition } from '.';

export class Browser {
  private driver: ThenableWebDriver;
  public constructor(private browserName: string) {
    this.driver = new Builder().forBrowser(browserName)
      .setChromeOptions(new chrome.Options().headless().addArguments('--no-sandbox', '--disable-dev-shm-usage', '--window-size=1920,1080')).build();
    this.driver.manage().window().maximize();
  }

  public async navigate(url: string): Promise<void> {
    await this.driver.navigate().to(url);
  }

  public findElement(selector: string): WebElementPromise {
    return this.driver.findElement(By.xpath(selector));
  }

  public async findElements(selector: string): Promise<WebElement[]> {
    return await this.driver.findElements(By.xpath(selector));
  }

  public async findElementAsync(selector: string): Promise<WebElementPromise> {
    return await this.driver.wait(until.elementLocated(By.xpath(selector)),  5000);
  }

  public async move(selector: string): Promise<void> {
    const element = await this.driver.findElement(By.xpath(selector));
    const actions = this.driver.actions({async: true});
    await actions.move({origin: element}).perform();
  }

  public async click(): Promise<void> {
    const actions = this.driver.actions({ async: true });
    await actions.click().perform();
  }

  public async doubleClick(): Promise<void> {
    const actions = this.driver.actions({ async: true });
    await actions.doubleClick().perform();
  }

  public async moveAndClick(selector: string, x?: number, y?: number): Promise<void> {
    const element = await this.driver.findElement(By.xpath(selector));
    const actions = this.driver.actions({ async: true });
    await actions.move({ origin: element, x: x ?? 0, y: y ?? 0 }).click().perform();
  }

  public async moveAndDoubleClick(selector: string, x?: number, y?: number): Promise<void> {
    const element = await this.driver.findElement(By.xpath(selector));
    const actions = this.driver.actions({ async: true });
    await actions.move({ origin: element, x: x ?? 0, y: y ?? 0 }).doubleClick().perform();
  }

  public async clearCookies(url?: string): Promise<void> {
    if (url) {
      const currentUrl = await this.driver.getCurrentUrl();
      await this.navigate(url);
      await this.driver.manage().deleteAllCookies();
      await this.navigate(currentUrl);
    } else {
      await this.driver.manage().deleteAllCookies();
    }
  }

  public async wait(condition: WaitCondition) {
    await this.waitAny(condition);
  }

  public async waitAny(conditions: WaitCondition | WaitCondition[]): Promise<void> {
    const all = (!(conditions instanceof Array)) ? [ conditions ] : conditions;

    await this.driver.wait(async () => {
      for (const condition of all) {
        try {
          if (await condition(this) === true) {
            return true;
          }
          continue;
        } catch (ex) {
          continue;
        }
      }
    }, 20000);
  }

  public async quit(): Promise<void> {
    await this.driver.quit();
  }

  public async close(): Promise<void> {
    await this.driver.close();
  }
  
  public async getWindowHandle(): Promise<string> {
    return await this.driver.getWindowHandle();
  }

  public async getAllWindowHandles(): Promise<string[]> {
    return await this.driver.getAllWindowHandles();
  }

  public async window(tab: string): Promise<void> {
    await this.driver.switchTo().window(tab);
  }

  public async newWindow(tab: string): Promise<void> {
    await this.driver.switchTo().newWindow(tab);
  }
  
  public async back(): Promise<void> {
    await this.driver.navigate().back();
  }

  public async refresh(): Promise<void> {
    await this.driver.navigate().refresh();
  }

  public async executeScript(javaScript: string): Promise<void>{
    await this.driver.executeScript(javaScript);
  }
}
