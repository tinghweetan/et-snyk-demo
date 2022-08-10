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
exports.ScoutAiSingInPage = void 0;
const common_1 = require("../common");
const HomePage_1 = require("./public/HomePage");
const config_1 = require("../config");
const local_config_1 = require("../local-config");
class ScoutAiSingInPage extends common_1.Page {
    constructor(browser) {
        super(browser);
        this.userName = local_config_1.publicUser.userName;
        this.userPassword = local_config_1.publicUser.userPassword;
        this.setUrl(`${config_1.config.publicUrl}`);
    }
    loadCondition() {
        return (0, common_1.elementIsVisible)(() => this.email);
    }
    signIn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.signInAs(this.userName, this.userPassword, true);
        });
    }
    signInError(user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.signInAs(user, password, false);
        });
    }
    signInAs(email, password, isCorrect = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.email.setValue(email);
            yield this.password.setValue(password);
            yield this.singIn.click();
            isCorrect && (yield this.browser.wait((0, common_1.pageHasLoaded)(HomePage_1.HomePage)));
        });
    }
}
__decorate([
    (0, common_1.findBy)('//input[@id="LoginUserName"]'),
    __metadata("design:type", common_1.TextInput)
], ScoutAiSingInPage.prototype, "email", void 0);
__decorate([
    (0, common_1.findBy)('//input[@id="LoginPassword"]'),
    __metadata("design:type", common_1.TextInput)
], ScoutAiSingInPage.prototype, "password", void 0);
__decorate([
    (0, common_1.findBy)('//button[@id="SigninButton"]'),
    __metadata("design:type", common_1.Button)
], ScoutAiSingInPage.prototype, "singIn", void 0);
__decorate([
    (0, common_1.findBy)('//div[@class="login-error"]/div'),
    __metadata("design:type", common_1.WebComponent)
], ScoutAiSingInPage.prototype, "loginErrorText", void 0);
__decorate([
    (0, common_1.findBy)('//*[@class="show-password-icon"]'),
    __metadata("design:type", common_1.WebComponent)
], ScoutAiSingInPage.prototype, "eyeIcon", void 0);
exports.ScoutAiSingInPage = ScoutAiSingInPage;
