// JavaScript Document
var arr=[0,0,0,0,0,0,0,0,0,0];
var sort_num;
var key;
var boxid;
var creatediv;
var removediv;
var hasharr=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
$(document).ready(function(){
$("button#sort_btn").click(function(){
	sort_num=$('#input').val();
	window.console.log("sort_num"+sort_num);
	key=parseInt(sort_num)%10;
	var c;
	var cou=0;
	for(c=0;c<5;c++){
		if(hasharr[key][c]==parseInt(sort_num)){
			cou=1;
			break;
		}
	}
	if(cou==0){
		window.console.log(key);
		if(arr[key]<5){
			boxid="li#table"+key+arr[key];
			creatediv="<div class=\"box\" id=\"hashlist"+key+arr[key]+"\">"+sort_num+"</div>";
			window.console.log(boxid);
			hasharr[key][arr[key]]=parseInt(sort_num);
			$(boxid).html(creatediv);
			arr[key]++;
			window.console.log(arr);
			window.console.log(hasharr);
		}
		else{
		alert("写不动sry，只显示五个")
		}
	}
	else{
		alert("哈希表禁止输入重复数字")
	}
	
	
});
$("button#remove_btn").click(function(){
	sort_num=$('#input').val();
	window.console.log("sort_num"+sort_num);
	key=sort_num%10;
	window.console.log(key);
	var i=0;
	var count=0;
	for(i=0;i<arr[key];i++){
		if(hasharr[key][i]==sort_num){
			count=1;
			break;
		}
	}
		if(count==0){
			alert("查找失败")
		}
		else{
			removediv="#hashlist"+key+i;
			hasharr[key][i]=0;
			window.console.log(boxid);
			$(removediv).remove();
			var j;
			for(j=i+1;j<arr[key];j++){
				removediv="#hashlist"+key+j;
				$(removediv).remove();
				hasharr[key][j-1]=hasharr[key][j];
				hasharr[key][j]=0;
			}
			arr[key]--;
			window.console.log(hasharr);
			for(j=0;j<5;j++){
				if(hasharr[key][j]!=0){
					boxid="li#table"+key+j;
					creatediv="<div class=\"box\" id=\"hashlist"+key+j+"\">"+hasharr[key][j]+"</div>";
					$(boxid).html(creatediv);
				}
			}
		}
		
		window.console.log(arr);
});
});