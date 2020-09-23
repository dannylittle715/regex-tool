const calculatePattern = ({ requireDigits, requireMinLength, requireMaxLength, minLength, maxLength,}) => {
  if (requireDigits) {
    if (requireMinLength && requireMaxLength) {
      return RegExp(String.raw`^(?=.*\d).{${minLength},${maxLength}}$`);
    } else if (requireMinLength) {
      return RegExp(String.raw`^(?=.*\d).{${minLength},}$`);
    } else if (requireMaxLength) {
      return RegExp(String.raw`^(?=.*\d).{${maxLength}}$`);
    } else {
      return RegExp(String.raw`(?=.*\d)`);
    }
  } else if (!requireDigits) {
    if (requireMinLength && requireMaxLength) {
      return RegExp(String.raw`^.{${minLength},${maxLength}}$`);
    } else if (requireMinLength) {
      return RegExp(String.raw`^.{${minLength},}$`);
    } else if (requireMaxLength) {
      return RegExp(String.raw`^.{${maxLength}}$`);
    } else {
      return /^.*$/;
    }
  }
};

export default calculatePattern;
