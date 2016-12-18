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

  /**
   * ucFirst - Converts the First Letter
   *
   * @returns {String} with the first letter capitalized
   */
  ucFirst() {
    return this.replace(/[a-z]/, letter => letter.toUpper());
  },

  /**
   * isQuestion - Checks if input ends with a '?'
   *
   * @returns {boolean} true if it is a question
   */
  isQuestion() {
    return /\?$/.test(this);
  },

  /**
   * words - Returns an array of the words in a string
   *
   * @returns {Array} The words in the string
   */
  words() {
    return this.match(/(?!\d)(\w+)/g);
  }



}
/**
 * Appends the created variable to the String Prototype
 */
Object.assign(String.prototype, stringClassExtension);
