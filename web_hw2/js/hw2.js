/**
 * Created by sist on 2016-01-06.
 *  힌트 : 1)클릭이벤트 처리.
 *         2)The val() method
 *           -returns or sets the value attribute of the selected elements.
 *         3)if~else if문
 *         4)alert문
 */
$(document).ready(function(){
    $("#btn").click(function(){
        var age = $("#inputText").val();

        age = parseInt(age);

        if(age>=19)
            alert("성인입니다");
        else if(age<19)
            alert("미성년자입니다");
        else
            alert("아무것도 입력하지 않았음..");

    });
});