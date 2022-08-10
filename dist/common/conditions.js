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
exports.pageHasLoaded = exports.elementIsPresent = exports.elementIsVisible = void 0;
function elementIsVisible(locator) {
    return () => __awaiter(this, void 0, void 0, function* () { return yield locator().isDisplayed(); });
}
exports.elementIsVisible = elementIsVisible;
function elementIsPresent(locator) {
    return () => __awaiter(this, void 0, void 0, function* () { return (yield locator()) !== undefined; });
}
exports.elementIsPresent = elementIsPresent;
function pageHasLoaded(page) {
    return (browser) => {
        const condition = new page(browser).loadCondition();
        return condition(browser);
    };
}
exports.pageHasLoaded = pageHasLoaded;
