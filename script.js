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


let number;
let lastnumber = number;
document.getElementById('loadButton').addEventListener('click', function() {
    
    console.log(number);
    console.log(lastnumber);

    
    do {
        number = getRndInteger();
    } while (Ideas.length > 1 && number === lastnumber);
    
    if (Ideas[0] === undefined) {
        alert("bitch it ain nothin to show");
        return;
        } else {
        Idea.innerHTML = Ideas[number];
        lastnumber = number;
    } 

    
});
document.getElementById('clean').addEventListener('click', function() {
    localStorage.setItem('List', JSON.stringify([]));
    Ideas.length = 0;
    Idea.innerHTML = "";
});

function getRndInteger() {
  return Math.floor(Math.random() * (Ideas.length - 0)) + 0;
}