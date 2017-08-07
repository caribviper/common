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
}
