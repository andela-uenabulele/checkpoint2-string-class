
# String Extensions
[![Coverage Status](https://coveralls.io/repos/github/andela-uenabulele/checkpoint2-string-class/badge.svg?branch=develop)](https://coveralls.io/github/andela-uenabulele/checkpoint2-string-class?branch=develop)
[![Build Status](https://travis-ci.org/andela-uenabulele/checkpoint2-string-class.svg?branch=develop)](https://travis-ci.org/andela-uenabulele/checkpoint2-string-class)
[![Code Climate](https://codeclimate.com/repos/5856fc2d6ebe8000760035df/badges/1ab4a205c8d50babf41e/gpa.svg)](https://codeclimate.com/repos/5856fc2d6ebe8000760035df/feed)
[![Issue Count](https://codeclimate.com/repos/5856fc2d6ebe8000760035df/badges/1ab4a205c8d50babf41e/issue_count.svg)](https://codeclimate.com/repos/5856fc2d6ebe8000760035df/feed)

Extends the default javascript string class to support more string manipulations.

## How to Use the App
1. [CLCIK HERE](https://stringclass-app.herokuapp.com/) to goto the app on heroku.
2. Enter a string you wish to manipulate.
3. Select the action(s) you wish to perform on the string.
actions include
  - hasVowels - Check to see if a string contains vowels
  - toUpper - Converts the string into uppercase
  - toLower - Converts the string into lowercase
  - ucFirst - Converts the first character of a string into uppercase
  - isQuestion - Check to see if a string is a question (ending with '?')
  - words - Return all words in a string as an array
  - wordCount - Counts and return the number of words in a string
  - toCurrency - Converts a string such as '11111` to currency format (11,111)
  - fromCurrency - Converts a string in currency format into a number e.g (11,111 -> 11111)
  - inverseCase - Return the string inverting the cases of its characters e.g ('AbC' -> 'aBc')
  - alternatingCase - Alternates cases of string characters starting with lowercase e.g ('hello' -> 'hElLo')
  - getMiddle - Return the middle character(s) in a string e.g ('ABCD' -> 'BC')
  - numberWords - Returns the numbers in words e.g 325 should return three two five e.g ('112' -> 'one one two')
  - isDigit - Returns true if a string is a single digit
  - doubleCheck - Returns true if a string contains double characters such as 'oo' in 'moon'

4. Your Results will appear in the result panel below.

## Technologies Used
- Javascript (ES6)
- Nodejs

## Contribute to this project
### Install
1. Fork this repository to your github account.
1. Clone your repository: `git clone git@github.com:your-username/checkpoint2-string-class.git`
1. CD into the folder: `cd Checkpoint-2-string-class`
1. Run `npm install`

### Run App
1. Run App: `npm start`

### Run Test
1. Run test: `npm test`

### Contribute
1. Find and Contribute to src/string.js file on the root directory.
2. tests are located in test/string.spec.js file on the root directory.
3. commit your changes
4. git push and make a pull request to my repo
