const screen = document.querySelectorAll('.screen');
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn');
const game_container = document.getElementById('game-container');

const timeE1 = document.getElementById('time');
const scoreE1 = document.getElementById('score');
const message = document.getElementById('message');

let seconds =0;
let score = 0;
let select_insect = {};

start_btn.addEventListener('click', () => screen[0].classList.add('up'))

choose_insect_btn.forEach(btn => {
    btn.addEventListener('click',() =>{
        const img = btn.querySelector('img');
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt');
        select_insect= [src,alt]
        screens[1].classList.add('up')

        secTimeout(createInsect,1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime,1000)
}
function incrementTime(){
    let m = Match.floor(seconds/60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}`: m
    s = s < 10 ? `0${s}` : s
    timeE1.innerHTML = `Time : ${m}: ${s}`
    seconds++;

}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const {x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${select_insect.src}" alt="${select_insect.alt}"
    style= "transform: rotate(${Match.random()*360}deg)" />`

    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)

}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Match.random() * (width -200) + 100
    const y = Match.random() * (height -200) + 100
    return (x,y);
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout( () => this.remove(), 2000)
    addInsect()
}

function addInsect() {
    setTimeout ( createInsect, 3000)
    setTimeout ( createInsect, 2500)

}

function increaseScore() {
 score ++
 if(score > 19){
     message.classList.add('visible')
 }
 scoreE1.innerHTML = `Score: ${score}`

}

message.addEventListener('click', () => screens[1].classList.remove('up') )

