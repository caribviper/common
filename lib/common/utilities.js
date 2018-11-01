"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Provides methods used throughout the system
 */
var Utilities = /** @class */ (function () {
    function Utilities() {
    }
    /**
     * Gets a random identifier based on current time inconjunction with the Math.random method
     */
    Utilities.getRandomId = function () {
        return "" + Date.now().toString() + Math.floor((Math.random() * 10000000000000000));
    };
    /**
     * Gets the property name of the passed property
     * @param property Field/property name to retrieved
     */
    Utilities.getPropertyName = function (property) {
        if (typeof property === 'string')
            return property;
        var name = property.toString();
        var start = name.indexOf('.');
        var end = name.length;
        if (start > -1 && end > 0)
            return name.substring(start + 1, end);
        return '';
    };
    /**
       * Checks to see if a number is numeric
       * @param n - item to be checked
      */
    Utilities.isNumberValid = function (n) { return typeof n === 'number' && !isNaN(n) && isFinite(n); };
    /**
       * Checks to see if a number is numeric. Uses isNumberValid
       * @param n - item to be checked
      */
    Utilities.isNumeric = function (n) { return this.isNumberValid(n); };
    /**
     * Checks if the passed item is a function
     * @param {any} x - parameter to be determined if function
     */
    Utilities.isFunction = function (x) {
        if (!x)
            return false;
        return Object.prototype.toString.call(x) === '[object Function]';
    };
    /**
     * Validates a date
     *@param d - item to be checked
    */
    Utilities.isDate = function (d) {
        //checks to ensure it is a date object && //checks for a valid date
        return (Object.prototype.toString.call(d) === '[object Date]')
            && (!isNaN(d.getTime()));
    };
    /**
     * Validates a date range
     * @param start - start date of the date range
     * @param end - ending date of the date range
     */
    Utilities.isDateRangeValid = function (start, end) {
        //check dates
        if (this.isDate(start) && this.isDate(end) && (start.getTime() <= end.getTime())) {
            return true;
        }
        return false;
    };
    /**
     * Joins path segments.  Preserves initial "/" and resolves ".." and "."
     * Does not support using ".." to go above/outside the root.
     * This means that join("foo", "../../bar") will not resolve to "../bar"
     * Source: creationix/path.js
     * Link: https://gist.github.com/creationix/7435851#file-path-js
     */
    Utilities.join = function () {
        var paths = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            paths[_i] = arguments[_i];
        }
        // Split the inputs into a list of path commands.
        var parts = [];
        for (var i = 0, l = paths.length; i < l; i++) {
            //added numeric checking
            if (!isNaN(parseFloat(paths[i])) && isFinite(paths[i])) { //check for numbers
                parts.push(paths[i]);
            }
            else {
                parts = parts.concat(paths[i].split('/'));
            }
        }
        // Interpret the path commands to get the new resolved path.
        var newParts = [];
        for (var i = 0, l = parts.length; i < l; i++) {
            var part = parts[i];
            // Remove leading and trailing slashes
            // Also remove "." segments
            if (!part || part === '.')
                continue;
            // Interpret ".." to pop the last segment
            if (part === '..')
                newParts.pop();
            // Push new path segments.
            else
                newParts.push(part);
        }
        // Preserve the initial slash if there was one.
        if (parts[0] === '')
            newParts.unshift('');
        // Turn back into a single string path.
        return newParts.join('/') || (newParts.length ? '/' : '.');
    };
    /**
     * Sorts an array based on the passed properties.
     * Should be used for multiple field sorts.
     * Source: Stackoverflow
     * Link: https://stackoverflow.com/questions/6129952/javascript-sort-array-by-two-fields
     * @param array Array to be sorted
     * @param sortdetails Specifies sort details, which comprises of propertyName and descending
     */
    Utilities.sortBy = function (array) {
        var sortdetails = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sortdetails[_i - 1] = arguments[_i];
        }
        var sortArguments = arguments;
        return array.sort(function (objA, objB) {
            var result = 0;
            for (var argIndex = 0; argIndex < sortdetails.length && result === 0; argIndex += 2) {
                var propertyName = sortdetails[argIndex].propertyName;
                result = (objA[propertyName] < objB[propertyName]) ? -1 : (objA[propertyName] > objB[propertyName]) ? 1 : 0;
                //Reverse if sort order is false (DESC)
                result *= !sortdetails[argIndex].descending ? 1 : -1;
            }
            return result;
        });
    };
    return Utilities;
}());
exports.Utilities = Utilities;
