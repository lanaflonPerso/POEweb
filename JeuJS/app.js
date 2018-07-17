var PersonnageList = [];
var EnnemiList = [];
var Personnage = {
    listeJoueur: [],
    nom: '',
    sante: 0,
    force: 0,
    xp: 0,
    isAlive: true,
    initJoueur: function (nom, sante, force) {
        this.nom = nom;
        this.force = force;
        this.sante = sante;
    },
    create: function (listeJoueur) {
        var self = this;
        self.listeJoueur = listeJoueur;
        for (var i = 0; i < listeJoueur.length; i++) {
            var nomDuJoueur = listeJoueur[i][0];
            nomDuJoueur = Object.create(self);
            nomDuJoueur.initJoueur(listeJoueur[i][0], listeJoueur[i][1], listeJoueur[i][2]);
            self.nom = listeJoueur[i][0];
            self.sante = listeJoueur[i][1];
            self.force = listeJoueur[i][2];
            PersonnageList.push(nomDuJoueur);
            $('#joueurs').append("<div id='" + self.nom + "'> <h1>" + self.nom + "</h1> <p class='sante'> PV : " + self.sante + "</p><p class='force'> Force : " + self.force + "</p><p class='xp'> xp : " + self.xp + "</p> <form> <input id='" + self.nom + "bouton' type='button' value='Attaquer'></form></div>")
        }
    },
}
var Ennemi = {
    type: '',
    nom: '',
    sante: 0,
    force: 0,
    xp: 0,
    isAlive: true,
    initEnnemi: function (type, nom, sante, force, xp) {
        this.type = type;
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = xp;
    },
    create: function (ennemi) {
        var ennemi1 = ennemi[0];
        ennemi1 = Object.create(Ennemi);
        ennemi1.initEnnemi(ennemi[0], ennemi[1], ennemi[2], ennemi[3], ennemi[4]);
        EnnemiList.push(ennemi1);
        $('#ennemis').append("<div id = 'ennemi'> <h1>" + ennemi1.nom + " la " + ennemi1.type + "</h1> <p class='sante'> PV : " + ennemi1.sante + "</p> <p class='force'> Force : " + ennemi1.force + "<p></div>");
    },
    replace: function (ennemi) {
        var ennemi1 = ennemi[0];
        ennemi1 = Object.create(Ennemi);
        ennemi1.initEnnemi(ennemi[0], ennemi[1], ennemi[2], ennemi[3], ennemi[4]);
        EnnemiList[0].type = ennemi[0];
        EnnemiList[0].nom = ennemi[1];
        EnnemiList[0].sante = ennemi[2];
        EnnemiList[0].force = ennemi[3];
        EnnemiList[0].xp = ennemi[4];
        

        $('#ennemis h1').text(ennemi1.type + ' le ' + ennemi1.nom);
        $('#ennemis .sante').text('PV : ' + ennemi1.sante);
        $('#ennemis .force').text('Force : ' + ennemi1.force);
    }
}



Personnage.create([["Aragorn", 10, 10], ["Gandalf", 200, 200], ["Legolas", 200, 200], ["Gimly", 200, 200]]);
Ennemi.create(["Fourmi", "Mimi", 100, 10, 100]);

$('#Aragornbouton').on('click', function () {
    if (PersonnageList[0].sante > EnnemiList[0].force) {
        EnnemiList[0].sante -= PersonnageList[0].force;
        if (EnnemiList[0].sante >= 0) {
            $('#ennemi .sante').text('PV : ' + (EnnemiList[0].sante));
            PersonnageList[0].sante -= EnnemiList[0].force;
            if (PersonnageList[0].sante > 0) {
                $('#Aragorn .sante').text('PV : ' + PersonnageList[0].sante)
            }
            else {
                $('#Aragorn .sante').text('PV : 0')
            }
        }
        else {
            $('#ennemi .sante').text('PV : 0');
            PersonnageList[0].xp += EnnemiList[0].xp;
            $('#Aragorn .xp').text('xp : ' + PersonnageList[0].xp);
            EnnemiList[0].xp = 0;
            Ennemi.replace(["Orc", "Willy", 100, 20, 500]);
            console.log(EnnemiList[0].nom)
        }
    }
    else if (PersonnageList[0].sante != 0) {
        console.log(PersonnageList[0].sante);
        EnnemiList[0].sante -= PersonnageList[0].force;
        PersonnageList[0].sante = 0;
        $('#ennemi .sante').text('PV : ' + (EnnemiList[0].sante));
        $('#Aragorn').css('background-color', 'red');
        $('#Aragorn .sante').text('PV : 0')
    }
    else { };
})