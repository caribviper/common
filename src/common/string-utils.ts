export class StringUtilities {
  /**
   * Searches a string for all matches and replaces them with the replacement text.
   * Returns a new string with the desired result
   * @param target Target string to have item replaced
   * @param search Search text being replaced
   * @param replacement Replacement text
   */
  public static replaceAll(target: string, search:string, replacement: string =''): string {
    return target.replace(new RegExp(search, 'g'), replacement);
  }

   /**
   * Join a series of string separated by define character
   * @param seperator - Separator used to separate list
   * @param items - Items to be joined
   */
  public join(seperator: string, ...items: string[]): string {
    if (!items || items.length === 0)
      return '';
    return items.join(seperator);
  }

  /**
   * Capitalize a given value of text.
   * @param value Value to be capitalize
   */
  public capitalize(value: string) : string {
    if (!!value && typeof value === 'string') {
			let finalStr = '';
      value = value.toLowerCase();
			let splitStr = value.split(' ');

			for (let i = 0, len = splitStr.length; i < len; i++) {
				let currentSplit = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
				finalStr += currentSplit + ' ';
			}

			return finalStr;
		}
		return value;
  }
}
