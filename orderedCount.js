const orderedCount = function (text) {
  let result = []
  let arrChar = text.split('')
  let arrUniqs = [...new Set(arrChar)]
  for (let i = 0; i < arrUniqs.length; i++) {
    result.push([arrUniqs[i], arrChar.filter((char)=>char===arrUniqs[i]).length])
  }
  return result;
}

console.log(orderedCount('teeeseeawwwa'));