//STEP 1
// var urName = window.prompt("What is your name?");
// window.alert(urName.length);

//STEP 2
// var urName = window.prompt("Enter your name.");
// var urNum = window.prompt("Enter a number?");
// window.alert(urName.charAt(urNum));


//STEP 3
// var urName = window.prompt("Enter your first name.");
// var urLast = window.prompt("Enter your last name.");
// window.alert("Your Name is: " + urName.concat(urLast));


//STEP 4
// var story = "The quick brown fox jumps over the lazy dog";
// window.alert(story.indexOf("fox"));

//STEP 5
// var story = "The quick brown fox jumps over the lazy fox";
// window.alert(story.lastIndexOf("fox"));

//STEP 6
// var story = "The quick brown fox jumps over the lazy dog";
// var urFullName = window.prompt("Enter your full name.");
// window.alert(story.replace("the lazy dog", urFullName));

//STEP 7
// var story = "The quick brown fox jumps over the lazy dog";
// var urWord = prompt("Enter a word");
// window.alert(urWord + " is at location: " + story.search(urWord));

//STEP 8
// var old_string = "The quick brown fox jumps over the lazy dog";
// var new_string = old_string.slice(31,43);
// window.alert(new_string.toUpperCase());

//STEP 9
// var story = "             THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG               ";
// window.alert(story.trim().toLowerCase());

//STEP 10
var story = "the quick brown fox jumps over the lazy dog";
window.alert(story.charAt(0).toUpperCase() + story.substr(1));

