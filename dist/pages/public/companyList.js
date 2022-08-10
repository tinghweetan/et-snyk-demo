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
exports.CompanyListPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const common_1 = require("../../common");
const config_1 = require("../../config");
const companyDetail_1 = require("./companyDetail");
const newsListPage_1 = require("./newsListPage");
class CompanyListPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(`${config_1.config.publicUrl}/search/companies`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.firstCompaniesItem);
    }
    selectAllCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkedAll.click();
        });
    }
    searchCompaniesByKeyword(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchCompanies.setValue(`${selenium_webdriver_1.Key.CONTROL}a`);
            yield this.searchCompanies.setValue(value);
            yield this.searchCompanies.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    displayedCompaniesInMyanmar() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countriesRegionsButton.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield this.myanmar.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectBusinessLines() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.businessLines.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.investmentAdvice));
            yield this.investmentAdvice.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectCountriesRegions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countriesRegions.click();
            yield this.china.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield this.malaysia.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield this.southKorea.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectFinancials() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sectorsButton.click();
            yield (0, common_1.delay)(4000);
            yield this.financials.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.revenue));
            const revenues = yield this.browser.findElements(this.revenue.selector);
            yield revenues[0].sendKeys(selenium_webdriver_1.Key.CONTROL + 'a');
            yield revenues[0].sendKeys('20000');
            yield revenues[0].sendKeys(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield revenues[1].sendKeys(selenium_webdriver_1.Key.CONTROL + 'a');
            yield revenues[1].sendKeys('20000000');
            yield revenues[1].sendKeys(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectOwnership() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ownership.click();
            yield this.listed.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield this.private.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    openCompanySectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sectorsButton.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.oilGasItem));
        });
    }
    selectAllOilGasOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.oilGasItem.click();
            yield this.oilGasItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllBasicMaterialsOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.basicMaterialsItem.click();
            yield this.basicMaterialsItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllIndustrialsOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.industrialsItem.click();
            yield this.industrialsItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllConsumerGoodsOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consumerGoodsItem.click();
            yield this.consumerGoodsItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllHealthCareOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.healthCareItem.click();
            yield this.healthCareItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllSocialGovernmentOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.socialGovernmentItem.click();
            yield this.socialGovernmentItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllConsumerServicesOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.consumerServicesItem.click();
            yield this.consumerServicesItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllTelecommunicationOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.telecommunicationItem.click();
            yield this.telecommunicationItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllUtilitiesOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.utilitiesItem.click();
            yield this.utilitiesItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllFinancialsOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.financialsItem.click();
            yield this.financialsItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectAllTechnologyOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.technologyItem.click();
            yield this.technologyItemCheckAll.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectNoEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.noEmployess.click();
            yield (0, common_1.delay)(1000);
            yield this.fromNumber.setValue(selenium_webdriver_1.Key.CONTROL + 'a');
            yield this.fromNumber.setValue('50');
            yield this.fromNumber.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield this.toNumber.setValue(selenium_webdriver_1.Key.CONTROL + 'a');
            yield this.toNumber.setValue('5000');
            yield this.toNumber.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    saveCompanySearch(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveSearch.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.optionSavedSearch));
            yield this.optionSavedSearch.click();
            yield (0, common_1.delay)(1000);
            yield this.browser.moveAndDoubleClick(this.saveSearchName.selector);
            if (name) {
                yield this.saveSearchName.setValue(`${name}`);
                yield (0, common_1.delay)(1000);
            }
            else {
                yield this.saveSearchName.setValue(`Saved Search By Auto ${(0, common_1.random)()}`);
            }
            yield this.saveSearchName.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstSavedSearchItem));
        });
    }
    addCompanyToTargetList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstCompaniesItem.click();
            yield this.targetsButton.click();
            yield this.checkTargetListItem.click();
            yield this.addToSelectedListsConfirm.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetsItem));
        });
    }
    addFirstPageCompaniesToTargetList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.checkedAll.click();
            yield this.targetsButton.click();
            yield this.createNewList.click();
            yield this.targetListName.setValue(`Created New Targets List By Auto ${(0, common_1.random)()}`);
            yield this.targetListName.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetsItem));
            return yield this.firstTargetsItem.isDisplayed();
        });
    }
    addCompanyToNewTargetList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstCompaniesItem.click();
            yield this.targetsButton.click();
            yield (0, common_1.delay)(5000);
            yield this.createNewList.click();
            yield (0, common_1.delay)(2000);
            yield this.targetListName.setValue(`Created New Targets List By Auto ${(0, common_1.random)()}`);
            yield this.targetListName.setValue(selenium_webdriver_1.Key.ENTER);
            yield (0, common_1.delay)(5000);
            yield this.targetsButton.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetsItem));
        });
    }
    selectSpecificOnSectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.basicMaterials.click();
            yield this.chemicals.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    selectSpecificOnBusinessLines() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.businessLines.click();
            yield this.customCompoundingOfPurchasedResins.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    searchBusinessLineAndSelectSpecific() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.businessLines.click();
            yield (0, common_1.delay)(1000);
            yield this.searchBusinessLines.setValue('Customs');
            yield this.searchBusinessLines.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstBusinessLinesItem));
            yield this.firstBusinessLinesItem.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    addMultipleCompaniesToExistingTargetList() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.firstCompaniesItem.click();
            yield this.secondCompaniesItem.click();
            yield this.thirdCompaniesItem.click();
            yield this.fourthCompaniesItem.click();
            yield (0, common_1.delay)(1000);
            yield this.targetsButton.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetsItem));
            yield this.firstTargetsListCheckBox.click();
            yield this.addToSelectedListsConfirm.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetsItem));
        });
    }
    openSavedSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.savedSearches.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstSavedSearchItem));
            yield this.secondSavedSearchItem.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.companiesFound));
            yield this.closeSavedSearches.click();
        });
    }
    useFinancialFilters() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.financials.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.revenue));
            const revenues = yield this.browser.findElements(this.revenue.selector);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield revenues[1].sendKeys(selenium_webdriver_1.Key.CONTROL + 'a');
            yield revenues[1].sendKeys('1000000000');
            yield revenues[1].sendKeys(selenium_webdriver_1.Key.ENTER);
            yield (0, common_1.delay)(1000);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    findCompanyIsLoss() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.financials.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.revenue));
            const revenues = yield this.browser.findElements(this.revenue.selector);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
            yield revenues[3].sendKeys(selenium_webdriver_1.Key.CONTROL + 'a');
            yield revenues[3].sendKeys('-8000');
            yield revenues[3].sendKeys(selenium_webdriver_1.Key.ENTER);
            yield (0, common_1.delay)(1000);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompaniesItem));
        });
    }
    switchSearchNews() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.navigate();
            yield this.news.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(newsListPage_1.NewsListPage));
        });
    }
    goToCompanyDetail(companyGUID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!companyGUID) {
                yield this.firstCompanyLink.click();
            }
            if (companyGUID) {
                yield this.browser.navigate(`${config_1.config.publicUrl}/companies/${companyGUID}`);
                yield this.browser.wait((0, common_1.elementIsVisible)(() => this.marketCap));
            }
            yield this.browser.wait((0, common_1.pageHasLoaded)(companyDetail_1.CompanyDetailPage));
        });
    }
}
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-enhanced-table-checkbox-0"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "firstCompaniesItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-enhanced-table-checkbox-1"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "secondCompaniesItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-enhanced-table-checkbox-2"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "thirdCompaniesItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-enhanced-table-checkbox-3"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "fourthCompaniesItem", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="data_table_container"]/table//tbody/tr[1]/th//a'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "firstCompanyLink", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-select-all"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "checkedAll", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Countries & regions"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "countriesRegionsButton", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-country="MMR"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "myanmar", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Search Companies"]'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "searchCompanies", void 0);
__decorate([
    (0, common_1.findBy)('//button[@aria-label="search"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "search", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="41 selected"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "sectorsSelected", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Business Lines"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "businessLines", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-menu-search-list-tab-0"]//div[@data-trackable="find-business-lines-tab"][1]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "firstBusinessLinesItem", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Countries & regions"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "countriesRegions", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-country="CHN"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "china", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-country="MYS"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "malaysia", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-country="KOR"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "southKorea", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Financials"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "financials", void 0);
__decorate([
    (0, common_1.findBy)('//div[@x-placement="right-start"]//input[@inputmode="numeric"]'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "revenue", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Ownership"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "ownership", void 0);
__decorate([
    (0, common_1.findBy)('//div[@aria-label="ownership"]//p[text()="Private"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "private", void 0);
__decorate([
    (0, common_1.findBy)('//div[@aria-label="ownership"]//p[text()="Listed"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "listed", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="No. Employees"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "noEmployess", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="From"]/following-sibling::div//input'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "fromNumber", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="To"]/following-sibling::div//input'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "toNumber", void 0);
__decorate([
    (0, common_1.findBy)('//button[.="Save"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "saveSearch", void 0);
__decorate([
    (0, common_1.findBy)('//*[@role="button" and .="Saved Search"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "optionSavedSearch", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Enter name..."]'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "saveSearchName", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Saved Search"]/li[1]//a'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "firstSavedSearchItem", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Saved Search"]/li[2]//a'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "secondSavedSearchItem", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Targets"]/li[1]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "firstTargetsItem", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="create-new-list-button"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "createNewList", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Target list name"]'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "targetListName", void 0);
__decorate([
    (0, common_1.findBy)('//div[@x-placement="right-start"]//p[text()="Basic Materials"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "basicMaterials", void 0);
__decorate([
    (0, common_1.findBy)('//div[@x-placement="right-start"]//p[text()="Chemicals"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "chemicals", void 0);
__decorate([
    (0, common_1.findBy)('//div[@x-placement="right-start"]//span[text()="Custom Compounding of Purchased Resins"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "customCompoundingOfPurchasedResins", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Search business lines"]'),
    __metadata("design:type", common_1.TextInput)
], CompanyListPage.prototype, "searchBusinessLines", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Targets"]/li[1]//button[@aria-label="checkbox"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "firstTargetsListCheckBox", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="add-to-selected-lists-confirm"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "addToSelectedListsConfirm", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="Saved Searches"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "savedSearches", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="saved searches-drawer"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "closeSavedSearches", void 0);
__decorate([
    (0, common_1.findBy)('//h2[contains(text(), "companies found")]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "companiesFound", void 0);
__decorate([
    (0, common_1.findBy)(`//p[text()="You haven't created any Target Lists yet."]`),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "notHaveTargetList", void 0);
__decorate([
    (0, common_1.findBy)('//h4[text()="No companies found."]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "noCompaniesFound", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="Investment Advice"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "investmentAdvice", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Sectors"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "sectorsButton", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Oil & Gas"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "oilGasItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="0001"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "oilGasItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Basic Materials"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "basicMaterialsItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="1000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "basicMaterialsItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Basic Materials"]/div/span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "basicMaterialsItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Industrials" and @data-trackable="sector-menu"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "industrialsItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="2000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "industrialsItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Industrials" and @data-trackable="sector-menu"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "industrialsItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Goods"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "consumerGoodsItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="3000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "consumerGoodsItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Goods"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "consumerGoodsItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Health Care"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "healthCareItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="4000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "healthCareItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Health Care"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "healthCareItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Social & Government"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "socialGovernmentItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="X4900"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "socialGovernmentItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Social & Government"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "socialGovernmentItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Services"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "consumerServicesItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="5000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "consumerServicesItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Consumer Services"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "consumerServicesItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Telecommunication"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "telecommunicationItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="6000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "telecommunicationItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="sector-menu" and @data-trackable-context-sector="Telecommunication"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "telecommunicationItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Utilities"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "utilitiesItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="7000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "utilitiesItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Utilities"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "utilitiesItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Financials"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "financialsItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="8000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "financialsItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Financials"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "financialsItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Technology"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "technologyItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@name="9000"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "technologyItemCheckAll", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Technology"]//span'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "technologyItemCount", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="news"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "news", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Targets"]/li[1]//button[@aria-label="checkbox"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "checkTargetListItem", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="Targets"]'),
    __metadata("design:type", common_1.Button)
], CompanyListPage.prototype, "targetsButton", void 0);
__decorate([
    (0, common_1.findBy)('//p[.="Market cap"]/following-sibling::div/h5'),
    __metadata("design:type", common_1.WebComponent)
], CompanyListPage.prototype, "marketCap", void 0);
exports.CompanyListPage = CompanyListPage;
