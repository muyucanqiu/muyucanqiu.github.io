ready(function(){
	var oBox=document.getElementById('box');
	var oNav=getByClass(document,'nav')[0];
	var aLi=oNav.getElementsByTagName('li');
	var oMain=document.getElementById('main');
	var aMain=getByClass(document,'box');
	var top=0;
	var H=document.documentElement.clientHeight;
	var oC=document.getElementById('contact');
	var oN=document.getElementById('number');
	var oE=document.getElementById('email');

	oC.onmouseover=function(){
		oN.style.top=-50+'px';
		oE.style.top=-50+'px';
		oE.style.left=500+'px';
	}
	oC.onmouseout=function(){
		oN.style.top=0;
		oE.style.top=0;
		oE.style.left=500+'px';
	}

	oBox.style.height=H+'px';
	oMain.style.height=H+'px';
	for(var i=0;i<aMain.length;i++){
		aMain[i].style.height=H+'px';
	}

	for(var i=0;i<aLi.length;i++){
		+function(index){
			aLi[i].onclick=function(){
				oMain.style.top=-H*index+'px';
				top=-H*index;
			}
			aLi[i].onmouseover=function(){
				this.classList.add('hover')
			}
			aLi[i].onmouseout=function(){
				this.classList.remove('hover')
			}
		}(i)	
	}
	//鼠标滑轮
	addWheel(oMain, function (down){
		if (down)
		{
			// 下
			top-=H;
		}
		else
		{
			top+=H;
		}
		if (top > 0)
		{
			top=0;
		}
		else if (top < -H*3)
		{
			top=-H*3;
		}

		oMain.style.top=top+'px';
	});

	//Js部分
	+function(){
		var oJs=getByClass(document,'js')[0];
		var oTop=getByClass(oJs,'top')[0];
		var oBottom=getByClass(oJs,'bottom')[0];
		var aLi=oTop.getElementsByTagName('li');
		var aLiB=oBottom.getElementsByTagName('li');
		var aText=getByClass(oTop,'text');
		var aTextB=getByClass(oBottom,'text');

		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				aText[this.index].style.bottom=0;
			}
			aLi[i].onmouseout=function(){
				aText[this.index].style.bottom=-80+'px';
			}
		}
		for(var i=0;i<aLiB.length;i++){
			aLiB[i].index=i;
			aLiB[i].onmouseover=function(){
				aTextB[this.index].style.bottom=0;
			}
			aLiB[i].onmouseout=function(){
				aTextB[this.index].style.bottom=-80+'px';
			}
		}
	}();
	
	
	//H5部分
	+function(){
		var oH5=getByClass(document,'h5')[0];
		var aLi=oH5.getElementsByTagName('li');
		var aText=getByClass(oH5,'text');

		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				this.style.transform='rotateY(360deg)';
				aText[this.index].style.bottom=0;
			}
			aLi[i].onmouseout=function(){
				aText[this.index].style.bottom=-100+'px';
			}
		}
	}()	
})
	