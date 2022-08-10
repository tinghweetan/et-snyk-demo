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
exports.AllPages = exports.ScoutAiLoginPage = void 0;
const loginPage_1 = require("./loginPage");
Object.defineProperty(exports, "ScoutAiLoginPage", { enumerable: true, get: function () { return loginPage_1.ScoutAiSingInPage; } });
const HomePage_1 = require("./public/HomePage");
const targetListDetail_1 = require("./public/targetListDetail");
const newsDetail_1 = require("./public/newsDetail");
const companyDetail_1 = require("./public/companyDetail");
const companyList_1 = require("./public/companyList");
const newsListPage_1 = require("./public/newsListPage");
const connectsPage_1 = require("./public/connectsPage");
const alertSettings_1 = require("./public/alertSettings");
class AllPages {
    constructor(browser) {
        this.browser = browser;
        this.scoutAiLoginPage = new loginPage_1.ScoutAiSingInPage(browser);
        this.homePage = new HomePage_1.HomePage(browser);
        this.targetListDetailPage = new targetListDetail_1.TargetListDetailPage(browser);
        this.newsDetailPage = new newsDetail_1.NewsDetailPage(browser);
        this.companyDetailPage = new companyDetail_1.CompanyDetailPage(browser);
        this.companyListPage = new companyList_1.CompanyListPage(browser);
        this.newsListPage = new newsListPage_1.NewsListPage(browser);
        this.connectsPage = new connectsPage_1.ConnectsPage(browser);
        this.alertSettingsPage = new alertSettings_1.AlertSettingsPage(browser);
    }
    dispose() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.close();
        });
    }
}
exports.AllPages = AllPages;
