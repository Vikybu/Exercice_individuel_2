const chiffreHTML = document.getElementById('chiffre_html')
const indice = document.getElementById('indice')
const chiffreADeviner = document.getElementById('chiffre_a_deviner')
const guess = document.getElementById('guess')
const bouttonValiderGuess = document.getElementById('btn_valider_guess')
const bouttonValiderChiffreADeviner = document.getElementById('btn_chiffre_a_deviner')
const labelChiffreADeviner = document.getElementById('label_chiffre_a_deviner')
const labelGuess = document.getElementById('bouttonValiderGuess')
const tentative = document.getElementById('tentative')
let count=0
let nombreMystere = 0
let bornMin = 0
let bornMax = 50

/*
Fonction playJoueurUn() au joueur 1 d'écrire un nombre entre 0 et 50 (chiffre à deviner par joueur 2)
*/
function playJoueurUn(){
    nombreMystere = Number(chiffreADeviner.value)
    if (nombreMystere > bornMax || nombreMystere < bornMin) {
        alert(`C'est un nombre entre ${bornMin} et ${bornMax} qu'on demande Joueur1`)
        return
    }
    labelChiffreADeviner.hidden = true
    bouttonValiderChiffreADeviner.hidden = true
    chiffreADeviner.hidden = true
    console.log(nombreMystere)
}

bouttonValiderChiffreADeviner.addEventListener('click',playJoueurUn)


/*
Fonction didIWin() permet d'afficher un indice au joueur 2 si le nombre donné est trop grand ou trop petit 
par rapport au nombre à deviner. 2 paramètres :
    - givenNumber : Number
    - nombreTrouve : Number
*/
function didIWin(){
    let givenNumber = Number(guess.value)
    console.log(givenNumber)

    if (givenNumber < nombreMystere){
        indice.innerText = 'Indice : Plus grand !'
        count ++
        if (givenNumber > bornMin) {
            bornMin = givenNumber 
        }
        chiffreHTML.innerText = `Le chiffre à trouver se trouve entre : ${bornMin} < ? < ${bornMax}`
    } else if (givenNumber > nombreMystere){
        indice.innerText = 'Indice : Plus petit !'
        count++
        if (givenNumber < bornMax) {
            bornMax = givenNumber 
        }
        chiffreHTML.innerText = `Le chiffre à trouver se trouve entre : ${bornMin} < ? < ${bornMax}`
    } else if (givenNumber == nombreMystere) {
        chiffreHTML.innerText = 'Bravo! Vous avez deviné le nombre !'
        guess.hidden = true
        bouttonValiderGuess.hidden = true
        labelGuess.hidden = true
        indice.hidden = true
    }
    tentative.innerText = `Nombre de tentative = ${count+1}`
}

bouttonValiderGuess.addEventListener('click', didIWin)

/*
Fonction gameplay() permet d'appeler les fonctions :
    - playJoueurUn()
    - demandeNombre()
    - didIWin()
*/
function gamePlay(){
    let nombreMystere = playJoueurUn()
    let givenNumber = demandeNombre()
    let count = 1
    while (didIWin(givenNumber, nombreMystere) == false) {
        givenNumber = demandeNombre()
        count ++


    }
}
