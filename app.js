//VARIABLES

const inputBox = document.getElementById('mainInput');
const createButton = document.getElementById('mainButton');
const notesHolder = document.getElementById('notesHolder');
const seeMoreButton = document.getElementById('seeMoreButton')
let newButton;
let inputBoxValue;
let newDiv;



//FUNCTIONS

const submitHandler = () => {
inputBoxValue = inputBox.value;
inputBox.value = '';
console.log(inputBoxValue)
}



const addValueToCard = () => {

    submitHandler();
    let firstNewDiv= document.createElement('div');
    firstNewDiv.classList.add('eachNote');
    
    newDiv= document.createElement('div');
    newDiv.classList.add('note');
    firstNewDiv.appendChild(newDiv);
    let newParagraph = document.createElement('p')
    newParagraph.classList.add('noteText');
    newParagraph.innerHTML = inputBoxValue;
    newParagraph.contentEditable = true;
    newDiv.appendChild(newParagraph);
    notesHolder.appendChild(firstNewDiv);
    newButton = document.createElement("button");
    newButton.classList.add('seeMoreButton')
    newButton.innerHTML = "See more";
    firstNewDiv.appendChild(newButton)
    console.log(seeMoreButton)
    
}

const noteClick = () => {

    alert('Note clicked');
}

//LISTENERS

createButton.addEventListener('click', addValueToCard);
seeMoreButton.addEventListener('click', function() {alert('See More')})