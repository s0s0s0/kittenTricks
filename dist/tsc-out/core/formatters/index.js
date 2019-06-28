export const CardNumberFormatter = (value) => {
    return value
        .replace(/\s?/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim();
};
export const ExpirationDateFormatter = (value, stateValue) => {
    let formatted = value;
    if (formatted[0] !== '1' && formatted[0] !== '0') {
        formatted = '';
    }
    if (formatted.length === 2) {
        if (parseInt(formatted.substring(0, 2), 10) > 12) {
            formatted = formatted[0];
        }
        else if (stateValue.length === 1) {
            formatted += '/';
        }
        else {
            formatted = formatted[0];
        }
    }
    return formatted;
};
export const CvvFormatter = (value) => {
    return value;
};
export const CardholderNameFormatter = (value) => {
    return value.toLocaleUpperCase();
};
//# sourceMappingURL=index.js.map