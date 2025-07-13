/**
 * Validates if a string matches a specific format type
 * @param value - The string to validate
 * @param type - The type of validation to perform: 'phone', 'email', or 'userId'
 * @returns boolean - Whether the string matches the specified format
 */
export const validateString = (value: string, type: 'phone' | 'email' | 'userId'): boolean => {
  // Return false for empty strings
  if (!value) return false;

  switch (type) {
    case 'phone':
      // US/Canada phone number (only numbers)
      // Validates 10-digit numbers without any formatting
      return /^\d{10}$/.test(value);

    case 'email':
      // Email validation
      // Basic email format validation with common TLDs
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);

    case 'userId':
      // User ID validation
      // Can have numbers, can end with numbers, but can't start with numbers
      return /^[a-zA-Z][a-zA-Z0-9]*$/.test(value);

    default:
      return false;
  }
};

/**
 * Example usage:
 * 
 * // Phone validation
 * validateString('1234567890', 'phone'); // true
 * validateString('123-456-7890', 'phone'); // false (contains non-numeric characters)
 * 
 * // Email validation
 * validateString('user@example.com', 'email'); // true
 * validateString('invalid-email', 'email'); // false
 * 
 * // User ID validation
 * validateString('user123', 'userId'); // true
 * validateString('123user', 'userId'); // false (starts with numbers)
 */