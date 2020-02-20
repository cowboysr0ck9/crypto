// Seek & Destroys All Kill Arguments from Array
const destroyer = (arr: any, ...kill: any) => arr.filter((x: any) => !kill.includes(x));
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Finds And Replaces Case Sensitive Word
const findAndReplace = (s: string, wordToReplace: string, word: string) => {
    const index = s.indexOf(wordToReplace);
    const hasCase = s[index] === s[index].toUpperCase();

    hasCase ? (word = word[0].toUpperCase() + word.slice(1)) : null;

    return s.replace(wordToReplace, word);
};

findAndReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
