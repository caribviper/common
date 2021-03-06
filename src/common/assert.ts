export class Assert {
  /**
   * Asserts whether the value passed is true
   * @param value Value to be evaluated
   * @param message Error message to be generated
   * @param title Title/Category of error
   */
  public static isTrue(value: boolean, message: string, title: string = '') {
    if (value !== true)
      throw !!title ? `${title}: ${message}` : message;
  }

  /**
   * Asserts whether the value passed is false
   * @param value Value to be evaluated
   * @param message Error message to be generated
   * @param title Title/Category of error
   */
  public static isFalse(value: boolean, message: string, title: string = '') {
    if (value !== false)
      throw !!title ? `${title}: ${message}` : message;
  }


  /**
   * Asserts whether the value is not false/undefined
   * @param value Value to be evaluated
   * @param message Error message to be generated
   * @param title Title/Category of error
   */
  public static isTruthy(value: any, message: string, title: string = '') {
    if (!value)
      throw !!title ? `${title}: ${message}` : message;
  }

  /**
   * Asserts whether the value passed is falsey or undefined
   * @param value Value to be evaluated
   * @param message Error message to be generated
   * @param title Title/Category of error
   */
  public static isFalsey(value: any, message: string, title: string = '') {
    if (!!value)
      throw !!title ? `${title}: ${message}` : message;
  }

  /**
   * Asserts whether the value passed is a non empty array
   * @param value Value to be evaluated
   * @param message Error message to be generated
   * @param title Title/Category of error
   */
  public static isNonEmptyArray(value: any[], message: string, title: string = '') {
    if (!value && value.length > 0)
      throw !!title ? `${title}: ${message}` : message;
  }
}
