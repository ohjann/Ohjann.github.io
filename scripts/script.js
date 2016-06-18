$(document).ready(function(){

    $("a").each(function(){
        var font_size = Math.round(Math.random() * (6) + 1);
        $(this).css( "font-size", font_size + "em");
        var top_off = Math.round(Math.random() * ($(".main").height() - 1) + 1) - $(this).outerHeight();
        var left_off = Math.round(Math.random() * ($(".main").width() - 1) + 1) - $(this).outerWidth();
        console.log(top_off, left_off);
        $(this).css({
            "top": Math.abs(top_off) + "px",
            "left": Math.abs(left_off) + "px",
        });
        $(this).addClass("shadow");
    });

    $("a").click(function(){
        $(this).addClass("spin");
    });
});
