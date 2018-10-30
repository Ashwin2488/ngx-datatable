"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
exports.MouseEvent = ((typeof window !== 'undefined' && window) || global).MouseEvent;
exports.TouchEvent = ((typeof window !== 'undefined' && window) || global).TouchEvent;
exports.KeyboardEvent = ((typeof window !== 'undefined' && window) || global).KeyboardEvent;
exports.Event = ((typeof window !== 'undefined' && window) || global).Event;
//polyfill for element.closest for ie
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el))
            return null;
        do {
            if (el.matches(s))
                return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}
//# sourceMappingURL=events.js.map