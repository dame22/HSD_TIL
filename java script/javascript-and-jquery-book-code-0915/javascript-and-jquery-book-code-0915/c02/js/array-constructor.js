// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array('white','black','custom');

// Show the first item from the array.
var el = document.getElementById('colors');

var aa = '';
for(var i in colors){
    aa += "<a>" + colors[i] + "</a>"
}

el.innerHTML = aa;

var bb = el.getElementsByTagName('a');

var i = 0;
for(var i in colors){

    if(bb[i].textContent != 'black'){
        bb[i].className = colors[i];
        console.log(i)
    }  
}








