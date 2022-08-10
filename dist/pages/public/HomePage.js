"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.HomePage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const common_1 = require("../../common");
const config_1 = require("../../config");
const targetListDetail_1 = require("./targetListDetail");
const loginPage_1 = require("../loginPage");
class HomePage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(`${config_1.config.publicUrl}`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.ul);
    }
    checkBehaviourOfToolTip() {
        return __awaiter(this, void 0, void 0, function* () {
            let isValid = false;
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.getStarted));
            yield this.getStarted.click();
            isValid = yield this.toolTip1.isDisplayed();
            yield this.searchCompanies.setValue('test');
            yield this.searchCompanies.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompanyResult));
            isValid = yield this.toolTip2.isDisplayed();
            yield this.selectAllCompanies.click();
            isValid = yield this.toolTip3.isDisplayed();
            yield this.createNewTargetList.click();
            yield this.targetListName.setValue(`Create New Target List By Auto ${(0, common_1.random)()}`);
            yield this.targetListName.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.toolTip4));
            isValid = yield this.toolTip4.isDisplayed();
            return isValid;
        });
    }
    goToTargetDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.targets.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetsItem));
            yield this.firstTargetsItem.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(targetListDetail_1.TargetListDetailPage));
        });
    }
    goToConnectionsPlus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connectionsPlus.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.connectionsPlusModal));
            if (typeof (0, common_1.elementIsVisible)(() => this.connectionsPlusModal) === 'function') {
                yield this.acceptTermCheckbox.click();
                yield this.tryFeatureNow.click();
                yield this.closeConnectionPlusPopup.click();
            }
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.accountDropdownToggle.click();
            yield this.logoutButton.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(loginPage_1.ScoutAiSingInPage));
        });
    }
}
__decorate([
    (0, common_1.findBy)('//ul/a[@data-trackable="my-alerts-article"]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "myAlerts", void 0);
__decorate([
    (0, common_1.findBy)('//ul'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "ul", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="guide-cta-start-TargetList"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "getStarted", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Search and filter companies you want to add to your target list."]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "toolTip1", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Select the companies you want to add."]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "toolTip2", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Create a target list for the companies you selected. "]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "toolTip3", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="You can access your target list at any time from this menu."]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "toolTip4", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="end-guide-TargetList"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "endTour", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Search Companies"]'),
    __metadata("design:type", common_1.TextInput)
], HomePage.prototype, "searchCompanies", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="data_table_container"]//tbody/tr[1]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "firstCompanyResult", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-select-all"]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "selectAllCompanies", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="create-new-list-button"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "createNewTargetList", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Target list name"]'),
    __metadata("design:type", common_1.TextInput)
], HomePage.prototype, "targetListName", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="Targets"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "targets", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Targets"]/li[1]//a[contains(@href, "target-lists")]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "firstTargetsItem", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="connection-plus"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "connectionsPlus", void 0);
__decorate([
    (0, common_1.findBy)('//div[@role="dialog" and .//span[.="Connections"]]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "connectionsPlusModal", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="connectsplus_try_features_btn"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "tryFeatureNow", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-termOfUse"]'),
    __metadata("design:type", common_1.WebComponent)
], HomePage.prototype, "acceptTermCheckbox", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="connectsplus_close_modal_btn"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "closeConnectionPlusPopup", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="account-dropdown-toggle"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "accountDropdownToggle", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="Logout"]'),
    __metadata("design:type", common_1.Button)
], HomePage.prototype, "logoutButton", void 0);
exports.HomePage = HomePage;
