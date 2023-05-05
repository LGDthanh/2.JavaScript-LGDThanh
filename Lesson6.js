/*
Hàm trong JS
1. Tạo
2, Gọi Hàm
3. Tính chất
Tham số hàm trong JS
1. Tham số
2. Truyền tham số
3. Arguments?
*/
//return 0;
/**
 1. Function trùng tên
 2. Khai báo biến trong hàm
 3. Định nghĩa hàm trong hàm
 Các lọai function:
 1. Declaration function
 2. Expression function
 3. Arrow function
 */
// Object trong JS
// Object constructor
// Object prototype - Basic
// 1.Prototype
function User( firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }    
}
User.prototype.className = ' VT06';
User.prototype.getClassName = function(){
    return this.className;
}

var author = new User('Thanh', 'Nguyen', 'Avatar');
var user = new User('LGDthanh', 'Nguyen', 'Avatar');

author.title = 'LGD';
user.comment = 'javascript';

console.log(user.className);
console.log(user.getClassName());
console.log(author.getName());
console.log(user.getName);
