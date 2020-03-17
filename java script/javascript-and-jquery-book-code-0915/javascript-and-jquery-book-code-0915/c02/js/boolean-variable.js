
var inStock;
var shipping;
inStock = true;
shipping = false;



var tit = document.getElementById('tit');
tit.textContent = 'ClassName';


var elStock = document.getElementById('stock');
elStock.className = inStock;

var aa = document.getElementById('content');

setInterval(function(){
aa.className = 'active';},2000); // 계속해서 n초마다 실행됨


/* 
aa의 값을 div id=content로 잡는다 
aa 변수값의 className를 active로 지정한다 
*/


// aa.innerHTML = "<br>"; >> 값을 넣음
//var bb = aa.innerHTML // >> 값을 가져옴


var elShip = document.getElementById('shipping');
elShip.className = shipping;
