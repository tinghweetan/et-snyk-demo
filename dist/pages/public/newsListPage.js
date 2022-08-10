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
exports.NewsListPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const common_1 = require("../../common");
const config_1 = require("../../config");
const enums_1 = require("../../constants/enums");
const newsDetail_1 = require("./newsDetail");
class NewsListPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(`${config_1.config.publicUrl}/search/news`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.article);
    }
    searchNewsByPublicationDate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publicationData.click();
            yield (0, common_1.delay)(2000);
            yield this.today.click();
            yield this.today.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
            return this.articlesFoundCount.getText();
        });
    }
    searchNewsPublishedYesterday() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.publicationData.click();
            const day1 = new Date();
            day1.setTime(day1.getTime() - 24 * 60 * 60 * 1000);
            const yesterdayStr = day1.getFullYear() + "-" + (day1.getMonth() + 1).toString().padStart(2, "0") + "-" + day1.getDate().toString().padStart(2, '0');
            const yesterdayItem = yield this.browser.findElement(`//li[@data-date="${yesterdayStr}"]`);
            yield this.today.click();
            yield yesterdayItem.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
            return this.articlesFoundCount.getText();
        });
    }
    searchNewsBySource(sourceName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.source.click();
            switch (sourceName) {
                case enums_1.SourceNames.news:
                    yield this.newsSource.click();
                    break;
                case enums_1.SourceNames.exchangeFilings:
                    yield this.exchangeFilings.click();
                    break;
                case enums_1.SourceNames.opinionAnalysis:
                    yield this.opinionAnalysis.click();
                    break;
                case enums_1.SourceNames.pressReleases:
                    yield this.pressReleases.click();
                    break;
                case enums_1.SourceNames.reports:
                    yield this.reports.click();
                    break;
                case enums_1.SourceNames.transcripts:
                    yield this.transcripts.click();
                    break;
                case enums_1.SourceNames.webContent:
                    yield this.webContent.click();
                    break;
                default:
                    yield this.exchangeFilings.click();
                    yield this.allExchangeFilings.click();
                    break;
            }
            yield this.browser.waitAny([(0, common_1.elementIsVisible)(() => this.article), (0, common_1.elementIsVisible)(() => this.noNewsFound)]);
            return this.articlesFoundCount.getText();
        });
    }
    clickSubsector(num) {
        return __awaiter(this, void 0, void 0, function* () {
            let subsector;
            switch (num) {
                case 1:
                    subsector = () => this.subsector1;
                    break;
                case 2:
                    subsector = () => this.subsector2;
                    break;
                case 3:
                    subsector = () => this.subsector3;
                    break;
                case 4:
                    subsector = () => this.subsector4;
                    break;
                case 5:
                    subsector = () => this.subsector5;
                    break;
                case 6:
                    subsector = () => this.subsector6;
                    break;
                case 7:
                    subsector = () => this.subsector7;
                    break;
                case 8:
                    subsector = () => this.subsector8;
                    break;
                case 9:
                    subsector = () => this.subsector9;
                    break;
                case 10:
                    subsector = () => this.subsector10;
                    break;
                case 11:
                    subsector = () => this.subsector11;
                    break;
                case 12:
                    subsector = () => this.subsector12;
                    break;
                case 13:
                    subsector = () => this.subsector13;
                    break;
                case 14:
                    subsector = () => this.subsector14;
                    break;
                case 15:
                    subsector = () => this.subsector15;
                    break;
                case 16:
                    subsector = () => this.subsector16;
                    break;
                case 17:
                    subsector = () => this.subsector17;
                    break;
                case 18:
                    subsector = () => this.subsector18;
                    break;
                case 19:
                    subsector = () => this.subsector19;
                    break;
                case 20:
                    subsector = () => this.subsector20;
                    break;
                case 21:
                    subsector = () => this.subsector21;
                    break;
                case 22:
                    subsector = () => this.subsector22;
                    break;
                case 23:
                    subsector = () => this.subsector23;
                    break;
                case 24:
                    subsector = () => this.subsector24;
                    break;
                case 25:
                    subsector = () => this.subsector25;
                    break;
                case 26:
                    subsector = () => this.subsector26;
                    break;
                case 27:
                    subsector = () => this.subsector27;
                    break;
                case 28:
                    subsector = () => this.subsector28;
                    break;
                case 29:
                    subsector = () => this.subsector29;
                    break;
                case 30:
                    subsector = () => this.subsector30;
                    break;
                case 31:
                    subsector = () => this.subsector31;
                    break;
                case 32:
                    subsector = () => this.subsector32;
                    break;
                case 33:
                    subsector = () => this.subsector33;
                    break;
                case 34:
                    subsector = () => this.subsector34;
                    break;
                case 35:
                    subsector = () => this.subsector35;
                    break;
                case 36:
                    subsector = () => this.subsector36;
                    break;
                case 37:
                    subsector = () => this.subsector37;
                    break;
                case 38:
                    subsector = () => this.subsector38;
                    break;
                case 39:
                    subsector = () => this.subsector39;
                    break;
                case 40:
                    subsector = () => this.subsector40;
                    break;
                case 41:
                    subsector = () => this.subsector41;
                    break;
                case 42:
                    subsector = () => this.subsector42;
                    break;
                case 43:
                    subsector = () => this.subsector43;
                    break;
                case 44:
                    subsector = () => this.subsector44;
                    break;
                case 45:
                    subsector = () => this.subsector45;
                    break;
                case 46:
                    subsector = () => this.subsector46;
                    break;
                case 47:
                    subsector = () => this.subsector43;
                    break;
                case 48:
                    subsector = () => this.subsector44;
                    break;
                case 49:
                    subsector = () => this.subsector49;
                    break;
                case 50:
                    subsector = () => this.subsector50;
            }
            yield subsector().click();
            yield this.browser.waitAny([(0, common_1.elementIsVisible)(() => this.article), (0, common_1.elementIsVisible)(() => this.noNewsFound)]);
            return this.articlesFoundCount.getText();
        });
    }
    searchNewsBySectors() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sectors.click();
            yield this.oilGas.click();
            yield this.allOilGas.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
            yield this.healthCare.click();
            yield this.allHealthCare.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsByScoutAi() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.scoutAI.click();
            yield this.COVID19General.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsByCountriesRegions() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.countriesRegions.click();
            yield this.china.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsByCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.companiesButton.click();
            yield this.searchCompanies.setValue(selenium_webdriver_1.Key.CONTROL + 'a');
            yield this.searchCompanies.setValue('GOOGLE CLOUD INDIA PRIVATE LIMITED');
            yield this.searchCompanies.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.companyItem));
            yield this.companyItem.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsByKeyword(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.searchNews.setValue(value);
            yield this.searchNews.setValue(selenium_webdriver_1.Key.ENTER);
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsBySourceNikkei() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeFilter.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
            yield this.source.click();
            yield this.newsSource.click();
            yield this.nikkeiAsia.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsBySourceFinancialTimes() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeFilter.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
            yield this.source.click();
            yield this.newsSource.click();
            yield this.financialTimes.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    searchNewsBySourceSouthChinaMorningPost() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeFilter.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
            yield this.source.click();
            yield this.newsSource.click();
            yield this.southChinaMorningPost.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.article));
        });
    }
    goToNewsDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.article.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(newsDetail_1.NewsDetailPage));
        });
    }
    goToFinancialTimesPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.article.click();
        });
    }
    clickRemoveFilter() {
        return __awaiter(this, void 0, void 0, function* () {
            let maxNum = 9;
            while (maxNum--) {
                if (!(yield this.removeFilter.isDisplayed()))
                    return;
                yield this.removeFilter.click();
            }
        });
    }
}
__decorate([
    (0, common_1.findBy)('//div[@id="table_content"]/div/div[1]//a'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "article", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="table_content"]/div/div[1]//p'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "articleDigest", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="table_content"]/div/div[1]/div/div[1]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "articleCreatedAt", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Publication Date"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "publicationData", void 0);
__decorate([
    (0, common_1.findBy)('//li[@style="color: rgb(255, 167, 38);"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "startData", void 0);
__decorate([
    (0, common_1.findBy)('//li[@style="color: rgb(57, 178, 169);"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "endDate", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="savesearch-ARTICLE-button"]'),
    __metadata("design:type", common_1.Button)
], NewsListPage.prototype, "savedNewsButton", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Saved Search"]/li[1]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "firstSavedSearchItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Enter name..."]'),
    __metadata("design:type", common_1.TextInput)
], NewsListPage.prototype, "savedSearchName", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Sectors"]'),
    __metadata("design:type", common_1.Button)
], NewsListPage.prototype, "sectors", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Oil & Gas"]//p[text()="Oil & Gas"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "oilGas", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="All Oil & Gas"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "allOilGas", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Oil & Gas"]/div/span'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "allOilGasCount", void 0);
__decorate([
    (0, common_1.findBy)('//*[text()="Oil & Gas Producers"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "oilGasProducers", void 0);
__decorate([
    (0, common_1.findBy)('//div[@x-placement="right-start"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "submenu", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Source"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "source", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Articles"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "newsSource", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Articles"]//p[text()="Nikkei Asia (Japan)"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "nikkeiAsia", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Articles"]//p[text()="Financial Times (UK)"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "financialTimes", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-sector="Articles"]//p[text()="South China Morning Post (Hong Kong)"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "southChinaMorningPost", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="All Articles"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "allNews", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="ANTARA News (Indonesia)"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "antataNews", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="BERNAMA News (Malaysia)"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "bernamaNews", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="38"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "newsSelected38", void 0);
__decorate([
    (0, common_1.findBy)('//input[@checked and @type="checkbox"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "inputChecked", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="3 selected"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "selectedSectorsOilGas", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Companies"]'),
    __metadata("design:type", common_1.Button)
], NewsListPage.prototype, "companiesButton", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="Find Companies"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "findCompanies", void 0);
__decorate([
    (0, common_1.findBy)('//button/span[text()="No Companies Selected"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "noCompaniesSelected", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Search Companies"]'),
    __metadata("design:type", common_1.TextInput)
], NewsListPage.prototype, "searchCompanies", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="RELIANCE INDUSTRIES LTD"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "relianceIndustriesLTD", void 0);
__decorate([
    (0, common_1.findBy)('//li[contains(@class, "Cal__Day__today")]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "today", void 0);
__decorate([
    (0, common_1.findBy)('//*[contains(text(), "articles found") or contains(text(), "No news found.")]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "articlesFoundCount", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Exchange Filings"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "exchangeFilings", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Opinion & Analysis"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "opinionAnalysis", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Press Releases"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "pressReleases", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Reports"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "reports", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Transcripts"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "transcripts", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Web Content"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "webContent", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="All Exchange Filings"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "allExchangeFilings", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="All Web Content"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "allWebContent", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="Health Care"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "healthCare", void 0);
__decorate([
    (0, common_1.findBy)('//p[text()="All Health Care"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "allHealthCare", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Scout AI"]'),
    __metadata("design:type", common_1.Button)
], NewsListPage.prototype, "scoutAI", void 0);
__decorate([
    (0, common_1.findBy)('//*[text()="COVID-19 General"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "COVID19General", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-context-filter_title="Countries & regions"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "countriesRegions", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable-context-country="CHN"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "china", void 0);
__decorate([
    (0, common_1.findBy)('//div[@data-trackable="find-business-lines-tab"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "companyItem", void 0);
__decorate([
    (0, common_1.findBy)('//input[@placeholder="Search News"]'),
    __metadata("design:type", common_1.TextInput)
], NewsListPage.prototype, "searchNews", void 0);
__decorate([
    (0, common_1.findBy)('//*[contains(text(), "Nikkei Asia") or contains(text(), "Nikkei") ]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "nikkeiAsiaLable", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="table_content"]/div//*[@viewBox="0 0 17 9"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "theLock", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="remove-filter"]'),
    __metadata("design:type", common_1.Button)
], NewsListPage.prototype, "removeFilter", void 0);
__decorate([
    (0, common_1.findBy)('//h6[text()="Please subscribe to read the full article."]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "pleaseSubscribe", void 0);
__decorate([
    (0, common_1.findBy)('//*[text()="No news found."]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "noNewsFound", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[2]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector1", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[3]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector2", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[4]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector3", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[5]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector4", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[6]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector5", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[7]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector6", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[8]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector7", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[9]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector8", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[10]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector9", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[11]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector10", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[12]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector11", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[13]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector12", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[14]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector13", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[15]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector14", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[16]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector15", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[17]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector16", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[18]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector17", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[19]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector18", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[20]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector19", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[21]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector20", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[22]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector21", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[23]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector22", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[24]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector23", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[25]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector24", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[26]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector25", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[27]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector26", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[28]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector27", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[29]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector28", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[30]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector29", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[31]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector30", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[32]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector31", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[33]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector32", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[34]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector33", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[35]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector34", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[36]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector35", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[37]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector36", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[38]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector37", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[39]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector38", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[40]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector39", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[41]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector40", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[42]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector41", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[43]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector42", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[44]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector43", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[45]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector44", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[46]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector45", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[47]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector46", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[48]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector47", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[49]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector48", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[50]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector49", void 0);
__decorate([
    (0, common_1.findBy)('//ul/li[51]/div[@data-trackable="subsector"]'),
    __metadata("design:type", common_1.WebComponent)
], NewsListPage.prototype, "subsector50", void 0);
exports.NewsListPage = NewsListPage;
