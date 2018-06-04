var btnEnter = elementById("add");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var btnDelete = document.getElementsByTagName("button");


function elementById(value) {
	return document.getElementById(value);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDelBtn());
	ul.appendChild(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		input.value = "";
	}
}

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		input.value = "";
	}
}




btnEnter.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterEnter);


//// TODOs for DOM Event Challenge
// 1. If you click on the list item, it toggles the .done  class on and off.
function toggleDoneClass(event) {
	// console.log(event.target.bubbles);
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

ul.addEventListener("click", toggleDoneClass);

// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
function listLength() {
	return li.length;
}

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
}

// Creating Del buttons + Onclick Events
// Also used when adding new element in the list
function createDelBtn() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode(" x "));
	btn.classList.add("delBtn");
	btn.onclick = removeParent;
	return btn;
}

// function createDelBtn(){
for (var i = 0; i < listLength(); i++) {
	li[i].appendChild(createDelBtn());
}


// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 
// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	li.appendChild(createDelBtn());  // THis line adds the delete button
// 	ul.appendChild(li);
// }


// Good Luck!








// // First Attemp to solve the problem
// btn.addEventListener("click", function(){
// 	if(input.value.length > 0){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
// })


// input.addEventListener("keypress", function(event){
// 	// console.log(event);
// 	if(input.value.length > 0 && event.keyCode === 13){
// 		var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(input.value));
// 		ul.appendChild(li);
// 		input.value = "";
// 	}
// })









// var btn = document.getElementsByTagName("button")[0];

// btn.addEventListener("mouseenter", function(){
// 	console.log("YOu are the BEST");
// })

// btn.addEventListener("mouseenter", function(){
// 	console.log("YOu are the BEST");
// })

// btn.addEventListener("mouseleave", function(){
// 	console.log("YOu are the BEST");
// })



// Removing Image
function removeClickedImage(e) {
	var el = e.target;
	console.log("TARGET:");
	console.log(e.target);
	var imageContainer;
	var list;
	if (el.classList.contains("remove")) {
		imageContainer = el.parentNode;
		console.log("imageContainer:");
		console.log(imageContainer);
		list = imageContainer.parentNode;
		console.log("List:");
		console.log(list);
		list.removeChild(imageContainer);
	}
};

var imageList = document.querySelector(".image-list");
imageList.addEventListener("click", removeClickedImage);