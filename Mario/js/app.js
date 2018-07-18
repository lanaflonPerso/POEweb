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

    check: function (joueur, item) {
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
            $(item).css({ 'left': '101%' });
            if (item == '#piece') {
                score.increment();
                Scroll.scroll(item, 3000);
            }
            else {
                score.decrement();
                Scroll.scroll(item, 2000);
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
Scroll.scroll('#piece', 3000);
Scroll.scroll('#carapace', 2000);
setInterval(function () { Collision.check('#player', '#piece') }, 10);
setInterval(function () { Collision.check('#player', '#carapace') }, 10);
