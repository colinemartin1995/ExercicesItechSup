/*
Partie 1
Créer une classe Personne avec deux attributs : nom et prenom
et une methode permettant à la personne de se présenter au travers d'un
message dans la console.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github
*/

class Personne{

    nom: string;
    prenom: string;

    constructor(nom: string, prenom: string){
      this.nom = nom;
      this.prenom = prenom;
    }

    sepresenter(): void{
         console.log('Bonjour je suis ${this.nom} ${this.prenom}')
    }
}
/*
Partie 2
Créer une classe étudiant, héritant de la classe personne
Ajout un attribut cursus sur l'étudiant prenant dans un énumération
de votre création.

Vérifier la bonne compilation de vote code, inspecter le code produit et
soumettre le résultat sur votre dépot github

*/
enum Cursus{
  Informatique,
  Droit,
  Mathematiques,
  Anglais
}

class Etudiant extends Personne{
    private cursus = Cursus.Droit;
}
