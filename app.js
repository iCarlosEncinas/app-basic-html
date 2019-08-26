const buttons = document.querySelectorAll('button');

const playNote = event =>{
    console.log(event.target.dataset.note);
}

buttons.forEach(
    button  =>  button.addEventListener('click' , playNote)
);