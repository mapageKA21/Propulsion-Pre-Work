// ### 1. Reverse

// Write a method that will take a string as input, and return a new string with the same letters in reverse order.
// For example: `reverse('abcd')` => 'dcba'

// OPTION 1
function reverse1(string) {
  let result = '';
  for (let x = string.length-1; x > -1; x--) {
    result += string[x];
  }
  return result;
}

// OPTION 2 
function reverse2(string) {
  return string.split('').reverse().join('');
}


// ------------------------------------------------------------------------

// ### 2. Factorial

// Write a method that takes an integer `n` in; it should return
// `n*(n-1)*(n-2)*...*2*1`. Assume n >= 0.

// As a special case, `factorial(0) == 1`.
// For exampe: `factorial(4)` => 24

// OPTION 1
function factorial1(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n*(factorial1(n-1));
}

// OPTION 2
function factorial2(n) {
    if (n < 0) return undefined;
    var fact = 1;
    for (var i = n; i > 1; i--) {
      fact *= i;
    }
    return fact;
}


// ------------------------------------------------------------------------

// ### 3. Longest Word

// Write a method that takes in a string. Return the longest word in the string. You may assume that the string contains only letters and spaces. You may use the String `split` method to aid you in your quest.
// For example: `longest_word('This is an amazing test')` => 'amazing'

// OPTION 1
function longest_word1(sentence) {
  var splitted = sentence.split(' ');
  var longest_word = '';
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i].length > longest_word.length) {
      longest_word = splitted[i];
    }
  }
  return longest_word;
}

// OPTION 2
function longest_word2(sentence) {
  var splitted = sentence.split(' ');
  var longest_word = '';
  splitted.forEach(function(word) {
    if (word.length > longest_word.length) {
      longest_word = word;
    }
  });
  return longest_word;
}


// ------------------------------------------------------------------------

// ### 4. Sum Nums

// Write a method that takes in an integer `num` and returns the sum of all integers between zero and num, up to and including `num`.
// For example: `sum_nums(6)` => 21

// OPTION 1
function sum_nums(num) {
  if (Number.isInteger(num) === false) return undefined;
  if (num === 0) return 0;
  while (num > 0) {
    return num + (sum_nums(num - 1));
  }
  while (num < 0) {
    return num + (sum_nums(num + 1));    
  }
}

// OPTION 2
function sum_nums2(num) {
  if (Number.isInteger(num) === false) return undefined;
  var total = 0;
  if (num > 0) {
    for(var i = 1; i <= num; i++){
      total += i;
    }
    return total;
  }
  if (num < 0) {
    for(var i = -1; i >= num; i--){
      total += i;
    }
    return total;
  }
}


// ------------------------------------------------------------------------

// ### 5. Time Conversion

// Write a method that will take in a number of minutes, and returns a string that formats the number into `hours:minutes`.
// For example: `time_conversion(155)` => '2:35'

// OPTION 1
function time_conversion1(minutes) {
  var hours = Math.floor(minutes/60);
  var minutes = minutes % 60;
  return hours + ':' + minutes;
}

// OPTION 2
function time_conversion2(minutes) {
  var hours = Math.trunc(minutes/60);
  var minutes = minutes % 60;
  return hours + ':' + minutes;
}


// ------------------------------------------------------------------------

// ### 6. Count Vowels

// Write a method that takes a string and returns the number of vowels in the string. You may assume that all the letters are lower cased. You can treat "y" as a consonant.
// For example: `count_vowels('alphabet')` => 3

// OPTION 1
function count_vowels1(string) {
  var vowels = 'aeiou';
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) counter ++;
  }
  return counter;
}

// OPTION 2
function count_vowels2(string) {
  var counter = string.match(/[aeiou]/g);
  if (counter === null) return 0;
  return counter.length;
}


// ------------------------------------------------------------------------

// ### 7. Palindrome

// Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward. Assume that there are no spaces; only lowercase letters will be given.

// ```javascript
// function palindrome(string) {

// }
// ```

// For example:

// `palindrome('abcd')` => false

// `palindrome('abbba')` => true

// ------------------------------------------------------------------------

// ### 8. Most Letters

// Write a method that takes a string in and returns true if the letter "z" appears within three letters **after** an "a". You may assume that the string contains only lowercase letters.

// ```javascript
// function nearby_az(string) {

// }
// ```

// For example:

// `nearby_az('abbbz')` => false

// `nearby_az('abz')` => true

// ------------------------------------------------------------------------

// ### 9. Two Sum

// Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return `nil`.

// ```javascript
// function two_sum(nums) {

// }
// ```

// For example:

// `two_sum([1, 3, -1, 5])` => [[0, 2]]

// `two_sum([1, 3, -1, 5, -3])` => [[0, 2], [1, 4]]

// `two_sum([1, 5, 3, -4])` => nil

// ------------------------------------------------------------------------

// ### 10. Is Power of Two

// Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false.
// You may want to use the `%` modulo operation. `5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.

// ```javascript
// function is_power_of_two(num) {

// }
// ```

// For example:
 
// `is_power_of_two(8)` => true

// `is_power_of_two(24)` => false
