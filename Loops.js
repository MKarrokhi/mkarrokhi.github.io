// //  TODO List
// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ];

// var todosLength = todos.length;

// // for (var i = 0 ; i < todos.length; i++){
// for (var i = 0 ; i < todosLength; i++){
//     // console.log(todo[i]);
//     todos.pop();
// }

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++;
// }

// // var counterOne = 10
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--;
// }


// var counterTwo = 10
// do {
//     console.log(counterTwo);
//     counterTwo--;
// } while (counterTwo > 0)


// // Difference Between While Loop and Do Loop WHile
// var counterOne = 10
// while (counterOne > 10) {
//     console.log("while loop ",counterOne);
//     counterOne--;
// }

// // ABOVE code never runs but BELOW code runs one time.
// var counterTwo = 10
// do {
//     console.log("do while loop", counterTwo);
//     counterTwo--;
// } while (counterTwo > 10)




//  TODO List - forEach Example
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosImportant = [
    "clean room!",
    "brush teeth!",
    "exercise!",
    "study javascript!",
    "eat healthy!"
];

// for (var i = 0; i < todos.length; i++){
//     console.log(i, todos[i]);
// }

// todos.forEach(function(i, todo){
//     console.log(i, todo);
// });

function logTodos(i, todo){
    console.log(i, todo);
}

todos.forEach(logTodos);
todosImportant.forEach(logTodos);






