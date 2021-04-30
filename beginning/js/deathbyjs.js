//STEP 1
// var word = "webmaster";
// function sortString() {
//     var arr = word.split("");
//     var sorted = arr.sort();
//     window.console.log(sorted.join());
// }
// sortString();

//STEP 2
// const story = "the quick brown fox";
// const words = story.split(" ");
 
// for (let i=0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// window.console.log(words.toString());



//STEP 3
// var story = "The quick brown fox"
// var newMessage = story.split(" ");
// window.console.log(story.match(/(a|e|i|o|u)/g)); 


//STEP 4
// function random_letters(randomlet) {
//     let random = "";
//     for( var i = 0; i < 8; i++ ){
//         random += String.fromCharCode(33 + Math.random() * 93);
//     }
//     return random;
// };
// console.log(random_letters());

//STEP 5

function longestWord(country) {
  let word = "";
  for (let i = 0; i < country.length; i++) {
    if (word.length < country[i].length) {
      word = country[i];
    }
  }
  return word;
}
window.console.log(longestWord(['Australia', 'Germany', 'United States of America']));


