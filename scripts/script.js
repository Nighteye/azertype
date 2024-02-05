function afficherResultat(score, total) {

    let spanScore = document.querySelector(".zoneScore span");
    spanScore.innerHTML = `${score} / ${total}`;

    // console.log("Votre score est de " + score + " points sur un total de " + total)
}

function choisirPhrasesOuMots() {
    return prompt("Voulez vous une liste de mots ou de phrases à taper ?")
}

function lancerBoucleDeJeu(liste) {
    let score = 0
    for(let i = 0 ; i < liste.length ; ++i) {
        let motUtilisateur = prompt("Entrez le mot ou la phrase suivante : " + liste[i])
        if(motUtilisateur === liste[i]) {
            console.log("Bravo")
            ++score
        } else {
            console.log("Vous avez fait une erreur")
        }
    }

    return score
}

function lancerJeu() {
    let choix = ""
    let liste = ""

    while(choix !== "mots" && choix !== "phrases") {
        choix = choisirPhrasesOuMots()
        switch(choix) {
            case "mots":
                liste = listeMots
                break
            case "phrases":
                liste = listePhrases
                break
            default:
                console.log("Vous avez fait une erreur de frappe, veuillez taper 'mots' ou 'phrases'")
        }
    }
    
    let score = lancerBoucleDeJeu(liste)
    
    afficherResultat(score, liste.length)
}