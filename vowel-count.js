function getCount(str) {
    var vowelsCount = 0;
    var arrayChar = str.split('');
    for (var i = 0; arrayChar.length > i; i++) {
      if (arrayChar[i] === 'a' || arrayChar[i] === 'e' || arrayChar[i] === 'i' || arrayChar[i] === 'o' || arrayChar[i] === 'u') {
        vowelsCount++;
      }
    }
    
    
    return vowelsCount;
  }