$('body').on('submit', 'form', function (e) {
    if (this.id == "connectId") {
        Chat.connect();
    }
    else {
        Message.write();
    }
    return false;
})