$(function(){
    $('nav ul li a').on('click', function(){
        $(this).addClass('on').
        parent('li').siblings('li').children('a').removeClass('on');
    });

    $('#modal1 .close').click(function(){
        $('#modal1').fadeOut();
    });
    $('#icon1').click(function(){
        $('#modal1').fadeIn();
    });

    $('#modal2 .close').click(function(){
        $('#modal2').fadeOut();
    });
    $('#logo1').click(function(){
        $('#modal2').fadeIn();
    });

    $('#modal3 .close').click(function(){
        $('#modal3').fadeOut();
    });
    $('#logo2').click(function(){
        $('#modal3').fadeIn();
    });

    $('#modal4 .close').click(function(){
        $('#modal4').fadeOut();
    });
    $('#app1').click(function(){
        $('#modal4').fadeIn();
    });

    $('#modal5 .close').click(function(){
        $('#modal5').fadeOut();
    });
    $('#web1').click(function(){
        $('#modal5').fadeIn();
    });

    $('#modal6 .close').click(function(){
        $('#modal6').fadeOut();
    });
    $('#web2').click(function(){
        $('#modal6').fadeIn();
    });

    $('#modal7 .close').click(function(){
        $('#modal7').fadeOut();
    });
    $('#ill1').click(function(){
        $('#modal7').fadeIn();
    });

    $('#modal8 .close').click(function(){
        $('#modal8').fadeOut();
    });
    $('#ill2').click(function(){
        $('#modal8').fadeIn();
    });

    $('#modal9 .close').click(function(){
        $('#modal9').fadeOut();
    });
    $('#ill3').click(function(){
        $('#modal9').fadeIn();
    });
});