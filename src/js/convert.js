convert = {
    devise : this.devise,
    price : this.price,
    formule : this.formule,
    save : this.save
};

devise = $('select').val();

var elementDevise = $('devise');

elementDevise.on('change', function() {
    newDevise = this.find("option:selected").val();
    if (newDevise !== devise) {
        switch(devise) {
            case 'Euro' :
                elementDevise.val('€');
                break;

            case 'Livre' :
                elementDevise.val('£');
                break;

            case 'Dollar US' :
                elementDevise.val('$');
                break;
        }
    } else {

    }
});

var dataPrice = $('tbody td.prix');
var dataFormule = $('tbody td.formule');
var dataSave = $('tbody td.economie');

var arrPrice = dataPrice.map(function(){
    return $(this).text();
}).get();

var arrFormule = dataFormule.map(function(){
    return $(this).text();
}).get();

var arrSave = dataSave.map(function(){
    return $(this).text();
}).get();

console.log(arrPrice);
console.log(arrFormule);
console.log(arrSave);

$.each(arrPrice, function(){

});