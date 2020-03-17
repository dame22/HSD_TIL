// METHOD 1
var price = 5;
var h2 = document.getElementById('h2').textContent;
// html에 선언된 id를 불러오고 해당 내용에 텍스트만 불러온다는 내용,,
console.log(h2.length);

var quantity = h2.length;
var total = price * quantity;

/* METHOD 2
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

/* METHOD 3
var price = 5, quantity = 14;
var total = price * quantity;
*/


var el = document.getElementById('cost'); 
el.textContent = '$' + total;



