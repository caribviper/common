"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtilities = /** @class */ (function () {
    function StringUtilities() {
    }
    /**
     * Searches a string for all matches and replaces them with the replacement text.
     * Returns a new string with the desired result
     * @param target Target string to have item replaced
     * @param search Search text being replaced
     * @param replacement Replacement text
     */
    StringUtilities.replaceAll = function (target, search, replacement) {
        if (replacement === void 0) { replacement = ''; }
        if (!!target)
            return target.replace(new RegExp(search, 'g'), replacement);
        return '';
    };
    /**
    * Join a series of string separated by define character
    * @param seperator - Separator used to separate list
    * @param items - Items to be joined
    */
    StringUtilities.join = function (seperator) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        if (!items || items.length === 0)
            return '';
        return items.join(seperator);
    };
    /**
     * Capitalize a given value of text.
     * @param value Value to be capitalize
     */
    StringUtilities.capitalize = function (value) {
        if (value && typeof value === 'string') {
            value = value.toLowerCase();
            return value.replace(/\b\w/g, function (m) { return m.toUpperCase(); });
        }
        return value;
    };
    /**
     * Truncates a string to be shown as an ellipse
     * @param value Value to be truncated
     * @param length Minimum length of the tuncated text to be shown
     * @param showEllipseDots Specifies if to show the ellipose dots
     */
    StringUtilities.ellipse = function (value, length, showEllipseDots) {
        if (length === void 0) { length = 10; }
        if (showEllipseDots === void 0) { showEllipseDots = true; }
        if (value && typeof value === 'string') {
            var ellipseDots = showEllipseDots ? '...' : '';
            return value.length > length ? value.substring(0, length) + ellipseDots : value;
        }
        return value;
    };
    /**
     * Creates an array with unique string values from another array returning the unique array
     * @param array Array to be made unique
     */
    StringUtilities.createUniqueArray = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i] === a[j])
                    a.splice(j--, 1);
            }
        }
        return a;
    };
    /**
     * Pads a string with specified number of characters
     * @param value Value to be padded
     * @param size Number of charcters to pad
     * @param leading Character to pad
     */
    StringUtilities.prototype.pad = function (value, size, character) {
        while (value.length < (size || 2)) {
            value = character + value;
        }
        return value;
    };
    return StringUtilities;
}());
exports.StringUtilities = StringUtilities;
