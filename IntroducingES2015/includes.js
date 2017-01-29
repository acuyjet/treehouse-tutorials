'use strict';

let strToSearch = 'a-really-long-hyphenated-string';

console.log(/long/.test(strToSearch)); // Test string w/regex
console.log(strToSearch.indexOf('long') > -1); // indexOf
console.log(strToSearch.includes('long')); // startsWith