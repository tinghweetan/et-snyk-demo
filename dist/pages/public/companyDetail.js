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
exports.CompanyDetailPage = void 0;
const common_1 = require("../../common");
const config_1 = require("../../config");
const companyList_1 = require("./companyList");
const newsDetail_1 = require("./newsDetail");
const newsListPage_1 = require("./newsListPage");
class CompanyDetailPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(`${config_1.config.publicUrl}`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.h3);
    }
    awaitNews() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.companyNews));
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.financialTable));
        });
    }
    backToResult() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.backToResultsButton.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(companyList_1.CompanyListPage));
        });
    }
    switchCurrencyByJPY() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.financialTable));
            yield this.jpy.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.jpyUnit));
        });
    }
    switchCurrencyByINR() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.financialTable));
            yield this.inr.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.inrUnit));
        });
    }
    switchNewsChartDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.day5.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.newsMentions));
            yield this.month1.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.newsMentions));
            yield this.year1.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.newsMentions));
        });
    }
    viewAllNews() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.viewAll));
            yield this.viewAll.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(newsListPage_1.NewsListPage));
        });
    }
    goToNewsDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.companyNews));
            yield this.companyNews.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(newsDetail_1.NewsDetailPage));
        });
    }
    goToConnections() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connections.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.operationalStructure));
        });
    }
}
__decorate([
    (0, common_1.findBy)('//table[@aria-label="financial-table"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "financialTable", void 0);
__decorate([
    (0, common_1.findBy)('//*[@id="react-app"]/div/div[3]/div/div/div/div[2]/div[3]/div[1]/div/button[2]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "CNY", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-financial-data-tab-0"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "overviewButton", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="table_content"]//table/tbody/tr[1]/th/div[2]/a'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "firstCompaniesItem", void 0);
__decorate([
    (0, common_1.findBy)('//a[@href="https://fwpresearch.com/lp/"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "FWPResearch", void 0);
__decorate([
    (0, common_1.findBy)('//a[@data-trackable="article"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "article", void 0);
__decorate([
    (0, common_1.findBy)('//h3'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "h3", void 0);
__decorate([
    (0, common_1.findBy)('//h3[text()="Contact Information"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "contactInformation", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="address"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "contactAddress", void 0);
__decorate([
    (0, common_1.findBy)('//h5[text()="Description"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "description", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-company-news-tab-0"]//a[@data-trackable="article"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "companyNews", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="Back to results"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "backToResultsButton", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="KRW"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "krw", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="JPY"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "jpy", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="USD"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "usd", void 0);
__decorate([
    (0, common_1.findBy)('//h5[contains(text(), "¥")]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "jpyUnit", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="INR"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "inr", void 0);
__decorate([
    (0, common_1.findBy)('//h5[contains(text(), "₹")]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "inrUnit", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-news-mention-tab-0"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "day5", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-news-mention-tab-1"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "month1", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-0"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketData5D", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-1"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketData1M", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-2"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketData6M", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-3"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketDataYTD", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-4"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketData1Y", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-5"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketData5Y", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-company-market-data-tab-6"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "marketDataMAX", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-news-mention-tab-3"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "year1", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="News Mentions"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "newsMentions", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="View All"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "viewAll", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="connections-page"]'),
    __metadata("design:type", common_1.Button)
], CompanyDetailPage.prototype, "connections", void 0);
__decorate([
    (0, common_1.findBy)('//div[text()="Operational structure"]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "operationalStructure", void 0);
__decorate([
    (0, common_1.findBy)('//*[text()="SHOWA CORP." or text()="Showa Corp."]'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "showaCOPR", void 0);
__decorate([
    (0, common_1.findBy)('//p[.="Market cap"]/following-sibling::div/h5'),
    __metadata("design:type", common_1.WebComponent)
], CompanyDetailPage.prototype, "marketCap", void 0);
exports.CompanyDetailPage = CompanyDetailPage;
