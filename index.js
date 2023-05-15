window.addEventListener('DOMContentLoaded', () => {

    function makeSound(key) {
        const audioFiles = {
            w: new Audio('/sounds/tom-1.mp3'),
            a: new Audio('/sounds/tom-2.mp3'),
            s: new Audio('/sounds/tom-3.mp3'),
            d: new Audio('/sounds/tom-4.mp3'),
            j: new Audio('/sounds/snare.mp3'),
            k: new Audio('/sounds/crash.mp3'),
            l: new Audio('/sounds/kick-bass.mp3'),
            o: new Audio('/sounds/hihat.wav'),
            p: new Audio('/sounds/openhat.wav')
          };

        audioFiles[key].play();
    }

    function buttonAnimation(currentKey) {
        let activeButton = document.querySelector(`.${currentKey}`);
        activeButton.classList.add('pressed')
        setTimeout(() => {
            activeButton.classList.remove('pressed')
        }, 200)
    }

    document.addEventListener('keydown', (e) => {
        makeSound(e.key);
        buttonAnimation(e.key);
    })
})

