//VARIABLES

const inputBox = document.getElementById('mainInput');
const createButton = document.getElementById('mainButton');
const notesHolder = document.getElementById('notesHolder');
let inputBoxValue;


//FUNCTIONS

const submitHandler = () => {
inputBoxValue = inputBox.value;
inputBox.value = '';
console.log(inputBoxValue)
}



const addValueToCard = () => {

    submitHandler();
    let newDiv= document.createElement('div');
    newDiv.classList.add('note');
    let newParagraph = document.createElement('p')
    newParagraph.classList.add('noteText');
    newParagraph.innerHTML = inputBoxValue;
    newParagraph.contentEditable = true;
    newDiv.appendChild(newParagraph);
    notesHolder.appendChild(newDiv);
    
}

//LISTENERS

createButton.addEventListener('click', addValueToCard);