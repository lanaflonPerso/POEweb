var cpt1 = 'cptCourant';
var cpt2 = 'cptA';

function doTransfert(expediteur, destinataire){
    var amount = parseInt($('#' + expediteur + 'DoTransfert').val());

    var amountExpediteur = parseInt($('#' + expediteur + 'Total').text()) - amount;
    var amountDestinataire = parseInt($('#' + destinataire + 'Total').text()) + amount;

    $('#' + expediteur + 'Total').text(amountExpediteur + '€');
    $('#' + destinataire + 'Total').text(amountDestinataire + '€');

    $('#' + expediteur + 'List').append('<li>Mon opération : -' + amount + '€</li>');
    $('#' + destinataire + 'List').append('<li>Mon opération : +' + amount + '€</li>');

    $('#' + expediteur + 'DoTransfert').val('');
}

$('#' + cpt1 + ' form').on('submit', function(){
    doTransfert(cpt1, cpt2);
    return false;
});

$('#' + cpt2 + ' form').on('submit', function(){
    doTransfert(cpt2, cpt1);
    return false;
});