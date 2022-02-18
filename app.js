//VARIABLES

const inputBox = document.getElementById('mainInput');
const createButton = document.getElementById('mainButton');
const notesHolder = document.getElementById('notesHolder');
const seeMoreButton = document.getElementById('sexpandButton');
const expandedNote = document.getElementById('expandedNote');

let newButton;
let inputBoxValue;
let newDiv;



//FUNCTIONS

const submitHandler = () => {
inputBoxValue = inputBox.value;
inputBox.value = '';
console.log(inputBoxValue)
}


const expandHandler = () => {

expandedNote.style.visibility =  'visible';
}


//creates new notecard
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
    newButton.classList.add('expandButton')
    
    newButton.innerHTML = "Expand";
    firstNewDiv.appendChild(newButton)
  
    newButton.addEventListener('click',expandHandler) // will not work outside of the function?
}



//LISTENERS

createButton.addEventListener('click', addValueToCard);


