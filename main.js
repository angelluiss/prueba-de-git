$( document ).ready(function() {

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



    //      **  Modal de Sedes    **
    
    $('.modaltext').append("<div class='row'> <div class='col-10'><a href='./pages/centrales/centrales-miranda.html' style='color:white;'><h3>Estado Miranda</h3><small>Central Los Palos Grandes</small></a></div> <div class='col-2'><a href='./pages/centrales/centrales-miranda.html'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Falcón</h3><small>Central El Hatillo</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Guarico</h3><small>Central La Trinidad</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Trujillo</h3><small>Central Chacao</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Lara</h3><small>Central Las Mercedes</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Zulia</h3><small>Central El Cafetal</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Zulia</h3><small>Central Macaracuay</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Zulia</h3><small>Central Chuao</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");

    $('.modaltext').append("<div class='row'> <div class='col-10'><h3>Estado Zulia</h3><small>Central Los Cortijos</small></div> <div class='col-2'><a href='#'><i class='fas fa-chevron-right'></i></a></div> </div>");
    



    //      **  Modal de Estados **

    $('.description-estados').append(" <div class='row'> <div class='col-2'><i class='fas fa-check-circle' style='color:#27983fa6'></i></div> <div class='col-8'> <a href='pages/centrales/centrales-miranda.html' style='color:white;'><div style='border-bottom: 1px solid #525151;padding-bottom: 5px;'> <h3>Central Charallave</h3> <small>Direcciòn ... </small> </div></a> <div style='border-bottom: 1px solid #525151;padding-bottom: 5px;'> <h3>Central Santa Teresa</h3> <small>Direcciòn ... </small> </div> <div style='border-bottom: 1px solid #525151;padding-bottom: 5px;'> <h3>Central Ocumare III</h3> <small>Direcciòn ... </small> </div>  <div style='border-bottom: 1px solid #525151;padding-bottom: 5px;'> <h3>Central Palo Alto</h3> <small>Direcciòn ... </small> </div> <div style='border-bottom: 1px solid #525151;padding-bottom: 5px;'> <h3>Central Los Picachos</h3> <small>Direcciòn ... </small> </div> </div>  <div class='col-2'><a href='pages/centrales/centrales-miranda.html'><i class='fas fa-chevron-right' style='color: #5d5d5d;'></i></a> <i class='fas fa-chevron-right' style='color: #5d5d5d;margin: 25px;'></i> <i class='fas fa-chevron-right' style='color: #5d5d5d;'></i> <i class='fas fa-chevron-right' style='color: #5d5d5d;margin:25px;'></i> <i class='fas fa-chevron-right' style='color: #5d5d5d;'></i> </div> </div> ")


})
