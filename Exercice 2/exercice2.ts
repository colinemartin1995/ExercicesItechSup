/*
Dans ce fichier, écrire un nombre arbitraire de fonctions.
Ces fonctions doivent faire appel à chacun des types basiques
de Typescript.
Bien entendu, chaque fonction ne doit pas faire à tous les types,
mais tous les types doivent être présent au moins une fois dans vos fonctions

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/
function saluer(nom: string): string {
    return nom;
}
function saluer(nom: string): void {
    console.log(nom);
}
function bool(ok: boolean): boolean{
    return true;
}
function tableau() {
    let list: number[] = [1,2,3,4];
    return list;
}
function afficherTuple(): number{
    let x: [number,string] = [1, "coucou"];
    return x[0];
}

enum Size{Small,Medium,Large}
function choixTaille(maTaille:Size): string{
    return Size.Small;
}

function afficherToto(): void{
    console.log("je m'appelle toto!");
}

function afficherAny(){
     let myAny = 30;
     return myAny;
}
function afficherNever(): never{
    while(true){

    }

}
function afficherNull(): null{
    let toto = null;
    return toto;
}
function afficher(): undefined{
  let toto: string;
  return undefined;
 }
