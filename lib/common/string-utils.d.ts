export declare class StringUtilities {
    /**
     * Searches a string for all matches and replaces them with the replacement text.
     * Returns a new string with the desired result
     * @param target Target string to have item replaced
     * @param search Search text being replaced
     * @param replacement Replacement text
     */
    static replaceAll(target: string, search: string, replacement?: string): string;
    /**
    * Join a series of string separated by define character
    * @param seperator - Separator used to separate list
    * @param items - Items to be joined
    */
    static join(seperator: string, ...items: string[]): string;
    /**
     * Capitalize a given value of text.
     * @param value Value to be capitalize
     */
    static capitalize(value: string): string;
    /**
     * Truncates a string to be shown as an ellipse
     * @param value Value to be truncated
     * @param length Minimum length of the tuncated text to be shown
     * @param showEllipseDots Specifies if to show the ellipose dots
     */
    static ellipse(value: string, length?: number, showEllipseDots?: boolean): string;
    /**
     * Creates an array with unique string values from another array returning the unique array
     * @param array Array to be made unique
     */
    static createUniqueArray(array: string[]): string[];
    /**
     * Pads a string with specified number of characters
     * @param value Value to be padded
     * @param size Number of charcters to pad
     * @param leading Character to pad
     */
    static pad(value: string, size: number, character: string): string;
}
