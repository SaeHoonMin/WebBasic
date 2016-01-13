/**
 * Created by aaa on 2016-01-13.
 */

/*
    $(this) : 반복되는 수 많은 선택자 중에
             실제 사용자에 의해 이벤트가 발생한
             바로 그 요소만 선택자로 자동 선택해 줌
 */


$(document).ready(function(){
/*
   $("li").eq(0).on("click",function(){
       $("li").eq(0).css({"color":"red"})
   })

    $("li").eq(1).on("click",function(){
       $("li").eq(1).css({"color":"red"})
   })

    $("li").eq(2).on("click",function(){
       $("li").eq(2).css({"color":"red"})
   })

    $("li").eq(3).on("click",function(){
       $("li").eq(3).css({"color":"red"})
   })
*/

    $("li").on("click",function(){
        $(this).css({"color":"red"});
    })
});