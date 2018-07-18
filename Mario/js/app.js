var inJump = false;

var Player = {

    jump: function () {
        if (inJump === false) {
            inJump = true;
            $('#player').animate({ 'bottom': '20%' }, 400, function () {
                $('#player').animate({ 'bottom': '15px' }, 400, function () {
                    inJump = false;
                });
            });
        }
    }
}

var Scroll = {
    scroll: function (div, temps) {
        $(div).animate({ 'left': '-100%' }, temps, "linear", function () {
            $(div).animate({ 'left': '101%' }, 0, function () { Scroll.scroll(div, temps) })
        });
    }
}



var ScrollCos = {
    rand: 0,
    scroll: function (div, temps) {
        var self = this;
        self.rand = 50+ Math.random() * 500;
        $(div).animate({ 'bottom': self.rand }, temps / 5, function () {
            $(div).animate({ 'left': '-100%' }, temps, "linear", function () {
                $(div).animate({ 'left': '101%' }, 0, function () { ScrollCos.scroll(div, temps) })
            });
        });
    }
}

var score = {
    value: 0,
    increment: function () {
        var self = this;
        self.value++;
    },
    decrement: function () {
        var self = this;
        self.value--;
    }
}

var Collision = {
    rand: 0,
    check: function (joueur, item) {
        var self = this;
        self.rand = 100 + Math.random() * 100;
        var player = {
            x: parseFloat($(joueur).css('left')),
            y: parseFloat($(joueur).css('top')),
            width: parseFloat($(joueur).css('width')),
            height: parseFloat($(joueur).css('height'))
        }
        var piece = {
            x: parseFloat($(item).css('left')),
            y: parseFloat($(item).css('top')),
            width: parseFloat($(item).css('width')),
            height: parseFloat($(item).css('height'))
        }

        if (piece.x < player.x + player.width &&
            piece.x + piece.width > player.x &&
            piece.y < player.y + player.height &&
            piece.height + piece.y > player.y) {
            $(item).stop();
            $(item).css({ 'left': self.rand + '%' });
            if (item == '#piece') {
                score.increment();
                Scroll.scroll(item, 4000);
            }
            else if (item == '#carapace') {
                score.decrement();
                Scroll.scroll(item, 3000);
            }
            else {
                score.decrement();
                ScrollCos.scroll(item, 5000);
            }
            if (score.value <= 0) {
                score.value = 0;
            }
            $('#score').text(score.value);



        }
    }
}

var decor = {
    move: function (div) {
        var x = 0;
        setInterval(function () {
            x -= 1;
            $(div).css('background-position', x + 'px 0');
        }, 10);
    }
}

decor.move('#sky');
decor.move('#road');
Scroll.scroll('#piece', 4000);
Scroll.scroll('#carapace', 3000);
ScrollCos.scroll('#caravolante', 5000);
setInterval(function () { Collision.check('#player', '#piece') }, 10);
setInterval(function () { Collision.check('#player', '#carapace') }, 10);
setInterval(function () { Collision.check('#player', '#caravolante') }, 10);
