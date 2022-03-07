function persistence(num) {
   let result = 0;
   while (num > 9) {
      let arrayNams = String(num).split('');
      let j = 0;
      for (let i = 0; i < arrayNams.length - 1; i++) {
         if (j == 0) {
            num = arrayNams[i] * arrayNams[i + 1];
         } else {
            num *= arrayNams[i + 1];
         }
         j++;
      }
      result++
   }

   console.log(result);
   return result;
}

persistence(39);