/* eslint-disable no-unused-vars, no-unused-expressions */
require('../src/string');
const chai = require('chai');

const should = chai.should();
const assert = chai.assert;


describe('String Class Extension', () => {
  const testPhrase = 'hello WOrld';
  let result;

  describe('hasVowels', () => {
    it('should return a boolean', () => {
      'testPhrase'.hasVowels().should.be.a('boolean');
    });
    it('should return true for words with vowel letters', () => {
      testPhrase.hasVowels().should.be.true;
    });
    it('should return false for words without vowel letters', () => {
      const nonVowel = 'Fjzz Bvzz';
      nonVowel.hasVowels().should.be.false;
    });
  });

  describe('toUpper', () => {
    it('should return a String', () => {
      testPhrase.toUpper().should.be.a('String');
    });
    it('should covert each letter to uppercase', () => {
      result = 'HELLO WORLD';
      testPhrase.toUpper().should.equal(result);
    });
    it('should properly handle symbols', () => {
      const mixedWords = 'HE*$?llO andEla';
      result = 'HE*$?LLO ANDELA';
      mixedWords.toUpper().should.equal(result);
    });
    it('should not utilize the toUpperCase method', () => {
      String(testPhrase.toUpper).should.not.have.string('toUpperCase');
    });
  });

  describe('toLower', () => {
    it('should return a String', () => {
      testPhrase.toLower().should.be.a('String');
    });
    it('should convert each letter to lowercase', () => {
      result = 'hello world';
      testPhrase.toLower().should.equal(result);
    });
    it('should not utilize the toLowerCase method', () => {
      String(testPhrase.toLower).should.not.have.string('toLowerCase');
    });
  });

  describe('ucFirst', () => {
    it('should return a String', () => {
      testPhrase.ucFirst().should.be.a('String');
    });
    it('should convert the first character to upper case', () => {
      result = 'Hello WOrld';
      testPhrase.ucFirst().should.equal(result);
    });
    it('should utilize the toUpper method', () => {
      String(testPhrase.ucFirst).should.have.string('toUpper');
    });
  });

  describe('isQuestion', () => {
    const question = `${testPhrase} ?`;
    const questionSpaced = `${testPhrase} ?  `;
    const questionBetween = `${testPhrase} ? Uyi`;
    it('should return a boolean', () => {
      question.isQuestion().should.be.a('boolean');
    });
    it('should return true if a string ends with a question mark(?)', () => {
      question.isQuestion().should.be.true;
    });
    it('should return true if it the question has trailing whitespaces', () => {
      questionSpaced.isQuestion().should.be.true;
    });
    it('should return false if it doesn\'t end with a question mark(?)', () => {
      testPhrase.isQuestion().should.be.false;
    });
    it('should return false for an invalid question', () => {
      const invalidQuestions = ['???', '$%^#*@*@?', 'r?sd'];
      invalidQuestions[0].isQuestion().should.be.false;
      invalidQuestions[1].isQuestion().should.be.false;
      invalidQuestions[2].isQuestion().should.be.false;
    });
    it('should return false if a question mark not at the end', () => {
      questionBetween.isQuestion().should.be.false;
    });
  });

  describe('words', () => {
    it('should return an instance of an array', () => {
      testPhrase.words().should.be.an('array');
    });
    it('should return an array of each word in a string', () => {
      result = ['hello', 'WOrld'];
      testPhrase.words().should.eql(result);
    });
    it('should return accurate result with special Characters', () => {
      const specialWord = `${testPhrase} isn't me lovely`;
      result = ['hello', 'WOrld', 'isn\'t', 'me', 'lovely'];
      specialWord.words().should.eql(result);
    });
  });

  describe('wordCount', () => {
    it('should return a Number', () => {
      testPhrase.wordCount().should.be.a('Number');
    });
    it('should return the number of words in a string', () => {
      testPhrase.wordCount().should.equal(2);
    });
    it('should utilize the words method', () => {
      String(testPhrase.wordCount).should.have.string('words');
    });
  });

  describe('toCurrency', () => {
    let currency;
    it('should return a String', () => {
      currency = '123456.789';
      currency.toCurrency().should.be.a('string');
    });
    it('should return an error message for invalid input', () => {
      currency = ['11s11.11', '1111.11.11'];
      result = '111,511.00';
      (function(){currency[0].toCurrency()}).should.throw(TypeError);
      (function(){currency[1].toCurrency()}).should.throw(TypeError);
      // assert.throws('helloo'.toCurrency, TypeError);
    });
    it('should return the currency value of a string without a "."', () => {
      currency = '111511';
      result = '111,511.00';
      currency.toCurrency().should.equal(result);
    });
    it('should return the currency value for a string that ends in "."', () => {
      currency = '112911.';
      result = '112,911.00';
      currency.toCurrency().should.equal(result);
    });
    it('should return the correct approximation', () => {
      currency = ['111511.2345', '111511.2355'];
      result = ['111,511.23', '111,511.24'];
      currency[0].toCurrency().should.equal(result[0]);
      currency[1].toCurrency().should.equal(result[1]);
    });
  });

  describe('fromCurrency', () => {
    const inputCurrency = '1,111.11';
    it('should return a Number', () => {
      inputCurrency.fromCurrency().should.be.a('Number');
    });
    it('should return the number representation of a currency string', () => {
      result = 111111;
      inputCurrency.fromCurrency().should.equal(result);
    });
  });

  describe('inverseCase', () => {
    it('should return a String', () => {
      testPhrase.inverseCase().should.be.a('String');
    });
    it('should return the inverseCase for an input string', () => {
      result = 'HELLO woRLD';
      testPhrase.inverseCase().should.equal(result);
    });
    it('should work with symbols within the String', () => {
      const withSymbol = `${testPhrase}&Oh`;
      result = 'HELLO woRLD&oH';
      withSymbol.inverseCase().should.equal(result);
    });
  });

  describe('alternatingCase', () => {
    it('should return a String', () => {
      testPhrase.alternatingCase().should.be.a('String');
    });
    it('should return alternating case for a string"', () => {
      result = 'hElLo wOrLd';
      testPhrase.alternatingCase().should.equal(result);
    });
  });

  describe('getMiddle', () => {
    it('should return a String', () => {
      testPhrase.getMiddle().should.be.a('String');
    });
    it('should return the middle letter for an odd numbered String', () => {
      const testWords = `${testPhrase} Today`;
      result = 'r';
      testWords.getMiddle().should.equal(result);
    });
    it('should return the middle letters for an even numbered String', () => {
      const testWords = `${testPhrase} Today!`;
      result = 'rl';
      testWords.getMiddle().should.equal(result);
    });
  });

  describe('numberWords', () => {
    const testValue = '123';
    const outputValue = 'one two three';
    it('should return a String', () => {
      testValue.numberWords().should.be.a('String');
    });
    it('should return the number in words', () => {
      testValue.numberWords().should.equal(outputValue);
    });
  });

  describe('isDigit', () => {
    const validDigit = '2';
    const invalidDigit = '23';
    it('should return a boolean', () => {
      validDigit.isDigit().should.be.a('boolean');
    });
    it('should return †rue for a digit', () => {
      validDigit.isDigit().should.be.true;
    });
    it('should return false for non digit', () => {
      invalidDigit.isDigit().should.be.false;
    });
  });

  describe('doubleCheck', () => {
    it('should return a boolean', () => {
      testPhrase.doubleCheck().should.be.a('boolean');
    });
    it('should return †rue if string contains double characters', () => {
      testPhrase.doubleCheck().should.be.true;
    });
    it('should return false for string without double characters', () => {
      const invalidValue = 'Helo World';
      invalidValue.doubleCheck().should.be.false;
    });
    it('should return true if string contains double whitespace', () => {
      const validValue = 'read it  now';
      validValue.doubleCheck().should.be.true;
    });
  });
});
