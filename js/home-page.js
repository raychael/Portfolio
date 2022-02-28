console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $('.myworkheader').click(function(){
        console.log("Work header click");
        $('html, body').animate({scrollTop:($('#card1').offset().top - 140)},500);
    });
});