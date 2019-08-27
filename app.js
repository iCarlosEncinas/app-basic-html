const buttons = document.querySelectorAll('button');

const playNote = event =>{
    const button = event.target;
    const note = button.dataset.note;
    const audioId = (`audio${note}`);
    console.log(`audio${note}`);
    const audio = document.getElementById(audioId);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

buttons.forEach(
    button  =>  button.addEventListener('click' , playNote)
);

