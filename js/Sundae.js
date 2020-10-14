$(".icon-heart").click(function () {
    $(".icon-heart").addClass("heart-clicked");

    var likes = 32;
    $("#num-like").html(likes + 1 + " Likes");

});


$(".star-1").click(function () {
    $(".star-1").removeClass("star-clicked");
    $(".star-2").removeClass("star-clicked");
    $(".star-3").removeClass("star-clicked");
    $(".star-4").removeClass("star-clicked");
    $(".star-5").removeClass("star-clicked");

    $(".star-1").addClass("star-clicked");

    $("#starRatingResult").html("Thanks! You rated 1 star.");
});
$(".star-2").click(function () {
    $(".star-1").removeClass("star-clicked");
    $(".star-2").removeClass("star-clicked");
    $(".star-3").removeClass("star-clicked");
    $(".star-4").removeClass("star-clicked");
    $(".star-5").removeClass("star-clicked");

    $(".star-1").addClass("star-clicked");
    $(".star-2").addClass("star-clicked");

    $("#starRatingResult").html("Thanks! You rated 2 stars.");
});
$(".star-3").click(function () {
    $(".star-1").removeClass("star-clicked");
    $(".star-2").removeClass("star-clicked");
    $(".star-3").removeClass("star-clicked");
    $(".star-4").removeClass("star-clicked");
    $(".star-5").removeClass("star-clicked");

    $(".star-1").addClass("star-clicked");
    $(".star-2").addClass("star-clicked");
    $(".star-3").addClass("star-clicked");

    $("#starRatingResult").html("Thanks! You rated 3 stars.");
});
$(".star-4").click(function () {
    $(".star-1").removeClass("star-clicked");
    $(".star-2").removeClass("star-clicked");
    $(".star-3").removeClass("star-clicked");
    $(".star-4").removeClass("star-clicked");
    $(".star-5").removeClass("star-clicked");

    $(".star-1").addClass("star-clicked");
    $(".star-2").addClass("star-clicked");
    $(".star-3").addClass("star-clicked");
    $(".star-4").addClass("star-clicked");

    $("#starRatingResult").html("Thanks! You rated 4 stars.");
});
$(".star-5").click(function () {
    $(".star-1").removeClass("star-clicked");
    $(".star-2").removeClass("star-clicked");
    $(".star-3").removeClass("star-clicked");
    $(".star-4").removeClass("star-clicked");
    $(".star-5").removeClass("star-clicked");

    $(".star-1").addClass("star-clicked");
    $(".star-2").addClass("star-clicked");
    $(".star-3").addClass("star-clicked");
    $(".star-4").addClass("star-clicked");
    $(".star-5").addClass("star-clicked");

    $("#starRatingResult").html("Thanks! You rated 5 stars.");
});









//
//if($(".icon-heart").css("color","red"))
//    {
//        var likes=32;
//        $("#num-like").html(likes+1);
//        
//    }
//else
//    {
//        var likes=32;
//        $("#num-like").html(likes);
//        
//    }
