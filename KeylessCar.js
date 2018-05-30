
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

// alert("YOu are the BEST!");

function checkDriverAge(){
    var age = Number(prompt("Enter your age, please!"));
    if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age > 18){
    alert("Powering On. Enjoy the ride!");        
    } else {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.
var checkDriverAge2 = function (){
    var age = Number(prompt("Enter your age, please!"));
    if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age > 18){
    alert("Powering On. Enjoy the ride!");        
    } else {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge2();


// //BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
function checkDriverAge3(age){
    if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off");
    } else if (age > 18){
    alert("Powering On. Enjoy the ride!");        
    } else {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}
checkDriverAge3(92);

// it returns "Powering On. Enjoy the ride!"