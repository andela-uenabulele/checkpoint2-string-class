const stringClassExtension = {

  /**
   * hasVowels - Test if a string contains a vowel
   *
   * @returns {boolean} true if string contains vowel
   */
  hasVowels() {
    return /[aeiou]/.test(this);
  },

}
/**
 * Appends the created variable to the String Prototype
 */
Object.assign(String.prototype, stringClassExtension);
