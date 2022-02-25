function romanToNumber (romanNumber){
    romanNumber = romanNumber.toUpperCase();
    const romanNumberList = ["CM", "M", "CD", "D", "XC", "C", "XL", "L", "IX", "X", "IV", "V", "I"];
    const numberList = [900,1000,400,500,90,100,40,50,9,10,4,5,1];
    let index = 0, num = 0;
    for (let rn in romanNumberList){
        index = romanNumber.indexOf(romanNumberList[rn]);
        while(index != -1){
            num += parseInt(numberList[rn]);
            romanNumber = romanNumber.replace(romanNumberList[rn], "-");
            index = romanNumber.indexOf(romanNumberList[rn]);
        }
    }
    return num;
}