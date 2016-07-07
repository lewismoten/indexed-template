module.exports = (strings, ...keys) => (...values) => keys.reduce((text, key) => `${text}${values[key]}${strings[key + 1]}`, strings[0]);
