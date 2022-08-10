"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.findBy = exports.delay = void 0;
require("reflect-metadata");
const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
exports.delay = delay;
function findBy(selector) {
    return (target, propertyKey) => {
        const type = Reflect.getMetadata('design:type', target, propertyKey);
        Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            get: function () {
                const promise = this.browser.findElement(selector);
                return new type(promise, selector);
            },
        });
    };
}
exports.findBy = findBy;
const random = () => {
    return Math.round(Math.random() * 10000);
};
exports.random = random;
