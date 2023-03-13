// Exercice 1 :
// La valeur de C à la fin de l'algorithme est
// la valeur de a * b donc 12 * 2, donc 24.

// Exercice 2 :
// La valeur de C à la fin de l'algorithme est
// la valeur de a + b, est comme la valeurs de
// a et b sont des strings alors il s'indente,
// le resulat est donc "12312".

// Exercice 3 :

// V1
function taxe(prix){
    // HT + HT * TVA = TTC
    let objetHorstaxe = Math.round(Math.random() * 500) + 10;
    let prixsearch = objetHorstaxe + objetHorstaxe * 0.2;

    while(prixsearch !== prix){
        prix = parseInt(prompt("Quelle est le prix Hors taxe de cet objet ?" + "Objet : " + objetHorstaxe + "$"));

        if (prixsearch !== prix) {
            alert("Ce n'est pas ça, essayez avec cette formule : HT + HT * TVA = TTC.");
        } 

        else if (prixsearch === prix) {
            alert("C'est bien ça !")
            break;
        }
    }
}

// taxe();

// V2
function calculator(price){
    price = parseInt(prompt("Prix de l'objet Hors taxe ?"));
    let result = price + price * 0.2;
    alert("Prix TTC : " + result + "$")
}

// calculator();

// Exercice 4
function nomm(nom, prenom){
    prenom =prompt("Qu'elle est ton prénom ?")
    nom = prompt("Qu'elle est ton nom ?")

    alert("Bonjour " + prenom + " votre nom est " + nom)
}

// nomm();

// Exercice 5
function deuxNombre(a, b){
    a = parseInt(prompt("Premier nombre ?"));
    b = parseInt(prompt("Deuxieme nombre ?"));

    let result = a * b;

    if(result > 0){
        alert("Le résultat est positif")
    } 

    else if(result > 0){
        alert("Le résultat est négatif")
    } else {
        alert("Le résultat est nul")
    }
}

// deuxNombre();

// Exercice 6
function agee(age){
    age = parseInt(prompt("Qu'elle est votre âge ?"))

    while(age){

        if(age <= 13, age > 0){
            alert("Action Man est un film qui pourrait vous intéresser.")
            break;
        }

        else if(age >= 18){
            alert("Evil Dead est un film qui pourrait vous intéresser.")
            break;
        }

        else if(13 < age, 18 > age, age > 0){
            alert("Matrix est un film qui pourrait vous intéresser.")
            break;
        } 

        else{ 
            alert("Veuillez rentrez votre âge.")
        }

        age = parseInt(prompt("Qu'elle est votre âge ?"))
    }

}

// agee();

// Exercice 7
function jeu(nombre) {
    var cible = Math.round(Math.random() * 10);

    for (compteur = 1; compteur >= 0; compteur++) {
        nombre = parseInt(prompt("donnez un chiffre:"));

        if (nombre === cible) {
            alert("C'est gagné !");
            break;
        }

        else if (nombre !== cible) {
            alert("Encore une chance");
        }

        else {
            alert("Ce n'est pas un chiffre");
        }

    }
}

// jeu();

// Exercice 8
function boucle(a){
    a = parseInt( prompt("Quel est le chiffre ?"))

    for(a; a >= 0; a--){
        console.log(a);
    }
}

// boucle();

// Exercice 9
function jeu(nombre) {
    var cible = Math.round(Math.random() * 10);

    for (compteur = 1; compteur >= 0; compteur++) {
        nombre = parseInt(prompt("donnez un chiffre:"));

        if (nombre === cible) {
            alert("C'est gagné !");
            break;
        }

        else if (nombre > cible) {
            alert("trop grand");
        }

        else if (nombre < cible) {
            alert("trop petit");
        }

        else {
            alert("ce n'est pas un chiffre");
        }

    }
}

// jeu();

// Exercice 10
function calc(){
    let array = [10, 15, 20, 15, 14, 8];
    let somme = 0;

    for (i = 0; i < array.length; i++){
        somme += array[i];
    }

    console.log(somme);
}

// calc();

// Exercice 11
function tab(stud){
    stud = parseInt(prompt("Nombre d'éleve :"))
    
    for(i = 1; i <= stud; i++){
        let result = parseInt(prompt("Veuillez entrez la note de l'éleve."))
    }
}

// tab();

// Exercice 12
function tab2(stud){
    stud = parseInt(prompt("Nombre d'éleve :"))
    let array = []
    
    for(i = 1; i <= stud; i++){
        let result = parseInt(prompt("Veuillez entrez la note de l'éleve."))
        array.push(result)
    }

    let toto = array.filter(result => result >= 10)
    alert("Il y'a " + toto.length + " au dessus de la moyenne");
}

// tab2();

// Exercice 13
function tab3() {
    let nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];
    let tall = 0;

    for(j = 0; j < nbres.lenght; j++){
        for(i = 0; i < nbres.lenght; i++){
            if (nbres[j][i] > tall){
                tall = nbres[j][i];
            }
        }
    }

    alert(tall);
}

// tab3();

// Exercice 14
function mdp(){
    let mdpp = prompt("Entrez un mot de passe");

    alert(mdpp.lenght);
}

// mdp();

// Exercice 15
function jeuu(nombre) {
    var cible = Math.round(Math.random() * 5);

    for (compteur = 1; compteur >= 0; compteur++) {
        nombre = parseInt(prompt("donnez un chiffre:"));

        if (nombre === cible) {
            alert("C'est gagné !");
            break;
        }

        else if (nombre > cible) {
            alert("trop grand");
        }

        else if (nombre < cible) {
            alert("trop petit");
        }

        else {
            alert("ce n'est pas un chiffre");
        }

    }
}

// jeuu();

// Exercice 16
function para(a, b){
    a = parseInt(prompt("Donnez un chiffre :"));
    b = parseInt(prompt("Donnez un chiffre :"));

    if(a > b){
        alert(0);
    } else{
        alert(1);
    }
}

// para();