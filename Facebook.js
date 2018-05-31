var database = [
    {
        username: "Marshal",
        password: "Secret"
    },

    // Facebook Excercise 2

    {
        username: "Prof Karrokhi",
        password: "Secret123"
    },

    {
        username: "Fofo",
        password: "Secret1"
    },
];

var newsFeed = [
    {
        username: "Prof Karrokhi",
        timeline: "May Allah Bless you."
    },
    {
        username: "Fofo",
        timeline: "I Love you."
    }
];


var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your username?");

// // Facebook Excercise 1
// function signIn(user, pass){
//     if(user === database[0].username &&
//        pass === database[0].password){
//            console.log(newsFeed);
//        } else {
//            alert("Sorry, wrong username and password!");
//        }
// }

// Facebook Excercise 2
function isUserValid(username, password){
    for (var i = 0; i < database.length; i++){
        if (database[i].username === username &&
            database[i].password === password){
                return true;
        }
    }
    return false;
}


function signIn(user, pass){
    if(isUserValid(user, pass)){
           console.log(newsFeed);
       } else {
           alert("Sorry, wrong username and password!");
       }
}

signIn(userNamePrompt, passwordPrompt);




