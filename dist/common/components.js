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
exports.TextInput = exports.Button = exports.WebComponent = void 0;
class WebComponent {
    constructor(element, selector) {
        this.element = element;
        this.selector = selector;
    }
    click() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.element.click();
            }
            catch (clickErr) {
                try {
                    yield this.element.getDriver().executeScript('arguments[0].click();', this.element);
                }
                catch (jsErr) {
                    throw clickErr;
                }
            }
        });
    }
    isDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.element.isDisplayed();
            }
            catch (ex) {
                return false;
            }
        });
    }
    getText() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.element.getText();
        });
    }
    getCssValue(styleName) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.element.getCssValue(styleName);
        });
    }
}
exports.WebComponent = WebComponent;
class Button extends WebComponent {
    constructor(element, selector) {
        super(element, selector);
    }
    isDisabled() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield this.element.getAttribute('disabled')) === 'disabled';
            }
            catch (ex) {
                return false;
            }
        });
    }
}
exports.Button = Button;
class TextInput extends WebComponent {
    constructor(element, selector) {
        super(element, selector);
    }
    setValue(text) {
        return this.element.sendKeys(text);
    }
}
exports.TextInput = TextInput;
