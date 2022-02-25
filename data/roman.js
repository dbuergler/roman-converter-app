function numberToRoman(number){
    let roman = "";
    const romanNumeralList = {M: 1000, CM: 900, D:500, CD: 400, C: 100, XC: 90, L: 50, XV: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    let j;
    if(number < 1 || number > 1000)
        return "Please enter a number between 1 and 1000";
    else {
        for(let key in romanNumeralList){
            j = Math.floor(number/romanNumeralList[key]);
                if(j >= 0){
                    for(let i = 0; i < j; i++){
                        roman += key;
                    }
                }
                number = number % romanNumeralList[key]
        }
    }

    return roman;
}



// function romanToNumber (romanNumber){
//     romanNumber = romanNumber.toUpperCase();
//     const romanNumberList = ["CM", "M", "CD", "D", "XC", "C", "XL", "L", "IX", "X", "IV", "V", "I"];
//     const numberList = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
//     let index = 0, num = 0;
//     for (let rn in romanNumberList){
//         index = romanNumber.indexOf(romanNumberList[rn]);
//         while(index != -1){
//             num += parseInt(numberList[rn]);
//             romanNumber = romanNumber.replace(romanNumberList[rn], "-");
//             index = romanNumber.indexOf(romanNumberList[rn]);
//         }
//     }
//     return num;
// }