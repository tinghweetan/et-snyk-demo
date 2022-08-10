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
exports.TargetListDetailPage = void 0;
const common_1 = require("../../common");
const config_1 = require("../../config");
const companyDetail_1 = require("./companyDetail");
class TargetListDetailPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(`${config_1.config.publicUrl}`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.companies);
    }
    goToCompanyDetailFromTargetDetail() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.waitAny([
                (0, common_1.elementIsVisible)(() => this.firstCompanyLink), (0, common_1.elementIsVisible)(() => this.article),
            ]);
            const companyLinkIsDisplayed = yield this.firstCompanyItemLink.isDisplayed();
            if (!companyLinkIsDisplayed)
                yield this.companies.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstCompanyLink));
            yield this.firstCompanyLink.click();
            yield this.browser.wait((0, common_1.pageHasLoaded)(companyDetail_1.CompanyDetailPage));
        });
    }
    checkAlerts() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.alerts.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.onsite));
            let isDisplayed = false;
            isDisplayed = yield this.onsite.isDisplayed();
            isDisplayed = yield this.emailDigest.isDisplayed();
            return isDisplayed;
        });
    }
    hasViewAlerts() {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = yield this.viewAlerts.isDisplayed();
            return isDisplayed;
        });
    }
}
__decorate([
    (0, common_1.findBy)('//table[@aria-label="data table"]//tbody/tr//a'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "firstCompanyLink", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="target-list-head"][1]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "renameList", void 0);
__decorate([
    (0, common_1.findBy)('//input[@maxlength="48"]'),
    __metadata("design:type", common_1.TextInput)
], TargetListDetailPage.prototype, "renameInput", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="rename-button"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "renameConfirmButton", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="delete-target-list"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "deleteList", void 0);
__decorate([
    (0, common_1.findBy)('//*[@fill="#EB1730"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "redIconOnTargetListButton", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="targets-drawer"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "closeTargetList", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="Onsite"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "onSiteToggle", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="delete-target-list"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "deleteTargetListButton", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="delete-target-list-modal-confirm"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "deleteTargetListConfirmButton", void 0);
__decorate([
    (0, common_1.findBy)('//button[@aria-controls="simple-tabpanel-0"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "companiesButton", void 0);
__decorate([
    (0, common_1.findBy)('//button[@aria-controls="simple-tabpanel-1"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "newsButton", void 0);
__decorate([
    (0, common_1.findBy)('//a[@data-trackable="article"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "article", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-enhanced-table-checkbox-0"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "firstCompanyItem", void 0);
__decorate([
    (0, common_1.findBy)('//table[@aria-label="data table"]/tbody/tr[1]/th/div[2]/a'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "firstCompanyItemLink", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="remove-companies-button"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "removeCompaniesButton", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="simple-tab-0"]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "companies", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="target-list-head"][2]'),
    __metadata("design:type", common_1.Button)
], TargetListDetailPage.prototype, "alerts", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="Onsite"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "onsite", void 0);
__decorate([
    (0, common_1.findBy)('//span[text()="Email digest"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "emailDigest", void 0);
__decorate([
    (0, common_1.findBy)('//nav[@aria-label="Alerts for Targets"]//span[text()="View Alerts"]'),
    __metadata("design:type", common_1.WebComponent)
], TargetListDetailPage.prototype, "viewAlerts", void 0);
exports.TargetListDetailPage = TargetListDetailPage;
