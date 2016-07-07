module.exports = (strings, ...keys) => (...values) => keys.reduce((text, key, keyIndex) => `${text}${values[key]}${strings[keyIndex + 1]}`, strings[0]);
