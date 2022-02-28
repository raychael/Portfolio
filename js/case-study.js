console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $('.nav2').click(function(){
        console.log("Header click");
        $('html, body').animate({scrollTop:($('#overview').offset().top - 0)},500);
    });
});

$(document).ready(function(){
    $('.nav3').click(function(){
        console.log("Header click");
        $('html, body').animate({scrollTop:($('#research').offset().top - 100)},500);
    });
});

$(document).ready(function(){
    $('.nav4').click(function(){
        console.log("Header click");
        $('html, body').animate({scrollTop:($('#ideation').offset().top - 100)},500);
    });
});

$(document).ready(function(){
    $('.nav5').click(function(){
        console.log("Header click");
        $('html, body').animate({scrollTop:($('#low').offset().top - 100)},500);
    });
});

$(document).ready(function(){
    $('.nav6').click(function(){
        console.log("Header click");
        $('html, body').animate({scrollTop:($('#outcomes').offset().top - 100)},500);
    });
});

$(document).ready(function(){
    $('.nav7').click(function(){
        console.log("Header click");
        $('html, body').animate({scrollTop:($('#style').offset().top - 100)},500);
    });
});