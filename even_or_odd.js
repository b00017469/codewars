function add(a, b) {
    a = a.split("").reverse().join("");
    b = b.split("").reverse().join("");
    const la = a.length;
    const lb = b.length;
    let temp = [];
    let bit = 0;
    let cur;
    for(var i = 0; i < Math.max(la,lb); i++){
        if(i>=la){
             cur = Number(b[i]);
        }else if(i>=lb){
             cur =Number(a[i]);
        }else{
             cur = Number(a[i]) + Number(b[i]);
        }
        temp.push((cur+bit)%10);
        bit = Math.floor((cur+bit)/10);
    }
    if(bit==1){
        temp.push(1);
    }
    let result = "";
    for(var i=temp.length-1; i>=0; i--)
        result+=temp[i];
    return result;
}
console.log(Number('77777777777777777777777777777777'))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))

// describe("Add two numbers", function(){
//     it("should pass basic tests", function() {
//         Test.assertEquals(add("1", "1"), "2");
//         Test.assertEquals(add("123", "456"), "579");
//         Test.assertEquals(add("888", "222"), "1110");
//         Test.assertEquals(add("1372", "69"), "1441");
//         Test.assertEquals(add("12", "456"), "468");
//         Test.assertEquals(add("101", "100"), "201");
//         Test.assertEquals(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
//     });
// });