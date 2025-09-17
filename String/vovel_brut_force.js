var countVowelSubstrings = function(word) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        const seen = new Set();
        for (let j = i; j < word.length; j++) {
            let ch = word[j];
            if (!vowels.has(ch)) break;
            seen.add(ch);
            if (seen.size === 5) {
                count++;
            }
        }
    }
    return count;
};
