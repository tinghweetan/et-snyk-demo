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
exports.ConnectsPage = void 0;
const common_1 = require("../../common");
const config_1 = require("../../config");
class ConnectsPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.setUrl(config_1.config.connectsUrl);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.termsOfUse);
    }
    tryFeatureNow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connectionsplus.click();
            yield this.accept.click();
            yield this.tryFeatures.click();
            const originalWindow = yield this.browser.getWindowHandle();
            const windows = yield this.browser.getAllWindowHandles();
            windows.forEach((handle) => __awaiter(this, void 0, void 0, function* () {
                if (handle !== originalWindow) {
                    yield this.browser.close();
                    yield this.browser.window(handle);
                }
            }));
            yield this.browser.wait((0, common_1.elementIsVisible)(() => this.termsOfUse));
        });
    }
}
__decorate([
    (0, common_1.findBy)('//a[@title="Terms of Use"]'),
    __metadata("design:type", common_1.WebComponent)
], ConnectsPage.prototype, "termsOfUse", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable-object-name="connectionsplus"]'),
    __metadata("design:type", common_1.Button)
], ConnectsPage.prototype, "connectionsplus", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="compactCheckbox-termOfUse"]'),
    __metadata("design:type", common_1.Button)
], ConnectsPage.prototype, "accept", void 0);
__decorate([
    (0, common_1.findBy)('//button[@data-trackable="connectsplus_try_features_btn"]'),
    __metadata("design:type", common_1.Button)
], ConnectsPage.prototype, "tryFeatures", void 0);
exports.ConnectsPage = ConnectsPage;
