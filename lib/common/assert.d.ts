export declare class Assert {
    /**
     * Asserts whether the value passed is true
     * @param value Value to be evaluated
     * @param message Error message to be generated
     * @param title Title/Category of error
     */
    static isTrue(value: boolean, message: string, title?: string): void;
    /**
     * Asserts whether the value passed is false
     * @param value Value to be evaluated
     * @param message Error message to be generated
     * @param title Title/Category of error
     */
    static isFalse(value: boolean, message: string, title?: string): void;
    /**
     * Asserts whether the value is not false/undefined
     * @param value Value to be evaluated
     * @param message Error message to be generated
     * @param title Title/Category of error
     */
    static isTruthy(value: any, message: string, title?: string): void;
    /**
     * Asserts whether the value passed is falsey or undefined
     * @param value Value to be evaluated
     * @param message Error message to be generated
     * @param title Title/Category of error
     */
    static isFalsey(value: any, message: string, title?: string): void;
    /**
     * Asserts whether the value passed is a non empty array
     * @param value Value to be evaluated
     * @param message Error message to be generated
     * @param title Title/Category of error
     */
    static isNonEmptyArray(value: any[], message: string, title?: string): void;
}
