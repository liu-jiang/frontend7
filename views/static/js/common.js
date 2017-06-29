define(["jquery","template","cookie"],function ($,template) {

	if("/dashboard/login" != location.pathname){
		$(function () {
			var userInfo = JSON.parse($.cookie("userinfo"));
			console.log(userInfo)
			var html = template("profile-tpl",userInfo);

			$("#userinfo").html(html);
		})
	}

})