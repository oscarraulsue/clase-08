// se declaran las constantes y se le asignan sus respectivos elementos
const screens = document.querySelectorAll('.screen')
const choose_insect_btn = document.querySelectorAll('.choose-insect-btn')
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')

const timeE1 = document.getElementById('time')
const scoreE1 = document.getElementById('score')
const message = document.getElementById('message')
// se declaran variables  
let seconds =0;
let score = 0;
let select_insect = {};
// se llama al escuchador de eventos para al hacer click en el start_btn realice la funcion flecha
// y se le agregala classList up al screens para q desaparezca
start_btn.addEventListener('click', () => screens[0].classList.add('up'))

//Recoremos el el objeto con un forEach
choose_insect_btn.forEach(btn => {
// se llama al escuchador de evento 
    btn.addEventListener('click',() =>{
// al hacer click en  btn el escuchador de evento se llama a la funcion para
// declarar las constantes y asignarle sus respectivos elementos
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
// toma el insecto seleccionado he imprime la imagen del mismo
        select_insect= {src,alt}
// se le agregala classList up al screens para q desaparezca el segundo screens
        screens[1].classList.add('up')
// el setTimeout llama al createInsect despues de un 1 segundo de haber sido llamado
        setTimeout(createInsect,1000)
//se llama la Funcion
        startGame()
    })
})
// secrea una funcion para hacer funcionar el contador llamando la funcion incrementTime cada 1 segundo
function startGame() {
    setInterval(incrementTime,1000)
}
// se crea la funcion incrementTime para modificar el contador
function incrementTime(){
// se crea las variables m para minutos el cual va a ser igual a la division del contador creado "secunds" el cual
// se va incrementando de uno en uno se divide entre 60 para incrimentar 1 minuto  a lo q llegue secunds a los 60
// y s para segundos el cual voy a calcular el residuo de la division entre 60 para reiniciar el conteo de seconds
// al llegar a 60
    let m = Match.floor(seconds/60);
    let s = seconds % 60;
    m = m < 10 ? `0${m}`: m
    s = s < 10 ? `0${s}` : s
    timeE1.innerHTML = `Time : ${m}: ${s}`
    seconds++;
}
// se realiza la funcion para crear los insectos
function createInsect() {
    // se crea un div donde se va a insertar el insecto
    const insect = document.createElement('div');
    // se le dan los estilos con classList
    insect.classList.add('insect');
    // se le indica la ubicacion mediante la funcion getRandomLocation
    const {x,y} = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    // se inserta la imagen
    insect.innerHTML = `<img src="${select_insect.src}" alt="${select_insect.alt}"
    style= "transform: rotate(${Match.random()*360}deg)" />`
// le llama al escuchador de elementos para al hacer click en el insecto
// se llama la funcion catchInsect y se llame al apprndChild e insertar otro insecto
    insect.addEventListener('click', catchInsect)
    game_container.appendChild(insect)
}
// se crea la funcion getRandomLocation para dar ubicacion aleatoria los insectos
function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Match.random() * (width -200) + 100
    const y = Match.random() * (height -200) + 100
    return (x,y);
}
//se crea la funcion catchInsect
function catchInsect() {
// se llama la funcion increaseScore
    increaseScore()
// se le dan los estilos a la clase
    this.classList.add('caught')
// se coloca la funcion setTimeout para q al pasar 2 segundos se remueva el insecto de la pocision y colocarlo en otra
    setTimeout( () => this.remove(), 2000)
// se llama la funcion addInsect para agregar un nuevo insecto
    addInsect()
}
// se creala funcion addInsect
function addInsect() {
    // se coloca un setTimeout para llamar la funcion createInsect y crear un nuevo insecto cada 3 segundo 
    setTimeout ( createInsect, 3000)
     // se coloca un setTimeout para llamar la funcion createInsect y crear un nuevo insecto cada 2.5 segundo 
    setTimeout ( createInsect, 2500)

}
// se crea la funcion increaseScore para sumar 1 al contador de insectos atrapados
function increaseScore() {
    // se inicialisa el contador para que vaya incrementando de 1 en 1
 score ++
 // se crea una condiciona para que al pasar a 20 insectos capturados se le de un nuevo estilo
 // para mostrar el mensaje  Are you annnoyed yet? You are Playing an impossible game y finalice
 if(score > 19){
     message.classList.add('visible')
 }
 scoreE1.innerHTML = `Score: ${score}`
}
// sellama al escuchador de eventos para al hacer click en el mensaje remueva el estilo que escon de el menu de
// los insectos y vuelva al inicio
message.addEventListener('click', () => screens[1].classList.remove('up') )