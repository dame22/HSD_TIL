// Create three variables to store the information needed.
var price;
var quantity;
var total;

// Assign values to the price and quantity variables.
price = 5;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;

// Get the element with an id of cost.
var el = document.getElementById('cost');
el.textContent = '$' + total;

// textContent >> 오로지 텍스트만 입력됨, 태그 x 

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/