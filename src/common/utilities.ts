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
  public static isFunction(x): boolean {
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

  	/**
	 * Joins path segments.  Preserves initial "/" and resolves ".." and "."
	 * Does not support using ".." to go above/outside the root.
	 * This means that join("foo", "../../bar") will not resolve to "../bar"
	 * Source: creationix/path.js
	 * Link: https://gist.github.com/creationix/7435851#file-path-js
	 */
	public static join(...paths: any[]) : string {
		// Split the inputs into a list of path commands.
		let parts = [];
		for (let i = 0, l = paths.length; i < l; i++) {
			//added numeric checking
			if (!isNaN(parseFloat(paths[i])) && isFinite(paths[i])) { //check for numbers
				parts.push(paths[i]);
			}
			else {
				parts = parts.concat(paths[i].split('/'));
			}
		}
		// Interpret the path commands to get the new resolved path.
		let newParts = [];
		for (let i = 0, l = parts.length; i < l; i++) {
			let part = parts[i];
			// Remove leading and trailing slashes
			// Also remove "." segments
			if (!part || part === '.') continue;
			// Interpret ".." to pop the last segment
			if (part === '..') newParts.pop();
			// Push new path segments.
			else newParts.push(part);
		}
		// Preserve the initial slash if there was one.
		if (parts[0] === '') newParts.unshift('');
		// Turn back into a single string path.
		return newParts.join('/') || (newParts.length ? '/' : '.');
  }
  
  /**
   * Sorts an array based on the passed properties. 
   * Should be used for multiple field sorts.
   * Source: Stackoverflow
   * Link: https://stackoverflow.com/questions/6129952/javascript-sort-array-by-two-fields
   * @param array Array to be sorted
   * @param sortdetails Specifies sort details, which comprises of propertyName and descending
   */
  public static sortBy<T>(array:T[], ...sortdetails: {propertyName: string, descending: boolean}[]) : T[] {
      var sortArguments = arguments;
      return array.sort(function (objA, objB) {  
          let result = 0;
          for (let argIndex = 0; argIndex < sortdetails.length && result === 0; argIndex += 2) {
  
              let propertyName = sortdetails[argIndex].propertyName;
              result = (objA[propertyName] < objB[propertyName]) ? -1 : (objA[propertyName] > objB[propertyName]) ? 1 : 0;
  
              //Reverse if sort order is false (DESC)
              result *= !sortdetails[argIndex].descending ? 1 : -1;
          }
          return result;
      });
  }

}
