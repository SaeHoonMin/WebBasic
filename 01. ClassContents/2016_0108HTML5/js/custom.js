/**
 * Created by aaa on 2016-01-08.
 */
/*

    1. 준비작업 및 전체 레이아웃 화면 구성
    2. 화면을 상하로 스크롤할 때, section 그룹을 좌우로 움직이기.
        (스크롤 되는 대상 : 브라우저 자체.)
 */
$(document).ready(function(){
    $(window).on("scroll",function(){
        //변수 scroll에 현재 스크롤 한 만큼의 거리를 저장.
        var scroll = $(this).scrollTop();
        //section의 left 값을 스크롤한 거리 만큼 마이너스 값으로 이동
        $("section").stop().animate({
            "left":-scroll},600)
    });
})