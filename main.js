// Movement variables
const world = document.getElementById("boxDiv");
let x, y;

// Pause menu variables
const pauseMenu = document.getElementById('pauseMenu')
const resumeBtn = document.getElementById('resumeBtn')
const settingsBtn = document.getElementById('settingsBtn')
const creditsBtn = document.getElementById('creditsBtn')
let isPaused = false;



// display with fixed coordinates on reload
setTimeout(() => { window.scrollTo(0, 0) }, 100)

// Camera movement
const runGame = e => {
    if (!isPaused) {
        x = e.clientX;
        y = e.clientY;
        y = -y;
        world.style.transform = `translateZ(600px) rotateX(${y}deg) rotateY(${x}deg)`;
    }
}

document.addEventListener('mousemove', runGame);

// Menu interaction
const pauseGame = () => {
    isPaused = true;
    pauseMenu.style.visibility = "visible";
    document.body.style.cursor = "auto";
    showPauseMenu();
}
const resumeGame = () => {
    isPaused = false;
    pauseMenu.style.visibility = "hidden";
    document.body.style.cursor = "crosshair";
    hidePauseMenu();
}

const showPauseMenu = () => {
    resumeBtn.style.visibility = "visible"
    settingsBtn.style.visibility = "visible"
    creditsBtn.style.visibility = "visible"
}

const hidePauseMenu = () => {
    resumeBtn.style.visibility = "hidden"
    settingsBtn.style.visibility = "hidden"
    creditsBtn.style.visibility = "hidden"
}

document.addEventListener('keyup', e => {
    if (e.key == 'Escape') (isPaused) ? resumeGame() : pauseGame();
});

document.addEventListener('click', resumeGame);




