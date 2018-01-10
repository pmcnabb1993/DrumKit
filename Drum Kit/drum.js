
function playSound(e) {
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
      if(!audio) return;
  
      //Starts audio file from start even if it's playing//
      audio.currentTime = 0;
      audio.play();
  
      //Adds playing class to key//
      key.classList.add('playing');
        console.log(key)
}
       
function removeTransition(e) {
    console.log(e);
    //only remove if it's a transform//
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

//Ends playing class to key//
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//If you press a correct key it will play the music file attached to it//
window.addEventListener('keydown', playSound);