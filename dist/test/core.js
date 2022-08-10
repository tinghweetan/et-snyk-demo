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
const common_1 = require("../common");
const pages_1 = require("../pages");
const chai_1 = require("chai");
describe('Flash Test Core', () => {
    let pages;
    before(() => __awaiter(void 0, void 0, void 0, function* () {
        pages = new pages_1.AllPages(new common_1.Browser('chrome'));
    }));
    it('Log in App.scoutAi system', () => __awaiter(void 0, void 0, void 0, function* () {
        yield pages.scoutAiLoginPage.navigate();
        yield pages.scoutAiLoginPage.signIn();
    }));
    describe('Company Search 1', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Search companies by "Sectors"', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.openCompanySectors();
            yield pages.companyListPage.selectAllOilGasOnSectors();
            yield pages.companyListPage.selectAllBasicMaterialsOnSectors();
            yield pages.companyListPage.selectAllIndustrialsOnSectors();
            yield pages.companyListPage.selectAllConsumerGoodsOnSectors();
            yield pages.companyListPage.selectAllHealthCareOnSectors();
            yield pages.companyListPage.selectAllSocialGovernmentOnSectors();
            yield pages.companyListPage.selectAllConsumerServicesOnSectors();
            yield pages.companyListPage.selectAllTelecommunicationOnSectors();
            yield pages.companyListPage.selectAllUtilitiesOnSectors();
            yield pages.companyListPage.selectAllFinancialsOnSectors();
            yield pages.companyListPage.selectAllTechnologyOnSectors();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.sectorsSelected).textIs('41 selected')
            ]);
        }));
        it('Search companies by "Business Lines"', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.selectBusinessLines();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Search companies by "Countries & regions"', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.selectCountriesRegions();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Search companies by "Financials"', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.selectFinancials();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Search companies by "Ownership"', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.selectOwnership();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Search companies by "No. Employees"', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.selectNoEmployees();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Save the search', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.saveCompanySearch();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstSavedSearchItem).isVisible()
            ]);
        }));
        it('Add one company to a new target list', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.addCompanyToNewTargetList();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
    }));
    describe('Company Search 2', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Filter a specific Sector on company', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.openCompanySectors();
            yield pages.companyListPage.selectSpecificOnSectors();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Filter a specific Business Line', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchBusinessLineAndSelectSpecific();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Filter multiple Business Lines & Sectors', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.openCompanySectors();
            yield pages.companyListPage.selectSpecificOnSectors();
            yield pages.companyListPage.selectSpecificOnBusinessLines();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
    }));
    describe('Company Search 3', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Select multiple values in a single filter', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.selectCountriesRegions();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Save the search', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.saveCompanySearch();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstSavedSearchItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Add multiple companies to existing target lists', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.addMultipleCompaniesToExistingTargetList();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstTargetsItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
    }));
    describe('Company Search 4', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Open and run a saved search', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.openSavedSearch();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Check the company search table values match the company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.companiesFound).isVisible()
            ]);
        }));
    }));
    describe('Company Search 5', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Use financial filters', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.useFinancialFilters();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Find a company making a loss', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.findCompanyIsLoss();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
    }));
    describe('Intro Tool Tip', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Delete all targets list on alert setting.', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.alertSettingsPage.navigate();
            yield pages.alertSettingsPage.deleteAllTargetList();
            yield Promise.all([
                (0, common_1.ensure)(pages.alertSettingsPage.notHaveTargetList).isVisible()
            ]);
        }));
        it('Check behaviour of tool tip - first use', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.homePage.navigate();
            const isValid = yield pages.homePage.checkBehaviourOfToolTip();
            (0, chai_1.expect)(isValid).to.be.true;
        }));
    }));
    describe('News Search 1', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search news page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.switchSearchNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.article).isVisible()
            ]);
        }));
        it('Use the "Publication Date" filters', () => __awaiter(void 0, void 0, void 0, function* () {
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsByPublicationDate();
            (0, chai_1.expect)(count).to.not.equal(result);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Use the "Source" filters', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.newsListPage.navigate();
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsBySource();
            const digestLength = (yield pages.newsListPage.articleDigest.getText()).length;
            (0, chai_1.expect)(count).to.not.equal(result);
            (0, chai_1.expect)(digestLength).to.not.equal(0);
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.articleCreatedAt).expectedStyle('font-size', '12px'),
                (0, common_1.ensure)(pages.newsListPage.articleCreatedAt).expectedStyle('font-family', 'MetricWeb, sans-serif'),
                (0, common_1.ensure)(pages.newsListPage.articleCreatedAt).expectedStyle('font-weight', '400'),
                (0, common_1.ensure)(pages.newsListPage.articleCreatedAt).expectedStyle('text-transform', 'uppercase'),
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Use the "Sectors" filters', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.articlesFoundCount.isDisplayed();
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsBySectors();
            (0, chai_1.expect)(count).to.not.equal(result);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Use the "Scout Ai" filters', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.articlesFoundCount.isDisplayed();
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            yield pages.newsListPage.clickRemoveFilter();
            const result = yield pages.newsListPage.searchNewsByScoutAi();
            (0, chai_1.expect)(count).to.not.equal(result);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Use the "Countries & regions" filters', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.articlesFoundCount.isDisplayed();
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsByCountriesRegions();
            (0, chai_1.expect)(count).to.not.equal(result);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Use the "Companies" filters', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.newsListPage.navigate();
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsByCompanies();
            (0, chai_1.expect)(count).to.not.equal(result);
            yield pages.newsListPage.clickRemoveFilter();
        }));
    }));
    describe('News Search 2', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search news page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.switchSearchNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.article).isVisible()
            ]);
        }));
        it('Select multiple values in a filter', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsBySectors();
            (0, chai_1.expect)(count).to.not.equal(result);
            yield pages.newsListPage.clickRemoveFilter();
        }));
    }));
    describe('News Search 3', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search news page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.switchSearchNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.article).isVisible()
            ]);
        }));
        it('Search for a company as a keyword', () => __awaiter(void 0, void 0, void 0, function* () {
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsByKeyword('NIKKEI ASIA');
            (0, chai_1.expect)(count).to.be.not.equal(result);
        }));
        it('Search for the company in mentions', () => __awaiter(void 0, void 0, void 0, function* () {
            const count = yield pages.newsListPage.articlesFoundCount.getText();
            const result = yield pages.newsListPage.searchNewsByCompanies();
            (0, chai_1.expect)(count).to.be.not.equal(result);
        }));
    }));
    describe('Sector Pages', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Go to search company page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompaniesItem).isVisible()
            ]);
        }));
        it('Navigate to and back from a company', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.openCompanySectors();
            yield pages.companyListPage.selectSpecificOnSectors();
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.backToResult();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstCompanyLink).isVisible()
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Add company to a target list', () => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, common_1.delay)(1000);
            yield pages.companyListPage.addCompanyToTargetList();
            yield (0, common_1.delay)(1000);
            yield Promise.all([
                (0, common_1.ensure)(pages.companyListPage.firstTargetsItem).isVisible()
            ]);
        }));
        it('Find and open a sector report');
    }));
    describe('Target Lists 1', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Open a target list and open a company from the list', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.homePage.navigate();
            yield pages.homePage.goToTargetDetail();
            yield pages.targetListDetailPage.goToCompanyDetailFromTargetDetail();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.description).isVisible()
            ]);
        }));
        it('Check for news notifications on your target list', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Huawei');
            const isDisplayedTargets = yield pages.companyListPage.addFirstPageCompaniesToTargetList();
            yield pages.homePage.navigate();
            yield pages.homePage.goToTargetDetail();
            const isDisplayedAlert = yield pages.targetListDetailPage.checkAlerts();
            const isDisplayedViewAlerts = yield pages.targetListDetailPage.hasViewAlerts();
            (0, chai_1.expect)(isDisplayedTargets).to.be.true;
            (0, chai_1.expect)(isDisplayedAlert).to.be.true;
            (0, chai_1.expect)(isDisplayedViewAlerts).to.be.true;
        }));
    }));
    describe('Target Lists 2', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Add target list to email notifications');
        it('Check email digest reconciles to on-site notifications');
    }));
    describe('Email Digest', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Open an article from the digest email');
        it('Open a company mentioned in the digest/ articles');
    }));
    describe('Check Download report', () => __awaiter(void 0, void 0, void 0, function* () {
        it('add a check to look at one counrty (singapore or japan) and download one EMIS and one ASHU report');
    }));
    describe('Company Page 1', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Samsung Electronics Co Ltd. I should not see the currency display in USD $0.00 & KRW W0.', () => __awaiter(void 0, void 0, void 0, function* () {
            const samsungURI = '1fe25e84-27a9-591c-a9ff-216d4294c39b';
            yield pages.companyListPage.goToCompanyDetail(samsungURI);
            const usdMarketCap = yield pages.companyDetailPage.marketCap.getText();
            const usdNumberPart = usdMarketCap.slice(1, -1);
            (0, chai_1.expect)(usdNumberPart).to.not.equal('0.00');
            yield pages.companyDetailPage.krw.click();
            const krwMarketCap = yield pages.companyDetailPage.marketCap.getText();
            const krwNumberPart = krwMarketCap.slice(1, -1);
            (0, chai_1.expect)(krwNumberPart).to.not.equal('0.00');
        }));
        it('Toyota Motor Corp. I should not see the currency display in USD $0.00 & JPY W0.', () => __awaiter(void 0, void 0, void 0, function* () {
            const toyotaURI = '2c5d7d53-2174-516f-b811-1239b2a37e39';
            yield pages.companyListPage.goToCompanyDetail(toyotaURI);
            const usdMarketCap = yield pages.companyDetailPage.marketCap.getText();
            const usdNumberPart = usdMarketCap.slice(1, -1);
            (0, chai_1.expect)(usdNumberPart).to.not.equal('0.00');
            yield pages.companyDetailPage.jpy.click();
            const jpyMarketCap = yield pages.companyDetailPage.marketCap.getText();
            const jpyNumberPart = jpyMarketCap.slice(1, -1);
            (0, chai_1.expect)(jpyNumberPart).to.not.equal('0.00');
            yield pages.newsListPage.clickRemoveFilter();
        }));
        it('Check info bar, basic financials & Company news for', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.firstCompaniesItem).isVisible(),
            ]);
        }));
        it('BvD company (e.g.: The Government Of The Hong Kong Special Administrative Region)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('The Government Of The Hong Kong Special Administrative Region');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.awaitNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.companyNews).isVisible(),
            ]);
        }));
        it('Creditsafe company (Toyota Finance Corporation)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Toyota Finance Corporation');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.awaitNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.companyNews).isVisible(),
            ]);
        }));
        it('Factset company (Mitsui & Co Ltd)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Mitsui & Co Ltd');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.awaitNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.companyNews).isVisible(),
            ]);
        }));
        it('Venture Intelligence (Tamilnadu Generation And Distribution Corporation Limited)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Tamilnadu Generation And Distribution Corporation Limited');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.awaitNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.companyNews).isVisible(),
            ]);
            yield pages.newsListPage.clickRemoveFilter();
        }));
    }));
    describe('Company Page 2', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Check Graph & Detailed Financials for, each currency for', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.firstCompaniesItem).isVisible(),
            ]);
        }));
        it('Japanese Listed company (Toyota Corp)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Toyota Corp');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.switchCurrencyByJPY();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.jpyUnit).isVisible(),
            ]);
        }));
        it('Listed Company - (Factset concorded e.g Tata Steel or Tencent)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Tata Steel');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.switchCurrencyByINR();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.inrUnit).isVisible(),
            ]);
        }));
        it('Venture Intelligence Concorded Company (e.g State Bank Of India)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('State Bank Of India');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.switchCurrencyByINR();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.financialTable).isVisible(),
                (0, common_1.ensure)(pages.companyDetailPage.inrUnit).isVisible(),
            ]);
        }));
    }));
    describe('Company Page 3', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Check News Mentions Graph for default, YTD, Max', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('State Bank Of India');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.switchNewsChartDate();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.newsMentions).isVisible(),
            ]);
        }));
    }));
    describe('Company Page News 1', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Check a company that has news directly about itself - and that it is mentioned in the article(s)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Huawei');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.viewAllNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.article).isVisible()
            ]);
        }));
    }));
    describe('Company Page News 2', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Check a subsidiary company that has news about its Group - and that it is mentioned in the article(s)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Walt Disney Company (southeast Asia) Pte. Limited');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.goToNewsDetail();
            yield Promise.all([
                (0, common_1.ensure)(yield pages.newsDetailPage.menitons()).isVisible()
            ]);
        }));
    }));
    describe('Article Page', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Check mentions, source data, copyright line.', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.article).isVisible()
            ]);
        }));
        it('NAR articles (Nikkei Asia)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.searchNewsBySourceNikkei();
            yield pages.newsListPage.goToNewsDetail();
            yield Promise.all([
                (0, common_1.ensure)(yield pages.newsDetailPage.getNikkeiASIA()).isVisible()
            ]);
        }));
        it('FT articles - locked and unlocked', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.searchNewsBySourceFinancialTimes();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.theLock).isVisible()
            ]);
        }));
        it('Telecom articles from multiple publishers - South China Morning Post', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.searchNewsBySourceSouthChinaMorningPost();
            yield pages.newsListPage.goToNewsDetail();
            yield Promise.all([
                (0, common_1.ensure)(yield pages.newsDetailPage.getSouthChinaMorningPost()).isVisible()
            ]);
        }));
    }));
    describe('News - open article page', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Check that a locked FT article opens in a new tab', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.searchNewsBySourceFinancialTimes();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsListPage.theLock).isVisible()
            ]);
        }));
        it('Check that an unlocked FT article opens within the scout app', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.switchSearchNews();
            yield pages.newsListPage.searchNewsBySourceFinancialTimes();
            yield pages.newsListPage.searchNewsByKeyword('Chinese entertainment stocks: ban on celebrity ranking leaves fan culture idle');
            yield pages.newsListPage.goToNewsDetail();
            yield Promise.all([
                (0, common_1.ensure)(pages.newsDetailPage.newsTitle).isVisible()
            ]);
        }));
    }));
    describe('Connection Map 1', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Open the connection map from a Japanese listed company page (Honda Motor Co Ltd)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Honda Motor Co Ltd');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.goToConnections();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.operationalStructure).isVisible()
            ]);
        }));
        it('Navigate to the company details page of a subsidiary');
    }));
    describe('Connection Map 2', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Open the connection map from a concorded company page (e.g Pertamina, pt (persero)', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.searchCompaniesByKeyword('Pertamina, pt (persero)');
            yield pages.companyListPage.goToCompanyDetail();
            yield pages.companyDetailPage.goToConnections();
            yield Promise.all([
                (0, common_1.ensure)(pages.companyDetailPage.operationalStructure).isVisible()
            ]);
        }));
        it('Within the above connection map, navigate to the company details page of a parent/ ultimate parent');
    }));
    describe('Alerts page', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Navigate to and open alerts setting page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.alertSettingsPage.navigate();
            yield Promise.all([
                (0, common_1.ensure)(pages.alertSettingsPage.loadScoutAI).isVisible()
            ]);
        }));
        it('Delete a Saved Search', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.alertSettingsPage.switchSavedSearchTab();
            const startName = yield pages.alertSettingsPage.getFirstItemName();
            const endName = yield pages.alertSettingsPage.deleteSavedSearchItem();
            (0, chai_1.expect)(startName).to.be.not.equal(endName);
        }));
        it('Turn on site alerts and email alerts on and off for a Saved Search', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.alertSettingsPage.changeOnSiteAndEmailDigest();
        }));
        it('Delete a Target List', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.addFirstPageCompaniesToTargetList();
            yield pages.alertSettingsPage.navigate();
            yield pages.alertSettingsPage.switchTargetListTab();
            yield pages.alertSettingsPage.deleteAllTargetList();
            yield Promise.all([
                (0, common_1.ensure)(pages.alertSettingsPage.notHaveTargetList).isVisible()
            ]);
        }));
        it('Turn on site alerts and email alerts on and off for a Target List', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.companyListPage.navigate();
            yield pages.companyListPage.addFirstPageCompaniesToTargetList();
            yield pages.alertSettingsPage.navigate();
            yield pages.alertSettingsPage.switchTargetListTab();
            yield pages.alertSettingsPage.changeTargetListOnSiteAndEmailDigest();
        }));
    }));
    describe('Connections+', () => __awaiter(void 0, void 0, void 0, function* () {
        it('Open the connections+ page and logout.', () => __awaiter(void 0, void 0, void 0, function* () {
            yield pages.homePage.navigate();
            yield pages.homePage.goToConnectionsPlus();
            yield pages.homePage.logout();
            yield Promise.all([
                (0, common_1.ensure)(pages.scoutAiLoginPage.email).isVisible()
            ]);
        }));
    }));
    after(() => __awaiter(void 0, void 0, void 0, function* () {
        yield pages.dispose();
    }));
});
