var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
Considérant l'interface et la classe suivante :
*/
var Personne = /** @class */ (function () {
    function Personne() {
    }
    return Personne;
}());
/*
Indiquer la hiérachie de type pour chacune des classes suivantes
sous la forme d'un commentaire au dessus de la définition
*/
/*La Personne est étendue à la classe Etudiant*/
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Etudiant;
}(Personne));
/*On étend la classe Personne à la classe Professeur; Professeur hérite des charactéristiques de Personne*/
var Professeur = /** @class */ (function (_super) {
    __extends(Professeur, _super);
    function Professeur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Professeur;
}(Personne));
/* La déclaration suivante n'est pas valide.
Expliquez dans un commentaire.
*/
var Stagiaire = /** @class */ (function () {
    function Stagiaire() {
    }
    return Stagiaire;
}());
