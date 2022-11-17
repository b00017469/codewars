function parseHelper(string) {
    let result = 0;
    const twoWords = string.split('-');
    switch (twoWords[0]) {
        case 'ten':
            result = 10;
            break;
        case 'eleven':
            result = 11;
            break;
        case 'twelve':
            result = 12;
            break;
        case 'thirteen':
            result = 13;
            break;
        case 'fourteen':
            result = 14;
            break;
        case 'fifteen':
            result = 15;
            break;
        case 'sixteen':
            result = 16;
            break;
        case 'seventeen':
            result = 17;
            break;
        case 'eighteen':
            result = 18;
            break;
        case 'nineteen':
            result = 19;
            break;
        case 'twenty':
            result = 20;
            break;
        case 'thirty':
            result = 30;
            break;
        case 'forty':
            result = 40;
            break;
        case 'fifty':
            result = 50;
            break;
        case 'sixty':
            result = 60;
            break;
        case 'seventy':
            result = 70;
            break;
        case 'eighty':
            result = 80;
            break;
        case 'ninety':
            result = 90;
            break;
        case 'one':
            result += 1;
            break;
        case 'two':
            result += 2;
            break;
        case 'three':
            result += 3;
            break;
        case 'four':
            result += 4;
            break;
        case 'five':
            result += 5;
            break;
        case 'six':
            result += 6;
            break;
        case 'seven':
            result += 7;
            break;
        case 'eight':
            result += 8;
            break;
        case 'nine':
            result += 9;
            break;
    }
    switch (twoWords[1]) {
        case 'one':
            result += 1;
            break;
        case 'two':
            result += 2;
            break;
        case 'three':
            result += 3;
            break;
        case 'four':
            result += 4;
            break;
        case 'five':
            result += 5;
            break;
        case 'six':
            result += 6;
            break;
        case 'seven':
            result += 7;
            break;
        case 'eight':
            result += 8;
            break;
        case 'nine':
            result += 9;
            break;
    }
    return result;
}

function parseInt(string) {
    let result = 0;
    if (string === 'zero') return result;
    const wordsArray = string.split(' ');


    for (let i = 0; wordsArray.length > i; i++) {
        if (wordsArray[i] === 'hundred') {
            if (wordsArray[i - 2] !== 'thousand') result *= 100;
        }
        if (wordsArray[i] === 'thousand') result *= 1000;
        if (wordsArray[i] === 'million') return result *= 1000000;
        if (wordsArray[i] !== 'hundred' && wordsArray[i] !== 'thousand' && wordsArray[i] !== 'million') {
            if (wordsArray[i + 1] === 'hundred' && wordsArray[i - 1] === 'thousand') result += parseHelper(wordsArray[i]) * 100;
            else result += parseHelper(wordsArray[i]);
        }
    }
    return result;
}

console.log(parseInt('one thousand three hundred thirty-seven'));
console.log(parseInt('eighteen'));
console.log(parseInt('two hundred forty-six'));