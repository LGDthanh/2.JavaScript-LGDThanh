/**
 - Toán tử 3 ngôi - Ternảy operator
 - Vòng lặp - Loop:
 1. for - lặp với điều kiện đúng
 2. for/in - lặp qua key của đối tượng
 3. for/of - lặp qua value của đối tượng
 4. while - lặp khi điều kiện đúng
 5. do/while - lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
*/
// var a = 0;
// var b = 2;
// var c = a > b ? a : b; 
// console.log(c);
var myInfo = {
    name: 'Thanh',
    age: 21,
    address: 'Ha Noi',
    
} 
 // 1. for - lặp với điều kiện đúng

 for(var i = 1; i<=5; i++){
    //Code
    console.log(i);
 }
 // 2. for/in - lặp qua key của đối tượng
 // Key của Array là số, Object là string
 for( var key in myInfo){
    // Code
    console.log(myInfo[key]);

 }