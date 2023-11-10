
// JavaScript Document

var i;
var idlist= ["0","1","2","3","4","5","6","7","8","9"];
var arr=[0,0,0,0,0,0,0,0,0,0];
var liid;
var divid;
var textid;
var heo;
$(document).ready(function(){
$("button.search_btn").click(function(){
	i=0;
	arr=[0,0,0,0,0,0,0,0,0,0];
	arr = $('#ars').val().split(",");
	window.console.log(arr);
	for(i=0;i<arr.length;i++){
		liid="li#box"+idlist[i];
		divid="div#bobo"+idlist[i];
		textid="li#tebox"+idlist[i];
		heo= 4*arr[i];
		var creatediv="<div class=\"b\" id=\"bobo"+idlist[i]+"\"></div>";
		var createnum="<div class=\"bt\" id=\"botext"+idlist[i]+"\">"+arr[i]+"</div>";
			$(liid).html(creatediv);
			$(divid).css("background-color","#8bb5be");
			$(divid).css("height",-heo);
			$(textid).html(createnum);
			$(divid).animate({
					height:heo,
			});
	}
});
$("button.sort_btn").click(function(){
	/*var soarr=bSort(arr);
	for(i=0;i<soarr.length;i++){
		heo= 4*soarr[i];
		liid="li#box"+idlist[i];
		divid="div#bobo"+idlist[i];
		textid="li#tebox"+idlist[i];
		divid="div#bobo"+idlist[i];
		$(textid).text(soarr[i]);
		$(divid).animate({
				height:heo,
		});
	}*/
	window.console.log("start");
	var len = arr.length;
	window.console.log("len="+len);
	var i=0;
    /*for (i = 0; i < len-1; i++) {
			window.console.log("i="+i);
			var sovid="div.b#bobo"+idlist[i];
            $(sovid).css("background-color","#d75241");
        window.console.log("change color");
      for (var j = 0; j < len - 1 - i; j++) {
          window.console.log("j="+j);
		if (arr[j] > arr[j + 1]) {
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }
      }
	$(sovid).css("background-color","#8bb5be");
	}*/
	var timer=setInterval(function(){
		if(i>len-1){
			var sovidlast="div.b#bobo"+idlist[len-1];
			$(sovidlast).css("background-color","#8bb5be");
			clearInterval(timer);
		}
		else{
			var sovid="div.b#bobo"+idlist[i];
			if(i==0){
                    sovid="div.b#bobo"+idlist[i];
					$(sovid).css("background-color","#d75241");
			}
            else{
					sovid="div.b#bobo"+idlist[i-1];
					$(sovid).css("background-color","#8bb5be");
					window.console.log("i="+i);
					sovid="div.b#bobo"+idlist[i];
					$(sovid).css("background-color","#d75241");
			}
			var j=i+1;
			var timer1=setInterval(function(){
				if(j>len){
					clearInterval(timer1);
				}
				else{
					if(j==i+1){
						sovid="div.b#bobo"+idlist[i];
						$(sovid).css("background-color","#ff8a27");
					}
					else{
						sovid="div.b#bobo"+idlist[j-1];
						$(sovid).css("background-color","#8bb5be");
						window.console.log("i="+i);
						sovid="div.b#bobo"+idlist[j];
						$(sovid).css("background-color","#ff8a27");
					}
				}
			},1000)
			i++;
		}
		
	},1000)
	
});
});