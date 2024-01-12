$(function(){
    $(".fast-search-div-li").mouseover(function(){
        $(this).css({"background-color":"#0080ff"}).children("a").css({color:"white"});
        
    }).mouseout(function(){
        $(this).css({"background-color":""}).children("a").css({color:""});
    });
});

$(function(){
    $("#fast-search-ul-div > ul").mouseover(function(){
        $("#fast-search-div").show().stop().animate({width:"664px"},200);
    }).mouseleave(function(){
        $("#fast-search-div").hide().css("width","auto");
    });
});