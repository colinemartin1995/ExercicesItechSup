/*
Considérant l'interface et la classe suivante :
*/
class Personne {
  private nom: string;
  private prenom: string;
}

interface Contact extends Personne {
  telephone: number;
}

/*
Indiquer la hiérachie de type pour chacune des classes suivantes
sous la forme d'un commentaire au dessus de la définition
*/

/*La Personne est étendue à la classe Etudiant*/
class Etudiant extends Personne {}


class Professeur {
  private nom: string;
  private prenom: string;
  telephone: number;
}

/* La déclaration suivante n'est pas valide.
Expliquez dans un commentaire.

*/

class Stagiaire extends Personne implements Contact {
  telephone: number;
}
