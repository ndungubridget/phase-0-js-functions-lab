
// Calculates tax on a given amount.
// Replace 0.10 with the tax rate specified by your lab, if different.
function calculateTax(amount) {
    const taxRate = 0.10;
    return amount * taxRate;
}

// Converts a string to uppercase.
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Returns the larger of two numbers.
function findMaximum(num1, num2) {
    return Math.max(num1, num2);
}

// Checks whether a string is a palindrome, ignoring case.
function isPalindrome(text) {
    const normalizedText = text.toLowerCase();
    const reversedText = normalizedText.split("").reverse().join("");

    return normalizedText === reversedText;
}

// Calculates a discounted price.
// discountPercentage should be provided as a percentage, such as 20 for 20%.
function calculateDiscountedPrice(price, discountPercentage) {
    return price - (price * discountPercentage / 100);
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };