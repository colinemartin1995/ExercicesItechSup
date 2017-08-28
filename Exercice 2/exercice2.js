/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function saluer(nom) {
    console.log('coucou ' + nom);
}
function bool(ok) {
    console.log(true);
}
function tableau() {
    var list = [1, 2, 3, 4];
    return list;
}
function afficherTuple() {
    var x = [1, "coucou"];
    return x[0];
}
function afficherEnum() {
    var size;
    (function (size) {
        size[size["Small"] = 0] = "Small";
        size[size["Medium"] = 1] = "Medium";
        size[size["Large"] = 2] = "Large";
    })(size || (size = {}));
    ;
    return size.Small;
}
function afficherToto() {
    console.log("je m'appelle toto!");
}
function afficherAny() {
    var myAny = 30;
    return myAny;
}
function afficherNever() {
    while (true) {
    }
}
function afficherNull() {
    var toto = null;
    return toto;
}
function afficher() {
    var toto;
    return undefined;
}
