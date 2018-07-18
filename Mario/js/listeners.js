$(document).on('keydown', function (e) {
    if (e.keyCode == 32) {
        Player.jump();
    }
})