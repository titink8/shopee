var puShown=false;var PopWidth=1370;var PopHeight=800;var PopFocus=0;var _Top=null;function GetWindowHeight(){var myHeight=0;if(typeof(_Top.window.innerHeight)=='number'){myHeight=_Top.window.innerHeight;}else if(_Top.document.documentElement&&_Top.document.documentElement.clientHeight){myHeight=_Top.document.documentElement.clientHeight;}else if(_Top.document.body&&_Top.document.body.clientHeight){myHeight=_Top.document.body.clientHeight;}
return myHeight;}
function GetWindowWidth(){var myWidth=0;if(typeof(_Top.window.innerWidth)=='number'){myWidth=_Top.window.innerWidth;}else if(_Top.document.documentElement&&_Top.document.documentElement.clientWidth){myWidth=_Top.document.documentElement.clientWidth;}else if(_Top.document.body&&_Top.document.body.clientWidth){myWidth=_Top.document.body.clientWidth;}
return myWidth;}
function GetWindowTop(){return(_Top.window.screenTop!=undefined)?_Top.window.screenTop:_Top.window.screenY;}
function GetWindowLeft(){return(_Top.window.screenLeft!=undefined)?_Top.window.screenLeft:_Top.window.screenX;}
function doOpen(url){var popURL="about:blank"
var popID="ad_"+Math.floor(89999999*Math.random()+10000000);var pxLeft=0;var pxTop=0;pxLeft=(GetWindowLeft()+(GetWindowWidth()/2)-(PopWidth/2));pxTop=(GetWindowTop()+(GetWindowHeight()/2)-(PopHeight/2));if(puShown==true){return true;}
var PopWin=_Top.window.open(popURL,popID,'toolbar=0,scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,top='+pxTop+',left='+pxLeft+',width='+PopWidth+',height='+PopHeight);if(PopWin){puShown=true;if(PopFocus==0){PopWin.blur();if(navigator.userAgent.toLowerCase().indexOf("applewebkit")>-1){_Top.window.blur();_Top.window.focus();}}
PopWin.Init=function(e){with(e){Params=e.Params;Main=function(){if(typeof window.mozPaintCount!="undefined"){var x=window.open("about:blank");x.close();}
var popURL=Params.PopURL;try{opener.window.focus();}catch(err){}
window.location=popURL;}
Main();}};PopWin.Params={PopURL:url}
PopWin.Init(PopWin);}
return PopWin;}
function setCookie(name,value,time){var expires=new Date();expires.setTime(expires.getTime()+time);document.cookie=name+'='+value+'; path=/;'+'; expires='+expires.toGMTString();}
function getCookie(name){var cookies=document.cookie.toString().split('; ');var cookie,c_name,c_value;for(var n=0;n<cookies.length;n++){cookie=cookies[n].split('=');c_name=cookie[0];c_value=cookie[1];if(c_name==name){return c_value;}}
return null;}
function initPu(){_Top=self;if(top!=self){try{if(top.document.location.toString())_Top=top;}catch(err){}}
if(document.attachEvent){document.attachEvent('onclick',checkTarget);}else if(document.addEventListener){document.addEventListener('click',checkTarget,false);}}
function checkTarget(e){if(!getCookie('popundr')){var e=e||window.event;var win=doOpen('//api.indihub.xyz');setCookie('popundr',1,24*60*60*1000);}}
initPu();
