var x=document.getElementById('sscreen');
var y=document.getElementById('sbtn');
var i;
i=1;

	y.onclick=function(){
		x.innerText=i;
		i=i+1;
	}
	var ss;
ss='v';
y.style.marginBottom='1400px'
window.onresize=function(){
if(ss='v'){
y.style.marginBottom='1400px'; ss='h'}
else{y.style.marginBottom='400px';ss='v' }}