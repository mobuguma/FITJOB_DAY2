console.log("Ready")

$(document).ready(function () {
    //document가 준비되었을 때 작동해라.
    //js보다 html이 느릴 경우에 js가 먼저 실행될 수 있다.
    //그럼 버튼 클릭 시 아무 이벤트도 일어나지 않음. error

    $(".my-btn").on("click", function () {
        //my-btn에 click 이벤트가 일어났을 때
        //console.log($(".box").css("background-color"))
        //요로케 쓰면 속성값을 가져오는 것!

        //console.log("my-btn clicked 꺄")
        //console 창에 "~~"를 찍어라.

        //$(".box").css("background-color", "e0e0e0")
        //.box의 css의 background-color를 e0e0e0으로 바꾸겠다
        //$(".box").css("margin-left", "30px")
        //$(".box").css("margin-top", "100px")
        //$(".box").css("border", "10px solid black")

        $('.box').addClass('active');
        //.box 클래스에 active라는 클래스 추가
    })
    //$("")에 들어가는 건 주어!
    //on log css 이거는 function을 뜻한다.

    $(".my-btn-2").on("click", function () {

        $('.box').removeClass('active');
        //.box 클래스에 active라는 클래스 삭제
    })
})

//method - .addClass()와 .removeClass()를 많이 쓴다.
