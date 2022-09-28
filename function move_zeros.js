function move_zeros(arrNum, isRight=true){
let arrZeros = arrNum.filter((number)=>number===0)
let arrWithoutZeros = arrNum.filter((number)=>number!==0)
if (isRight){
    return [...arrWithoutZeros, ...arrZeros]
} else return [...arrZeros, ...arrWithoutZeros]
  }
