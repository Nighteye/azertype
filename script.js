const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"]
let score = 0
let motUtilisateur = ""
let continuer = true
let liste = ""

while(continuer) {
    let reponse = prompt("Voulez vous une liste de mots ou de phrases à taper ?")
    switch(reponse) {
        case "mots":
            liste = listeMots
            continuer = false
            break
        case "phrases":
            liste = listePhrases
            continuer = false
            break
        default:
            console.log("Vous avez fait une erreur de frappe, veuillez taper 'mots' ou 'phrases'")
    }
}

for(let i = 0 ; i < liste.length ; ++i) {

    motUtilisateur = prompt("Entrez le mot : " + liste[i])
    if(motUtilisateur === liste[i]) {
        console.log("Bravo")
        ++score
    } else {
        console.log("Vous avez fait une erreur")
    }
}

console.log("Votre score est de " + score + " points")