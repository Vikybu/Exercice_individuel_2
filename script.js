function demandeNombre(){
    let givenNumber = Number(prompt("Donner un numéro : "))
    return givenNumber
}

function didIWin(givenNumber){
    if (givenNumber < 22){
        alert('Plus grand !')
    } else if (givenNumber > 22){
        alert('Plus petit !')
    } else {
        alert('Bravo! Vous avez deviné le nombre !')
    }
}

function gamePlay(){
    
}

let nombre = demandeNombre()
didIWin(nombre)
