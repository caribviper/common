/**
 * Provides methods used throughout the system
 */
export declare class Utilities {
    /**
     * Gets a random identifier based on current time inconjunction with the Math.random method
     */
    static getRandomId(): string;
    /**
     * Gets the property name of the passed property
     * @param property Field/property name to retrieved
     */
    static getPropertyName<TValue>(property: string | ((model: any) => TValue)): string;
    /**
       * Checks to see if a number is numeric
       * @param n - item to be checked
      */
    static isNumberValid(n: number): boolean;
    /**
       * Checks to see if a number is numeric. Uses isNumberValid
       * @param n - item to be checked
      */
    static isNumeric(n: number): boolean;
    /**
     * Checks if the passed item is a function
     * @param {any} x - parameter to be determined if function
     */
    static isFunction(x: any): boolean;
    /**
     * Validates a date
     *@param d - item to be checked
    */
    static isDate(d: any): boolean;
    /**
     * Validates a date range
     * @param start - start date of the date range
     * @param end - ending date of the date range
     */
    static isDateRangeValid(start: Date, end: Date): boolean;
    /**
     * Joins path segments.  Preserves initial "/" and resolves ".." and "."
     * Does not support using ".." to go above/outside the root.
     * This means that join("foo", "../../bar") will not resolve to "../bar"
     * Source: creationix/path.js
     * Link: https://gist.github.com/creationix/7435851#file-path-js
     */
    static join(...paths: any[]): string;
    /**
     * Sorts an array based on the passed properties.
     * Should be used for multiple field sorts.
     * Source: Stackoverflow
     * Link: https://stackoverflow.com/questions/6129952/javascript-sort-array-by-two-fields
     * @param array Array to be sorted
     * @param sortdetails Specifies sort details, which comprises of propertyName and descending
     */
    static sortBy<T>(array: T[], ...sortdetails: {
        propertyName: string;
        descending: boolean;
    }[]): T[];
}
