var Slider = {
    id: '',
    nbSlides: 0,
    widthTotal: 0,
    actualPos: 0,
    init: function (id, nbSlides) {
        var self = this;
        self.id = id;
        self.nbSlides = nbSlides;
        self.widthTotal = 100 * nbSlides;

        var rollover = setInterval(function () {
            self.nextSlide();
        }, 2500);

        $('#monSliderArrows').on('mouseover', function () {
            clearInterval(rollover)
        });

        $('#monSliderArrows').on('mouseout', function () {
            rollover = setInterval(function () { self.nextSlide(); }, 2500)
        });

        $('#monSliderArrows div:first-child').on('click', function () {
            self.previousSlide();
        });

        $('#monSliderArrows div:last-child').on('click', function () {
            self.nextSlide();
        });

    },
    nextSlide: function () {
        var self = this;
        var nextPos = '-' + (self.actualPos + 1) % self.nbSlides * 100 + '%';
        self.actualPos += 1 % self.nbSlides;
        $('#monSliderContent').css('left', nextPos);
    },
    previousSlide: function () {
        var self = this;
        var previousPos = (self.actualPos + 1) % self.nbSlides * 100 + '%';
        self.actualPos -= 1 % self.nbSlides;
        $('#monSliderContent').css('left', this.previousPos);
    }
}

var Film = {
    nbreFilm: 0,
    titre: "",
    imgUrl: "",
    init: function (titre, url) {
        this.titre = titre;
        this.nbreFilm++;
        this.imgUrl = url;
    },
    create: function (titre, url) {
        this.init(titre, url);
        $("#monSliderContent").append("<div id=monSliderSlide" + this.nbreFilm + " class=slide><p>" + this.titre + "</p></div>");
        var id = "#monSliderSlide" + this.nbreFilm;
        $(id).css({
            "background" : "url(" + url + ")  center no-repeat",
            "background-size" : "cover",

        });
        console.log($(id).css("background-color"));
    }
}

Film.create("12 Hommes En Colere", "https://media.senscritique.com/media/000017376503/1200/12_hommes_en_colere.jpg");
Film.create("Case Depart", "https://www.critikat.com/wp-content/uploads/2011/07/arton4929.jpg");
Film.create("Dallas Buyers Club", "http://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-06/dallas1.jpg");
Film.create("Deathgasm", "http://deathgasmthemovie.com/wp-content/uploads/DG1.jpg");
Film.create("Dodgeball", "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/dodgeballhed.png?itok=2VMX-jwo");
Film.create("Edge of Tomorrow", "http://lesblogueusesduweb.fr/wordpress/wp-content/uploads/2014/07/edge-of-tomorow-02.jpg");

Slider.init('monSlider', Film.nbreFilm);
