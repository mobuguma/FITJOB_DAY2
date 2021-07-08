console.log("Ready")

$(document).ready(function () {

    $(".menu-item").on("click", function () {
        $(".menu-item").removeClass("active")
        $(this).addClass("active")
    })

    $(".menu-1").on("click", function () {
        $(".img-container").attr("src", "img/bird_1.png")
        //attribute 변환
    })

    $(".menu-2").on("click", function () {
        $(".img-container").attr("src", "img/bird_2.png")
    })

    $(".menu-3").on("click", function () {
        $(".img-container").attr("src", "img/bird_3.png")
    })

    $(".title").on("click", function () {
        $(".menu-item").removeClass("active")
        $(".img-container").removeAttr("src")
    })

})
