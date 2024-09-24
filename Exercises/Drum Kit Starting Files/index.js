let numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function (event) {
        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener('keydown', function (event){
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound (key){
    
    switch (key) {
        case 'w':
            let audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            let secondAudio = new Audio('sounds/tom-2.mp3');
            secondAudio.play();
            break;
        case 's':
            let thirdAudio = new Audio('sounds/tom-3.mp3');
            thirdAudio.play();
            break;
        case 'd':
            let fourthAudio = new Audio('sounds/tom-4.mp3');
            fourthAudio.play();
            break;
        case 'j':
            let fifthAudio = new Audio('sounds/crash.mp3');
            fifthAudio.play();
            break;
        case 'k':
            let sixthAudio = new Audio('sounds/kick-bass.mp3');
            sixthAudio.play();
            break;
        case 'l':
            let seventhAudio = new Audio('sounds/snare.mp3');
            seventhAudio.play();
            break;

    }
}

function buttonAnimation (currentKey){
    let activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function (){
        activeButton.classList.remove('pressed');
    }, 200);
}
