"use strict";
const destroyer = (arr, ...kill) => arr.filter((x) => !kill.includes(x));
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
const findAndReplace = (s, wordToReplace, word) => {
    const index = s.indexOf(wordToReplace);
    const hasCase = s[index] === s[index].toUpperCase();
    hasCase ? (word = word[0].toUpperCase() + word.slice(1)) : null;
    return s.replace(wordToReplace, word);
};
findAndReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
//# sourceMappingURL=fake-algo-training.js.map