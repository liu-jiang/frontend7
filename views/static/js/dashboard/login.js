/**
 * Created by ply on 2017/6/29.
 */
define(["jquery","form","cookie"],function ($) {
    $("#login-form").submit(function () {
        $(this).ajaxSubmit({
            url:"/api/login",
            type:"post",
            success: function (data) {
                console.log(data)
                if(data.code == 200){
                    $.cookie("userinfo",JSON.stringify(data.result), {path: "/"});
                    location.href = "/";
                }
            }
        });
        return false
    })
})
