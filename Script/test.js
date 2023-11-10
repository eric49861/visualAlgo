$(document).ready(function(){
	$("button").click(function(){
		$("div.i").css("background-color","red");
		var i=1000000000;
		while(i){
			i--;
		}
        setTimeout(function(){
			$("div.i").css("background-color","blue");
         },"10000");
		
		window.console.log("fuck");
	});
});