"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
require("chromedriver");
const selenium_webdriver_1 = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
class Browser {
    constructor(browserName) {
        this.browserName = browserName;
        this.driver = new selenium_webdriver_1.Builder().forBrowser(browserName)
            .setChromeOptions(new chrome.Options().headless().addArguments('--no-sandbox', '--disable-dev-shm-usage', '--window-size=1920,1080')).build();
        this.driver.manage().window().maximize();
    }
    navigate(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.navigate().to(url);
        });
    }
    findElement(selector) {
        return this.driver.findElement(selenium_webdriver_1.By.xpath(selector));
    }
    findElements(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.findElements(selenium_webdriver_1.By.xpath(selector));
        });
    }
    findElementAsync(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath(selector)), 5000);
        });
    }
    move(selector) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.driver.findElement(selenium_webdriver_1.By.xpath(selector));
            const actions = this.driver.actions({ async: true });
            yield actions.move({ origin: element }).perform();
        });
    }
    click() {
        return __awaiter(this, void 0, void 0, function* () {
            const actions = this.driver.actions({ async: true });
            yield actions.click().perform();
        });
    }
    doubleClick() {
        return __awaiter(this, void 0, void 0, function* () {
            const actions = this.driver.actions({ async: true });
            yield actions.doubleClick().perform();
        });
    }
    moveAndClick(selector, x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.driver.findElement(selenium_webdriver_1.By.xpath(selector));
            const actions = this.driver.actions({ async: true });
            yield actions.move({ origin: element, x: x !== null && x !== void 0 ? x : 0, y: y !== null && y !== void 0 ? y : 0 }).click().perform();
        });
    }
    moveAndDoubleClick(selector, x, y) {
        return __awaiter(this, void 0, void 0, function* () {
            const element = yield this.driver.findElement(selenium_webdriver_1.By.xpath(selector));
            const actions = this.driver.actions({ async: true });
            yield actions.move({ origin: element, x: x !== null && x !== void 0 ? x : 0, y: y !== null && y !== void 0 ? y : 0 }).doubleClick().perform();
        });
    }
    clearCookies(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (url) {
                const currentUrl = yield this.driver.getCurrentUrl();
                yield this.navigate(url);
                yield this.driver.manage().deleteAllCookies();
                yield this.navigate(currentUrl);
            }
            else {
                yield this.driver.manage().deleteAllCookies();
            }
        });
    }
    wait(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitAny(condition);
        });
    }
    waitAny(conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const all = (!(conditions instanceof Array)) ? [conditions] : conditions;
            yield this.driver.wait(() => __awaiter(this, void 0, void 0, function* () {
                for (const condition of all) {
                    try {
                        if ((yield condition(this)) === true) {
                            return true;
                        }
                        continue;
                    }
                    catch (ex) {
                        continue;
                    }
                }
            }), 20000);
        });
    }
    quit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.quit();
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.close();
        });
    }
    getWindowHandle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.getWindowHandle();
        });
    }
    getAllWindowHandles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.driver.getAllWindowHandles();
        });
    }
    window(tab) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.switchTo().window(tab);
        });
    }
    newWindow(tab) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.switchTo().newWindow(tab);
        });
    }
    back() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.navigate().back();
        });
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.navigate().refresh();
        });
    }
    executeScript(javaScript) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.driver.executeScript(javaScript);
        });
    }
}
exports.Browser = Browser;
