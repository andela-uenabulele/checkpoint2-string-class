const mocha = require('mocha');
const chai = require('chai');
const should = chai.should();
require('../src/string');

describe('String Class Extension', () => {
  describe('hasVowels', () => {
    it('should return a boolean', () => {
      "John".hasVowels().should.be.a('boolean');
    });
    it('should return true for "Hello World"', () => {
      "Hello World".hasVowels().should.be.true;
    });
    it('should return false for "Fjzz Bvzz"', () => {
      'Fjzz Bvzz'.hasVowels().should.be.false;
    });
  });

  describe('toUpper', () => {
    it('should return a String', () => {
      "Hello World".toUpper().should.be.a('String');
    });
    it('should covert each letter to uppercase', () => {
      'hello world'.toUpper().should.equal('HELLO WORLD')
    });
    it('should covert each letter to uppercase for mixed case words', () => {
      'HEllO andEla'.toUpper().should.equal('HELLO ANDELA')
    });
    it('should not utilize the toUpperCase method', () => {
      String('HEllO andEla'.toUpper).should.not.have.string('toUpperCase')
    });
  });

  describe('toLower', () => {
    it('should return a String', () => {
      'HELLO WORLD'.toLower().should.be.a('String')
    });
    it('should convert each letter to lowercase', () => {
      'HELLO WORLD'.toLower().should.equal('hello world')
    });
    it('should convert each letter to lowercase for mixed case words"', () => {
      'heLlO wOrlD'.toLower().should.equal('hello world')
    });
    it('should not utilize the toLowerCase method', () => {
      String('HEllO andEla'.toLower).should.not.have.string('toLowerCase')
    });
  });

  describe('ucFirst', () => {
    it('should return a String', () => {
      'hELLo WORLD'.ucFirst().should.be.a('String');
    });
    it('should convert the first character to upper case', () => {
      'hello world'.ucFirst().should.equal('Hello world');
      'heLLo wOrld'.ucFirst().should.equal('HeLLo wOrld');
    });
    it('should convert the first word character to upper case', () => {
      '?hello world'.ucFirst().should.equal('?Hello world');
      '123heLLo wOrld'.ucFirst().should.equal('123HeLLo wOrld');
    });
    it('should utilize the toUpper method', () => {
      String('hellO andEla'.ucFirst).should.have.string('toUpper')
    });
  });

  describe('isQuestion', () => {
    it('should return a boolean', () => {
      'Is today a public Holiday?'.isQuestion().should.be.a('boolean');
    });
    it('should return true if a string ends with a question mark(?)', () => {
      'Is today a public Holiday?'.isQuestion().should.be.true;
    });
    it('should return false if a string doesn\'t end with a question mark(?)', () => {
      'Today is a public Holiday'.isQuestion().should.be.false;
    });
    it('should return false if a question mark is present but not at the end', () => {
      'Is today a public ? Holiday'.isQuestion().should.be.false;
      'Is today a pub?lic Holiday'.isQuestion().should.be.false;
    });
  });

  describe('words', () => {
    it('should return an Object', () => {
      (typeof 'The name of the awesome Lord be praised'.words()).should.equal('object');
    });
    it('should return an instance of an array', () => {
      'Today is a public Holiday'.words().should.be.an('array');
    });
    it('should return an array containing each word when given a sentence', () => {
      'Today is a public holiday'.words().should.eql([ 'Today', 'is', 'a', 'public', 'holiday' ]);
    });
  });

  describe('wordCount', () => {
    it('should return a Number', () => {
      'Today is a public Holiday'.wordCount().should.be.a('Number');
    });
    it('should return the number of words in a string', () => {
      'Today is a public Holiday'.wordCount().should.equal(5);
    });
    it('should utilize the words method', () => {
      String('HEllO andEla'.wordCount).should.have.string('words')
    });
  });

  describe('toCurrency', () => {
    it('should return a String', () => {
      '1111.11'.toCurrency().should.be.a('string');
    });
    it('should return an error message for invalid input', ()=>{
      '111s1.11'.toCurrency().should.equal('Invalid Input!');
    });
    it('should return the currency representation of a string without a "."', () => {
      '111511'.toCurrency().should.equal('111,511.00');
    });
    it('should return the currency representation of a string', () => {
      '1111.11'.toCurrency().should.equal('1,111.11');
    });
  });

  describe('fromCurrency', () => {
    it('should return a Number', () => {
      '1,111.11'.fromCurrency().should.be.a('Number');
    });
    it('should return the number representation of a currency string', () => {
      '1,111.11'.fromCurrency().should.equal(111111);
    });
  });

  describe('inverseCase', () => {
    it('should return a String', () => {
      'Mr Ben'.inverseCase().should.be.a('String');
    });
    it('should return "heLLO wOrLD" for "HEllo WoEld"', () => {
      'Mr Ben'.inverseCase().should.equal('mR bEN');
    });
    it('should work with symbols within the String', () => {
      'Mr B&en'.inverseCase().should.equal('mR b&EN');
    });
  });

  describe('alternatingCase', () => {
    it('should return a String', () => {
      'Onomatopoeia'.alternatingCase().should.be.a('String');
    });
    it('should return alternating case for a string"', () => {
      'Onomatopoeia'.alternatingCase().should.equal('oNoMaToPoEiA');
    });
  });

  describe('getMiddle', () => {
    it('should return a String', () => {
      'Onomatopoeia'.getMiddle().should.be.a('String');
    });
    it('should return the middle letter for an odd numbered String', () => {
      'read'.getMiddle().should.equal('ea');
    });
    it('should return the middle letters for an even numbered String', () => {
      'reads'.getMiddle().should.equal('a');
    });
  });

  describe('numberWords', () => {
    it('should return a String', () => {
      '123'.numberWords().should.be.a('String');
    });
    it('should return the number in words', () => {
      '123'.numberWords().should.equal('one two three');
    });
  });

  describe('isDigit', () => {
    it('should return a boolean', () => {
      '23'.isDigit().should.be.a('boolean');
    });
    it('should return †rue for a digit', () => {
      '3'.isDigit().should.be.true;
    });
    it('should return false for non digit', () => {
      '23'.isDigit().should.be.false;
    });
  });

  describe('doubleCheck', () => {
    it('should return a boolean', () => {
      'reader'.doubleCheck().should.be.a('boolean');
    });
    it('should return †rue if string contains double characters', () => {
      'grool'.doubleCheck().should.be.true;
    });
    it('should return true if string contains double whitespace', () => {
      'read it  now'.doubleCheck().should.be.true;
    });
  });

});
