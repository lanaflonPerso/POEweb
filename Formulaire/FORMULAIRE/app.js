var Formulaire = {
    values: {
        name: '',
        email: '',
        metier: ''
    },
    soumission: function (id) {
        var self = this;
        if (id == 'form1') {
            if ($('#name').val() == '' || $('#email').val() == '') {
                alert('Veuillez remplir tous les champs du formulaire')
            }
            else {
                $('li.active').removeClass('active');
                $('ul li:nth-child(2)').addClass('active');
                self.values.name = $('#name').val();
                self.values.email = $('#email').val();
                $.ajax({
                    url: 'ajax/form2.html',
                    dataType: 'html',
                    success: function (results, status) {
                        $('#contentForm').html(results);
                    },
                    error: function (results, status, code) {
                        alert('ko');

                    },
                    complete: function (results, status) {
                    },
                })
            }
        }
        else {
            $('li.active').removeClass('active');
            $('ul li:nth-child(3)').addClass('active');
            self.values.metier = $('#metier option:selected').text();
            $.ajax({
                url: 'ajax/final.html',
                dataType: 'html',
                success: function (results, status) {
                    $('#contentForm').html(results);
                    $('#infoMessage').text("Vous êtes " + self.values.name + " , votre adresse mail est " + self.values.email + " et vous êtes " + self.values.metier);

                },
                error: function (results, status, code) {
                    alert('ko');

                },
                complete: function (results, status) {

                }
            })
        }
    }
}

$('#contentForm').on('submit', 'form', function () {
    Formulaire.soumission(this.id);
    return false;
})