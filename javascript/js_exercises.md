### 1. Reverse

Write a method that will take a string as input, and return a new string with the same letters in reverse order.

```javascript
function reverse(string) {

}
```

For example: `reverse('abcd')` => 'dcba'

------------------------------------------------------------------------

### 2. Factorial

Write a method that takes an integer `n` in; it should return
`n*(n-1)*(n-2)*...*2*1`. Assume n >= 0.

As a special case, `factorial(0) == 1`.

```javascript
function factorial(n) {

}
```
For exampe: `factorial(4)` => 24

------------------------------------------------------------------------

### 3. Longest Word

Write a method that takes in a string. Return the longest word in the string. You may assume that the string contains only letters and spaces. You may use the String `split` method to aid you in your quest.

```javascript
function longest_word(sentence) {

}
```
For example: `longest_word('This is an amazing test')` => 'amazing'

------------------------------------------------------------------------

### 4. Sum Nums

Write a method that takes in an integer `num` and returns the sum of all integers between zero and num, up to and including `num`.

```javascript
function sum_nums(num) {

}
```

For example: `sum_nums(6)` => 21

------------------------------------------------------------------------

### 5. Time Conversion

Write a method that will take in a number of minutes, and returns a string that formats the number into `hours:minutes`.

```javascript
function time_conversion(minutes) {

}
```

For example: `time_conversion(155)` => '2:35'

------------------------------------------------------------------------

### 6. Count Vowels

Write a method that takes a string and returns the number of vowels in the string. You may assume that all the letters are lower cased. You can treat "y" as a consonant.

```javascript
function count_vowels(string) {

}
```

For example: `count_vowels('alphabet')` => 3

------------------------------------------------------------------------

### 7. Palindrome

Write a method that takes a string and returns true if it is a palindrome. A palindrome is a string that is the same whether written backward or forward. Assume that there are no spaces; only lowercase letters will be given.

```javascript
function palindrome(string) {

}
```

For example:

`palindrome('abcd')` => false

`palindrome('abbba')` => true

------------------------------------------------------------------------

### 8. Most Letters

Write a method that takes a string in and returns true if the letter "z" appears within three letters **after** an "a". You may assume that the string contains only lowercase letters.

```javascript
function nearby_az(string) {

}
```

For example:

`nearby_az('abbbz')` => false

`nearby_az('abz')` => true

------------------------------------------------------------------------

### 9. Two Sum

Write a method that takes an array of numbers. If a pair of numbers in the array sums to zero, return the positions of those two numbers. If no pair of numbers sums to zero, return `nil`.

```javascript
function two_sum(nums) {

}
```

For example:

`two_sum([1, 3, -1, 5])` => [[0, 2]]

`two_sum([1, 3, -1, 5, -3])` => [[0, 2], [1, 4]]

`two_sum([1, 5, 3, -4])` => nil

------------------------------------------------------------------------

### 10. Is Power of Two

Write a method that takes in a number and returns true if it is a power of 2. Otherwise, return false.
You may want to use the `%` modulo operation. `5 % 2` returns the remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.

```javascript
function is_power_of_two(num) {

}
```

For example:
 
`is_power_of_two(8)` => true

`is_power_of_two(24)` => false
