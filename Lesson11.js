/*
    Array methods:
    ForEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

// var n = 5; // Số lượng object bạn muốn tạo
// var test = [];

// for (var i = 0; i < n; i++) {
//     var name = prompt("Nhập tên 'name':");
//     var coin = prompt("Nhập số 'coin':");
//     var obj = {
//         id: i + 1,
//         name: name,
//         coin: coin
//     };
//     test.push(obj);
// }

// console.log(test);

var courses = [
    {id: 1, name: 'Thanh', coin: 1},
    
    {id: 2, name: 'LGD', coin: 0},
    
    {id: 3, name: 'Javascript', coin: 0 },
    {id: 4, name: 'Python', coin: 0},
    {id: 2, name: 'LGD', coin: 20},

    {id: 5, name: 'C++', coin: 200}
]

// courses.forEach(function(courses, index){
//     console.log(courses, index);
// })

// var isFree = courses.every(function(course, index){
//     console.log(index);
    
//     return course.coin === 0
// })
// console.log(isFree)

// var isFree = courses.some(function(course, index){
//     console.log(index);
    
//     return course.coin === 0
// })
// console.log(isFree)

// var isFree = courses.find(function(course, index){
//     console.log(index);
    
//     return course.name === 'LGD'
// })
// console.log(isFree)

// var listCourses = courses.filter(function(course, index){
//     console.log(index);
    
//     return course.name === 'LGD'
// })
// console.log(listCourses)

// var listCourses = courses.map(function(course, index, originArray){
//     // console.log(course);
    
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray
//     }
// })
// console.log(listCourses)

var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex) {
    return accumulator + currentValue.coin;

} , 0)
console.log(totalCoin);

