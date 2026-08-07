/**
 * Indian Mobile Number Validation Module
 * 
 * Rules:
 * - Core format: Exactly 10 digits.
 * - Valid prefixes: Must start with 6, 7, 8, or 9 (0-5 are strictly invalid).
 * - Optional prefix handling: Removes leading +91, 091, 91 (when 12 digits), or leading trunk prefix 0.
 * - Normalization: E.164 standard format (+91XXXXXXXXXX).
 * - Throws explicit validation error if non-compliant.
 */

export interface MobileValidationResult {
  isValid: boolean;
  normalized: string; // E.164 format: +91XXXXXXXXXX
  digits: string;     // 10 digits
  error: string;
}

export function validateIndianMobile(rawInput: string): MobileValidationResult {
  if (!rawInput || typeof rawInput !== 'string' || !rawInput.trim()) {
    return {
      isValid: false,
      normalized: '',
      digits: '',
      error: 'Invalid mobile number. Please enter a valid 10-digit mobile number.'
    };
  }

  // Strip spaces, dashes, dots, and parentheses
  let cleaned = rawInput.trim().replace(/[\s\-\(\)\.]/g, '');

  // Strip leading international code (+91, 091, 91 if length 12) or domestic trunk prefix (0)
  if (cleaned.startsWith('+91')) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('091')) {
    cleaned = cleaned.slice(3);
  } else if (cleaned.startsWith('91') && cleaned.length === 12) {
    cleaned = cleaned.slice(2);
  } else if (cleaned.startsWith('0')) {
    cleaned = cleaned.replace(/^0+/, '');
  }

  // Ensure digits only
  if (!/^\d+$/.test(cleaned)) {
    return {
      isValid: false,
      normalized: '',
      digits: cleaned,
      error: 'Invalid mobile number. Number must contain digits only.'
    };
  }

  // Ensure exact 10 digits
  if (cleaned.length !== 10) {
    return {
      isValid: false,
      normalized: '',
      digits: cleaned,
      error: `Invalid mobile number. Must be a 10-digit mobile number (entered ${cleaned.length} digits).`
    };
  }

  // Ensure valid prefix (6, 7, 8, or 9)
  const firstDigit = cleaned.charAt(0);
  if (!['6', '7', '8', '9'].includes(firstDigit)) {
    return {
      isValid: false,
      normalized: '',
      digits: cleaned,
      error: `Invalid mobile number. Indian mobile numbers must start with 6, 7, 8, or 9 (starts with '${firstDigit}').`
    };
  }

  return {
    isValid: true,
    normalized: `+91${cleaned}`,
    digits: cleaned,
    error: ''
  };
}
