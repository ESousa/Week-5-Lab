<script type="text/javascript" src="jquery.js"></script>




				<script>


					$("#nav1,#nav2,#nav3,#nav4").addClass("contentBox");






					$("#nav li").mouseover(function(){
					$(this).animate({marginTop: "-10px"},500);
					});$("#nav li").mouseleave(function(){
					$(this).animate({marginTop: "0px"},500);
					});


					//animation nav1button
					function changeNav1() {
					$("#nav1").show(500);
					$("#nav2").hide(500);
					$("#nav3").hide(500);
					$("#nav4").hide(500);


					}
					$("#nav1button").on("click",changeNav1);






					//animation nav2button
					function changeNav2() {
					$("#nav1").hide(500);
					$("#nav2").show(500);
					$("#nav3").hide(500);
					$("#nav4").hide(500);


					}
					$("#nav2button").on("click",changeNav2);


					//animation nav3button
					function changeNav3() {
					$("#nav1").hide(500);
					$("#nav2").hide(500);
					$("#nav3").show(500);
					$("#nav4").hide(500);


					}
					$("#nav3button").on("click",changeNav3);




					//animation nav4button
					function changeNav4() {
					$("#nav1").hide(500);
					$("#nav2").hide(500);
					$("#nav3").hide(500);
					$("#nav4").show(500);


					}
					$("#nav4button").on("click",changeNav4);






		</script>
