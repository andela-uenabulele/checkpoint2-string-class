const stringClassExtension = {

  /**
   * hasVowels - Tests if a string contains a vowel
   * vowels include [a,e,i,o,u]
   * @returns {boolean} true if string contains vowel
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper - Converts input string to uppercase
   * @returns {string} The uppercase representation of the input string
   */
  toUpper() {
    return this.replace(/[a-z]/g, letter =>
      String.fromCharCode(letter.charCodeAt() - 32));
  },

  /**
   * toLower - Converts input string to lowercase
   * @returns {String} The lowercase representation of the input string
   */
  toLower() {
    return this.replace(/[A-Z]/g, letter =>
      String.fromCharCode(letter.charCodeAt() + 32))
  },

  /**
   * ucFirst - Converts the First Letter to uppercase
   * @returns {String} with the first letter capitalized
   */
  ucFirst() {
    return this.replace(/[a-z]/, letter => letter.toUpper());
  },

  /**
   * isQuestion - Checks if input ends with a '?'
   * @returns {boolean} true if it is a question
   */
  isQuestion() {
    return /\?$/.test(this.trim());
  },

  /**
   * words - Returns an array of the words in a string
   * @returns {Array} The words in the string
   */
  words() {
    return this.match(/[\w'-]+/g);
  },

  /**
   * wordCount - Counts the number of words in the string
   * @returns {Number} The number of words in the string
   */
  wordCount() {
    return this.words().length;
  },

  /**
   * toCurrency - Converts a String with valid Format to a currency
   * @returns {String} A String in currency format or an error message
   */
  toCurrency() {
    let inputValue = this;
    let roundedValue;

    if (/\.$/.test(inputValue)) {
      inputValue = `${this}00`;
    }

    if (!/^\d+(\.)?\d+$/.test(inputValue)) {
      return 'Invalid Input!';
    }

    if (/^\./.test(inputValue)) {
      inputValue = `${this}.00`;
    }


    roundedValue = Number(inputValue).toFixed(2);
    return roundedValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  },

  /**
   * fromCurrency - Converts a currency formatted string to it's Number value
   * @returns {Number} the number representation to the input currency
   */
  fromCurrency() {
    return Number(this.replace(/[^0-9]/g, ''));
  },

  /**
   * inverseCase - Convert each letter of the String to an inverse case
   * i.e coverts uppercase letters to lowercase and vice versa
   * e.g Boy to bOY
   * @returns {String} the inversecase representation of the input string
   */
  inverseCase() {
    return this.replace(/\w/g, letter => {
      if (/[a-z]/.test(letter)) return letter.toUpper();
      return letter.toLower();
    });
  },

  /**
   * alternatingCase - Converts the input String to an alternating case string
   * It ensures to start with a lowercase string
   * e.g Onomatopoeia is converted to oNoMaToPoEiA
   * @returns {String} an alternating case representative of the string
   */
  alternatingCase() {
    return this.replace(/\w/g, (letter, index) => {
      if (index % 2 == 0) return letter.toLower();
      return letter.toUpper();
    });
  },

  /**
   * getMiddle - Gets the Middle character of a String
   * @returns {String} the middle character(s) of the input string
   */
  getMiddle() {
    const midPoint = Math.floor(this.length / 2);
    if (this.length % 2) return this.substr(midPoint, 1)
    return this.substr(midPoint - 1, 2);
  },

  /**
   * numberWords - Returns each digit of input in words delimited by space
   * @returns {String} each Digit in words
   */
  numberWords() {
    let inWords = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten'
    ];
    return this.replace(/\d/g, letter => `${inWords[letter]} `).trim();
  },

  /**
   * isDigit - Checks if input is a Digit
   * @returns {boolean} true if input is a digit
   */
  isDigit() {
    return /^\d{1}$/.test(this);
  },

  /**
   * doubleCheck - Checks if a string contains double characters
   * (including whitespace character)
   * @returns {boolean} true if string contains double characters
   */
  doubleCheck() {
    return /(.)\1{1}/.test(this);
  }

}
/**
 * Appends the created variable to the String Prototype
 */
Object.assign(String.prototype, stringClassExtension);
