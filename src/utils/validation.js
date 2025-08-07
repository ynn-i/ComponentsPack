// Email validation regex
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number validation regex (basic)
export const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

// Password validation regex (at least 8 characters, 1 uppercase, 1 lowercase, 1 number)
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;

// URL validation regex
export const URL_REGEX = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;

// Validation functions
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!EMAIL_REGEX.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validateRequired = (value, fieldName = 'This field') => {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return `${fieldName} is required`;
  }
  return '';
};

export const validateMinLength = (value, minLength, fieldName = 'This field') => {
  if (value && value.length < minLength) {
    return `${fieldName} must be at least ${minLength} characters long`;
  }
  return '';
};

export const validateMaxLength = (value, maxLength, fieldName = 'This field') => {
  if (value && value.length > maxLength) {
    return `${fieldName} must be no more than ${maxLength} characters long`;
  }
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (!PASSWORD_REGEX.test(password)) {
    return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
  }
  return '';
};

export const validatePhone = (phone) => {
  if (!phone) return 'Phone number is required';
  if (!PHONE_REGEX.test(phone.replace(/\s/g, ''))) {
    return 'Please enter a valid phone number';
  }
  return '';
};

export const validateURL = (url) => {
  if (!url) return 'URL is required';
  if (!URL_REGEX.test(url)) {
    return 'Please enter a valid URL';
  }
  return '';
};

// Create validation rules object for useForm hook
export const createValidationRules = (rules) => {
  return rules;
};

// Common validation rules
export const commonValidationRules = {
  email: {
    required: 'Email is required',
    pattern: EMAIL_REGEX,
    message: 'Please enter a valid email address'
  },
  password: {
    required: 'Password is required',
    pattern: PASSWORD_REGEX,
    message: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number'
  },
  required: (fieldName) => ({
    required: `${fieldName} is required`
  })
};
