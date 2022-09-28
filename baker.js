function scramble(str1, str2) {
    let index = 0;
    let len = str2.length;
    let savedIndexes = {};
    let isMatch = false;
    while (index < len) {
        let letter = str2[index];
        let startingLetterIndex = (savedIndexes[letter] + 1) || 0;
        let matchIndex = str1.indexOf(letter, startingLetterIndex);

        isMatch = matchIndex > -1;
        if (!isMatch)
            break;
        index++;
        savedIndexes[letter] = matchIndex;
    }

    return isMatch;
}
console.log(scramble('rkqodlw', 'world') + ',true');
console.log(scramble('cedewaraaossoqqyt', 'codewars') + ',true');
console.log(scramble('katas', 'steak') + ',false');
console.log(scramble('scriptx', 'ascript') + ',false');
console.log(scramble('scriptingjava', 'javascript') + ',true');
console.log(scramble('scriptsjava', 'javascripts') + ',true');
console.log(scramble('javscripts', 'javascript') + ',false');
console.log(scramble('jscripts', 'javascript') + ',false');
console.log(scramble('aabbcamaomsccdd', 'commas') + ',true');
console.log(scramble('commas', 'commas') + ',true');
