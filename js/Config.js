const hero = document.getElementById('hero');
const fireball = document.getElementById('fireball');
const scene = document.getElementById('scene');
const villain = document.getElementById('villain');
const score = document.getElementById('score');
let count = 0;

const afterJump = setInterval(() => {
    if (fireball.classList.contains('shoot') === true) {
    hero.classList.remove('jump');
    hero.setAttribute('src', 'imagens/hero.gif');
}}, 700);

const jump = () => {
     
    hero.classList.add('jump');
    hero.setAttribute('src', 'imagens/jump.gif');
    afterJump;    
};

const scoreCount = setInterval(() => {

    hero.classList.contains('start') === true ? count = 0 : count += 10;

    String(count).length <= 5 ? score.innerHTML = String(count).padStart(5,0) : score.innerHTML = count;
}, 100);

const start = () => {

    villain.classList.add('float');
    hero.classList.remove('start');
    hero.setAttribute('src', 'imagens/hero.gif');
    fireball.classList.add('shoot');
};

const action = () => {
    
    fireball.classList.contains('shoot') === true ? jump() : start();
};

document.addEventListener('keydown', action);

const game = setInterval(() => {
    const fireRight = window.getComputedStyle(fireball).right.replace('px', '');
    const heroBottom = window.getComputedStyle(hero).bottom.replace('px', '');
    const sceneWidth = window.getComputedStyle(scene).width.replace('px', '');
    const sceneHeigh = window.getComputedStyle(scene).height.replace('px', '');

    if (fireRight/sceneWidth > 0.8 && heroBottom/sceneHeigh < 0.15)  {

        fireball.style.animation = 'none';
        fireball.style.right = 0.8*sceneWidth+'px';

        hero.style.animation = 'none';
        hero.style.bottom = heroBottom+'px';
        hero.setAttribute('src', 'imagens/game over.png');
        hero.style.width = 0.1*sceneWidth+'px';
        hero.style.marginLeft = 0.03*sceneWidth+'px';

        clearInterval(game);
        clearInterval(afterJump);
        clearInterval(scoreCount);
        document.removeEventListener('keydown', action);
    }
},10);