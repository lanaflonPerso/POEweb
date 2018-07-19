var Chat = {
    username: '',
    connect: function () {
        var self = this;
        self.username = $('#wrapperId #pseudoInput').val();
        $('#wrapperId').remove();
        $.ajax({
            url: 'index.html',
            dataType: 'html',
            success: function (r, s) {
                $('body').html(r);
                $('#userList').append('<li> ' + self.username + '</li>');
            }
        });
        
    }
}

var Message = {
    username: '',
    message: '',
    write: function () {
        var self = this;
        self.message = $('#inputMessage form input[type="text"]').val();
        self.username = Chat.username;
        $('#allMessages').append('<div class="message"><h1> ' + self.username + '</h1><p> ' + self.message + '</p></div>')
        $('#inputMessage form input[type="text"]').val('');
    }
}