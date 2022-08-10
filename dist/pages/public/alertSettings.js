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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertSettingsPage = void 0;
const common_1 = require("../../common");
const config_1 = require("../../config");
class AlertSettingsPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(`${config_1.config.publicUrl}/alerts/scout-ai`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.loadScoutAI);
    }
    deleteAllTargetList() {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield this.targetList.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.deleteTargetListItem));
            const deleteTargetListItems = yield this.browser.findElements(this.deleteTargetListItem.selector);
            try {
                for (var deleteTargetListItems_1 = __asyncValues(deleteTargetListItems), deleteTargetListItems_1_1; deleteTargetListItems_1_1 = yield deleteTargetListItems_1.next(), !deleteTargetListItems_1_1.done;) {
                    const deleteTargetListItem = deleteTargetListItems_1_1.value;
                    yield deleteTargetListItem.click();
                    yield this.deleteTargetListItemConfirm.click();
                    yield (0, common_1.delay)(2000);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (deleteTargetListItems_1_1 && !deleteTargetListItems_1_1.done && (_a = deleteTargetListItems_1.return)) yield _a.call(deleteTargetListItems_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.notHaveTargetList));
        });
    }
    switchSavedSearchTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.savedSearch.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstSavedSearchItem));
        });
    }
    switchTargetListTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.targetList.click();
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.firstTargetListItem));
        });
    }
    deleteFirstTargetListItem() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteSearchItem.click();
            yield this.deleteSavedConfirm.click();
            yield (0, common_1.delay)(3000);
            return yield this.getFirstItemName();
        });
    }
    deleteSavedSearchItem() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteSearchItem.click();
            yield this.deleteSavedConfirm.click();
            yield (0, common_1.delay)(3000);
            return yield this.getFirstItemName();
        });
    }
    deleteSavedSearchItems(remain) {
        return __awaiter(this, void 0, void 0, function* () {
            const trashbins = yield this.browser.findElements(this.trashbin.selector);
            const loop = () => __awaiter(this, void 0, void 0, function* () {
                for (const trashbin of trashbins.slice(0, remain !== null && remain !== void 0 ? remain : -5)) {
                    yield trashbin.click();
                    yield this.deleteSavedConfirm.click();
                    yield (0, common_1.delay)(4000);
                }
            });
            loop();
        });
    }
    getFirstItemName() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.firstSavedSearchItemLink.getText();
        });
    }
    changeOnSiteAndEmailDigest() {
        var e_2, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const firstSavedSearchCheckList = yield this.browser.findElements(this.firstSavedSearchCheck.selector);
            try {
                for (var firstSavedSearchCheckList_1 = __asyncValues(firstSavedSearchCheckList), firstSavedSearchCheckList_1_1; firstSavedSearchCheckList_1_1 = yield firstSavedSearchCheckList_1.next(), !firstSavedSearchCheckList_1_1.done;) {
                    const item = firstSavedSearchCheckList_1_1.value;
                    yield item.click();
                    yield (0, common_1.delay)(2000);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (firstSavedSearchCheckList_1_1 && !firstSavedSearchCheckList_1_1.done && (_a = firstSavedSearchCheckList_1.return)) yield _a.call(firstSavedSearchCheckList_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        });
    }
    changeTargetListOnSiteAndEmailDigest() {
        var e_3, _a;
        return __awaiter(this, void 0, void 0, function* () {
            const firstTargetCheckList = yield this.browser.findElements(this.firstTargetCheck.selector);
            try {
                for (var firstTargetCheckList_1 = __asyncValues(firstTargetCheckList), firstTargetCheckList_1_1; firstTargetCheckList_1_1 = yield firstTargetCheckList_1.next(), !firstTargetCheckList_1_1.done;) {
                    const item = firstTargetCheckList_1_1.value;
                    yield item.click();
                    yield (0, common_1.delay)(2000);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (firstTargetCheckList_1_1 && !firstTargetCheckList_1_1.done && (_a = firstTargetCheckList_1.return)) yield _a.call(firstTargetCheckList_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        });
    }
}
__decorate([
    (0, common_1.findBy)('//ul[@aria-labelledby="list-subheader"]/li[1]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "loadScoutAI", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-alert-settings-tab--2"]'),
    __metadata("design:type", common_1.Button)
], AlertSettingsPage.prototype, "targetList", void 0);
__decorate([
    (0, common_1.findBy)('//ul[@aria-labelledby="list-subheader"]/li[1]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "firstTargetListItem", void 0);
__decorate([
    (0, common_1.findBy)('//ul[@aria-labelledby="list-subheader"]/li//button[contains(@data-trackable, "delete-alerts-item-targetList")]'),
    __metadata("design:type", common_1.Button)
], AlertSettingsPage.prototype, "deleteTargetListItem", void 0);
__decorate([
    (0, common_1.findBy)(`//h5[text()="You haven't created any Target Lists yet."]`),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "notHaveTargetList", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="delete-Target List-modal-confirm"]'),
    __metadata("design:type", common_1.Button)
], AlertSettingsPage.prototype, "deleteTargetListItemConfirm", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="hs-alert-settings-tab--1"]'),
    __metadata("design:type", common_1.Button)
], AlertSettingsPage.prototype, "savedSearch", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "firstSavedSearchItem", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li//button[contains(@data-trackable, "delete-alerts-item")]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "trashbin", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]//button[contains(@data-trackable, "delete-alerts-item")]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "deleteSearchItem", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="delete-Saved Search-modal-confirm"]'),
    __metadata("design:type", common_1.Button)
], AlertSettingsPage.prototype, "deleteSavedConfirm", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]//a'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "firstSavedSearchItemLink", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-alert-settings-tab-panel--1"]//ul/li[1]//button[@aria-label="checkbox"]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "firstSavedSearchCheck", void 0);
__decorate([
    (0, common_1.findBy)('//div[@id="hs-alert-settings-tab-panel--2"]//ul/li[1]//button[@aria-label="checkbox"]'),
    __metadata("design:type", common_1.WebComponent)
], AlertSettingsPage.prototype, "firstTargetCheck", void 0);
exports.AlertSettingsPage = AlertSettingsPage;
