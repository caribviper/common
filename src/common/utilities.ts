/**
 * Provides methods used throughout the system
 */
export class Utilities {
  /**
   * Gets a random identifier based on current time inconjunction with the Math.random method
   */
  public static getRandomId(): string {
    return `${Date.now().toString()}${Math.floor((Math.random() * 10000000000000000))}`;
  }

  /**Create a guid */
  public static guid(): string {
    return Utilities.guid_s4() + Utilities.guid_s4() + '-' + Utilities.guid_s4() + '-' + Utilities.guid_s4() + '-' +
      Utilities.guid_s4() + '-' + Utilities.guid_s4() + Utilities.guid_s4() + Utilities.guid_s4();
  }

  /**Aids in creating a guid */
  private static guid_s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  /**
   * Gets the property name of the passed property
   * @param property Field/property name to retrieved
   */
  public static getPropertyName<TValue>(property: string | ((model) => TValue)): string {
    if (typeof property === 'string')
      return property as string;
    const name = property.toString();
    const start = name.indexOf('.');
    const end = name.length;
    if (start > -1 && end > 0)
      return name.substring(start + 1, end);
    return '';
  }

  /**
	 * Checks to see if a number is numeric
	 * @param n - item to be checked
	*/
  public static isNumberValid(n: number): boolean { return typeof n === 'number' && !isNaN(n) && isFinite(n); }

  /**
	 * Checks to see if a number is numeric. Uses isNumberValid
	 * @param n - item to be checked
	*/
  public static isNumeric(n: number) : boolean { return this.isNumberValid(n); }

	/**
	 * Checks if the passed item is a function
	 * @param {any} x - parameter to be determined if function
	 */
  public static isFunction(x) {
    if (!x) 
      return false;
    return Object.prototype.toString.call(x) === '[object Function]';
  }

	/**
	 * Validates a date
	 *@param d - item to be checked
	*/
  public static isDate(d: any): boolean {
    //checks to ensure it is a date object && //checks for a valid date
    return (Object.prototype.toString.call(d) === '[object Date]')
      && (!isNaN(d.getTime()));
  }

	/**
	 * Validates a date range
	 * @param start - start date of the date range
	 * @param end - ending date of the date range
	 */
  public static isDateRangeValid(start: Date, end: Date): boolean {
    //check dates
    if (this.isDate(start) && this.isDate(end) && (start.getTime() <= end.getTime())) {
      return true;
    }
    return false;
  }
}
