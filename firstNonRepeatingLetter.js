function firstNonRepeatingLetter(s) {
    let result=""
    let arrayS = s.split('')
    if (arrayS.length ===1){
        result = s
      }else {
        let arraySWithLowerCase = s.toLowerCase().split('')
        for(let i=0; arraySWithLowerCase.length > i;i++){
            let copyArr = [...arraySWithLowerCase]
            copyArr.splice(i,1)
          let isFind = copyArr.includes(arraySWithLowerCase[i])
          if(!isFind){
            result=arrayS[i]
            break;
          }
        }
      }
    return result
  }

  console.log(firstNonRepeatingLetter('a'));
  console.log(firstNonRepeatingLetter('stress'));
  console.log(firstNonRepeatingLetter('moonmen'));