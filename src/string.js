const stringClassExtension = {

  /**
   * hasVowels - Test if a string contains a vowel
   *
   * @returns {boolean} true if string contains vowel
   */
  hasVowels() {
    return /[aeiou]/.test(this);
  },

  /**
   * toUpper - Converts input string to uppercase
   *
   * @returns {string} The uppercase representation of the input string
   */
  toUpper() {
    return this.replace(/[a-z]/g, letter =>
      String.fromCharCode(letter.charCodeAt() - 32));
  },

  /**
   * toLower - Converts input string to lowercase
   *
   * @returns {String} The lowercase representation of the input string
   */
  toLower() {
    return this.replace(/[A-Z]/g, letter =>
      String.fromCharCode(letter.charCodeAt() + 32))
  },



}
/**
 * Appends the created variable to the String Prototype
 */
Object.assign(String.prototype, stringClassExtension);
