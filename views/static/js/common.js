define(["jquery","template","cookie"],function ($,template) {
	$(function () {
		if("/dashboard/login" != location.pathname){

				var userInfo = JSON.parse($.cookie("userinfo"));
				console.log(userInfo)
				var html = template("profile-tpl",userInfo);

				$("#userinfo").html(html);

			}


		$("#logout").click(function () {
			$.ajax({
				url:"/api/logout",
				type:"post",
				success: function (data) {
					if(data.code == 200){
						location.href = "/dashboard/login"
					}
				}
			})
		})
	})

})