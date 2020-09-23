import { useState } from 'react';

export const usePassword = () => {
  const [pattern, setPattern] = useState(/^.*$/);

  return [
    pattern,
    ({requireDigits, requireMinLength, requireMaxLength, minLength, maxLength,}) => {
      if (requireDigits) {
        if (requireMinLength && requireMaxLength) {
          setPattern(RegExp(String.raw`^(?=.*\d).{${minLength},${maxLength}}$`));
        } else if (requireMinLength) {
          setPattern(RegExp(String.raw`^(?=.*\d).{${minLength},}$`));
        } else if (requireMaxLength) {
          setPattern(RegExp(String.raw`^(?=.*\d).{${maxLength}}$`));
        } else {
          setPattern(RegExp(String.raw`(?=.*\d)`));
        }
      } else if (!requireDigits) {
        if (requireMinLength && requireMaxLength) {
          setPattern(RegExp(String.raw`^.{${minLength},${maxLength}}$`));
        } else if (requireMinLength) {
          setPattern(RegExp(String.raw`^.{${minLength},}$`));
        } else if (requireMaxLength) {
          setPattern(RegExp(String.raw`^.{${maxLength}}$`));
        } else {
          setPattern(/^.*$/);
        }
      }
    },
  ];
};
