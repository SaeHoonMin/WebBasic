/**
 * Created by aaa on 2016-01-13.
 */

$(document).ready(function(){
   $(window).on("scroll",function(){
       //스크롤 한 만큼의 거리를 저장
       var scrlDist = $(this).scrollTop();
       $("p").text(scrlDist);
   })
});