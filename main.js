$( document ).ready(function() {

    var boton = $('#button-submit');
    var email= $('#email'); 
    var password = $('#password');

    boton.click(function(){

        var emailConfirm = email.val();
        var passConfirm = password.val();

        var credenciales = { "mail": emailConfirm, "password": passConfirm }

        console.log(JSON.stringify(credenciales));

        fetch('https://reqres.in/api/login', {
            method : 'POST',
            body : JSON.stringify(credenciales),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res=>res.json())

        
    });




    //ventanas modales de status de sedes
    var modales = $('.small-box-footer');

    modales.click( function(){
        
        $(this).find(".inhabilitadas").slideToggle();
        $(this).find(".estables").slideToggle();
        $(this).find(".alerta").slideToggle();
        $(this).find(".alarma").slideToggle();
    });




    //modal descripcion cada uno

    var bolivar = $('#VEN39');
    var guarico = $('#VEN45');
    var miranda = $('#VEN47');
    var falcon = $('#VEN23');
    var apure = $('#VEN25');
    var barinas = $('#VEN26');
    var merida = $('#VEN27');
    var tachira = $('#VEN28');
    var trujillo = $('#VEN29');
    var zulia = $('#VEN31');
    var cojedes = $('#VEN32');
    var carabobo = $('#VEN33');
    var lara = $('#VEN34');
    var portuguesa = $('#VEN35');
    var yaracuy = $('#VEN36');
    var amazonas = $('#VEN38');
    var anzoategui = $('#VEN40');
    var aragua = $('#VEN41');
    var vargas = $('#VEN42');
    var distritoCapital = $('#VEN43');
    var dependenciasFederales = $('#VEN44');
    var monagas = $('#VEN46');
    var nuevaEsparta = $('#VEN48');
    var Sucre = ('#VEN49');
    var deltaAmacuro = $('#VEN65');


    bolivar.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-bolivar').slideToggle();
    });

    guarico.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-guarico').slideToggle();
    });

    miranda.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-miranda').slideToggle();
    });

    falcon.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-falcon').slideToggle();
    });

    apure.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-apure').slideToggle();
    });

    barinas.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-barinas').slideToggle();
    });

    merida.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-merida').slideToggle();
    });


    tachira.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-tachira').slideToggle();
    });


    trujillo.click(function(){
        $(this).css('cursor', 'pointer');
        $('.estado-trujillo').slideToggle();
    });


})
