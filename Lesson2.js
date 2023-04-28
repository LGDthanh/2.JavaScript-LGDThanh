
// Toán tử:
var a = 1 + 2; // 1.Toán tử số học - Arithmetic
var fullName = 'Thanh Nguyen' // 2. Toán tử gán - Assignment
var c = 1; var b = 2; if(c>b){ alert('True')}; // 3. Toán tử so sánh - Comparison 
if(a>0 && b>0){ alert(' a và b > 0')} // 4. Toán tử logic - Logical

// +, -, *, /
// Lũy thừa: **
// % chia lấy dư
// ++, --
// Prefix & Postfix
var output1 = ++a;  // Việc 1: +1 ch a, a = a +1 => a=4
                   // Việc 2: Trả về a sau khi được + 1
                   
var output2 = a++;  // Việc 1: `a copy`, `a copy` = 6 
                    // Việc 2: cộng 1 cho a, a = a +1 => a =4
                    // việc 3 trả về a copy
var output3 = a++ - --a; 

// console.log(output);
// console.log(a);
// Toán tử gán
//Ví dụ            Tương đương
//  x= y;              x= y;
//  x+=y;              x=x+y;
//  x*=y;              x=x*y;
//  x**=y;             x=x**y;
// Toán tử chuỗi:
var fullName = 'Thanh';
var firstName = 'Nguyen';
var name = ' thanh';
name = name + ' Nguyễn';
// console.log(firstName + ' ' + fullName);
console.log(name)
//Toán tử so sánh
// ==
// !=
// ><
// >=
// <=
var boolean = a > b;// Boolean true, false 
// Toán tử logic
// && - And - var 'a' && null && 'c xét từ trái sang phải găp 1 trong 6 giá trị false thì chọn luôn
// || - Or  - var 'a' || false || 'c' ngược với &&
// ! - Not