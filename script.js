// // Function to save the text to local storage as a text file
// document.getElementById('saveButton').addEventListener('click', function() {
//     var textToSave = document.getElementById('ideaScroll').value;
//     var blob = new Blob([textToSave], { type: 'text/plain' });
//     var url = URL.createObjectURL(blob);
//     localStorage.setItem('savedTextFile', url);
// });

// // Function to load the text from local storage and display it
// document.getElementById('loadButton').addEventListener('click', function() {
//     var savedUrl = localStorage.getItem('savedTextFile');
//     if (savedUrl) {
//         fetch(savedUrl)
//             .then(response => response.text())
//             .then(text => {
//                 document.getElementById('ideaScroll').value = text;
//             })
//             .catch(error => {
//                 console.error('Error loading text file:', error);
//             });
//     } else {
//         console.error('No text file found in local storage.');
//     }
// });

const tada = new Audio("tada.wav");

let ideaList = localStorage.getItem('List');
const Ideas = ideaList ? JSON.parse(ideaList) : [];
let Idea = document.getElementById('Display');

document.getElementById('saveButton').addEventListener('click', function() {
    let textToSave = document.getElementById('ideaScroll').value;
    if (textToSave === "") {
        alert("bitch it ain nothin to save");
    }else{
    console.log(Ideas);
    Ideas.push(textToSave);
    document.getElementById('ideaScroll').value = "";
    localStorage.setItem('List', JSON.stringify(Ideas));
    tada.play();
    }
});

document.getElementById('loadButton').addEventListener('click', function() {
    let number = getRndInteger();
    console.log(number);
    if (Ideas[0] === undefined) {
        alert("bitch it ain nothin to show");
    } else {
        Idea.innerHTML = Ideas[number];
    }
    
});
document.getElementById('clean').addEventListener('click', function() {
    localStorage.setItem('List', JSON.stringify([]));
    Ideas.length = 0;
});

function getRndInteger() {
  return Math.floor(Math.random() * (Ideas.length - 0)) + 0;
}