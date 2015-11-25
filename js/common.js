//鼠标滚轮
function addWheel(obj, fn)
{
	if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
	{
		obj.addEventListener('DOMMouseScroll', function (ev){
				var down=ev.detail>0 ? true : false;
				fn(down);
		}, false);
	}
	else
	{
		obj.onmousewheel=function (){
			var down=event.wheelDelta>0 ? false : true;
			fn(down);
		};
	}
}



function addEvent(obj, sEv, fn)
{
	if (obj.addEventListener)
	{
		obj.addEventListener(sEv, fn, false);
	}
	else
	{
		obj.attachEvent('on'+sEv, fn);
	}
}

function removeEvent(obj, sEv, fnName)
{
	if (obj.removeEventListener)
	{
		obj.removeEventListener(sEv, fnName, false);
	}
	else
	{
		obj.detachEvent('on'+sEv, fnName);
	}
}

function ready(fn)
{
	if (document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded', fn, false);
	}
	else
	{
		document.attachEvent('onreadystatechange', function (){
			if (document.readyState == 'complete')
			{
				fn();
			}
		});
	}
}

function getByClass(oParent, sName)
{
	if (oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sName);
	}
	else
	{
		var aChild=oParent.getElementsByTagName('*');
		var aRes=[];
		
		for (var i=0; i<aChild.length; i++)
		{
			var obj=aChild[i];
			var aTmp=obj.className.split(' ');
			if (findInArr(aTmp, sName) == true)
			{
				aRes.push(obj);
			}
		}

		return aRes;
	}	
}

function findInArr(aTmp,sName){
	for(var i=0;i<aTmp.length;i++){
		if(aTmp[i]==sName){
			return true;
		}
		return false;
	}

}