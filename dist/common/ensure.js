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
exports.ensure = void 0;
const _1 = require(".");
class WebComponentEnsurer {
    constructor(component) {
        this.component = component;
    }
    textIs(expected) {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield this.component.getText();
            if (expected.trim() !== text.trim()) {
                throw new Error(`Element ${this.component.selector} text is '${text}'. Expected value is '${expected}'`);
            }
        });
    }
    isVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield this.component.isDisplayed())) {
                throw new Error(`Element ${this.component.selector} is not visible`);
            }
        });
    }
    isNotVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.component.isDisplayed()) {
                throw new Error(`Element ${this.component.selector} is visible`);
            }
        });
    }
    expectedStyle(styleName, expectedStyle) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentStyle = yield this.component.getCssValue(styleName);
            if (currentStyle.trim() !== expectedStyle.trim()) {
                throw new Error(`Element ${this.component.selector} style is '${currentStyle}'. Expected value is '${expectedStyle}'`);
            }
        });
    }
}
class ButtonEnsurer extends WebComponentEnsurer {
    constructor(button) {
        super(button);
        this.button = button;
    }
    isNotDisabled() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.button.isDisabled()) {
                throw new Error(`Button ${this.button.selector} is disabled`);
            }
        });
    }
}
class TextInputEnsurer extends WebComponentEnsurer {
    constructor(element) {
        super(element);
    }
}
function ensure(component) {
    if (component instanceof _1.Button) {
        return new ButtonEnsurer(component);
    }
    else if (component instanceof _1.WebComponent) {
        return new WebComponentEnsurer(component);
    }
}
exports.ensure = ensure;
