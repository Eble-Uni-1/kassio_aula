$(function(){
    $('.coordenadas').mouseenter(function(){
        $('.valores').fadeIn();
    });
    $('.coordenadas').mousemove(function(e){

        var posicoes = $(this).offset();

        var x = e.clienteX - posicoes.left;
        var y = e.clienteX - posicoes.rigth;

        $('.valores').html(`coordenadas x: ${x} e y: ${y}`);



    });
    $('.coordenadas').mouseout(function(){
        $('.valores').fadeOut();
    });
});