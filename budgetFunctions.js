/**
 * Budget Calculation Functions
 * Lab: Basic Functions for Personal Budget Management
 */

/**
 * 1. Calculates a 10% tax on a given amount.
 * @param {number} amount - The monetary value to tax.
 * @returns {number} The tax value (10% of amount).
 */
function calculateTax(amount) {
  return amount * 0.10;
}

/**
 * 2. Converts a string to uppercase.
 * @param {string} text - The string to convert.
 * @returns {string} The uppercase version of the string.
 */
function convertToUpperCase(text) {
  return text.toUpperCase();
}

/**
 * 3. Returns the larger of two numbers.
 * @param {number} num1
 * @param {number} num2
 * @returns {number} The larger of num1 and num2.
 */
function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

/**
 * 4. Checks whether a string is a palindrome.
 * @param {string} word - The string to check.
 * @returns {boolean} true if the string reads the same forward and backward, false otherwise.
 */
function isPalindrome(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

/**
 * 5. Calculates the price after applying a discount.
 * @param {number} originalPrice - The original price.
 * @param {number} discountPercentage - The discount percentage (e.g. 20 for 20%).
 * @returns {number} The price after the discount is applied.
 */
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - (originalPrice * (discountPercentage / 100));
}

// ---- Step 4: Test Your Functions ----
// A few sanity checks using console.log so you can verify output when you run this file.

console.log("calculateTax(100):", calculateTax(100));               // expect 10
console.log("convertToUpperCase('hello'):", convertToUpperCase("hello")); // expect "HELLO"
console.log("findMaximum(5, 9):", findMaximum(5, 9));                 // expect 9
console.log("isPalindrome('racecar'):", isPalindrome("racecar"));     // expect true
console.log("isPalindrome('hello'):", isPalindrome("hello"));         // expect false
console.log("calculateDiscountedPrice(100, 20):", calculateDiscountedPrice(100, 20)); // expect 80

// If your lab environment uses modules, uncomment the line below:
// module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
