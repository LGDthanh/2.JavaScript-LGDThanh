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
    {id: 5, name: 'LGD', coin: 20},

    {id: 6, name: 'C++', coin: 200}
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

// var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex) {
//     return accumulator + currentValue.coin;

// } , 0)
// console.log(totalCoin);

// Flat - "Làm phẳng" mảng từ Depth array - " Mảng Sâu"
// var depthArray = [1, 2,[3, 4], 5, 6, [7, 8, 9]];
// var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//     return flatOutput.concat(depthItem)
// }, [])
// console.log(flatArray)

// Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses:[
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "JavaScript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses:[
            {
                id: 3,
                title: "Node.js"
            },
            {
                 id: 4,
                 title: "Express.js"
            }
        ]
    }
];
var topicsArray = topics.reduce(function(courses, topic){
    console.log(courses)
    console.log(topic)

    return courses.concat(topic.courses)
}, [])
console.log(topicsArray)