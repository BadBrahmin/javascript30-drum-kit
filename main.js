function playsound(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //audio play code
    if (!audio) return; //stops function when not associated
    audio.currentTime = 0; //rewind to start when clicked again
    audio.play();
    console.log(audio);

    //Transition Animation code
    key.classList.add('playing');


};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //don't execute function if property is not transform
    this.classList.remove('playing'); //"this" here refers to key (from key.eventListener below)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playsound)