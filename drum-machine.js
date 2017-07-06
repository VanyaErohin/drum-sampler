function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
function playSound(e) {
    const audio = document.getElementById('audio');
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.src = 'sounds/' + e.keyCode + '.wav';
    audio.load();
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);