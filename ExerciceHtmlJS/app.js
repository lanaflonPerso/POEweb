function displayContenu() {
    $.ajax({
        url: 'content.html',
        dataType: 'html',
        success: function (results, status) {
            $('#content').html(results);
        },
        error: function (results, status, code) {
            alert('ko');

        },
        complete: function (results, status) {
        }
    })
    $('a').text('Cacher le contenu');
}

function hideContenu() {
    $('a').text('Afficher le contenu');
    $('#content').html('');
}

$('a').on('click', function () {
    if ($('#content').text() != '') {
        hideContenu();
        return false;
    }
    else {
        displayContenu();
        return false;
    }
})
