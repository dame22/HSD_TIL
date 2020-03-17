// Create a variable called saying to hold the string that will be used
var saying = 'Home sweet home ';
arrSaying = [];

for(var i = 0; i < saying.length; i++){
    var string = saying.charAt(i)
    arrSaying.push(string);
}
console.log(arrSaying)

var str = document.querySelector('#str');
for(var i in arrSaying){
    str.innerHTML += "<span>" + arrSaying[i] + "</span>";
}



var msg = '<h2>length</h2><p>' + saying.length + '</p>';

msg += '<h2>uppercase</h2><p>' + saying.toUpperCase() + '</p>'; // 대문자

msg += '<h2>lowercase</h2><p>' + saying.toLowerCase() + '</p>'; // 소문자

msg += '<h2>character index: 12</h2><p>' + saying.charAt(12) + '</p>';

msg += '<h2>first ee</h2><p>' + saying.indexOf('ee') + '</p>'; // 앞에서부터 검색

msg += '<h2>last e</h2><p>' + saying.lastIndexOf('e') + '</p>'; // 뒤에서부터 검색

msg += '<h2>character index: 8-14</h2><p>' + saying.substring(8, 14) + '</p>';
//substr 까지 써도됨 / saying.substring(8) 으로 입력 시 8번째 문자에서 맨 끝 내용까지 다 표시됨

msg += '<h2>replace</h2><p>' + saying.replace('me', 'w') + '</p>'; // replace (문자열, 바꿀 문자열)



// =========================================================


// var saying = 'Home sweet home ';
var hh = saying.indexOf('h'); // 11
var ee = saying.lastIndexOf('e') + 1; // 15 + 1 

console.log(saying.substring(hh, ee)); // home

location.href = '#subpage=2'; // (location) 윈도우 서버가 가지고 있는 객체 . (href) 상단의 주소값 // 주소값 변경

var hash = location.hash; //url 값중에서 #으로 끝나는 주소를 가져옴
var inxof = hash.indexOf('=')+1;
var pNum = hash.substring(inxof);


switch(pNum){
    case '0':console.log('main');break;
    case '1':console.log('company');break;
    case '2':console.log('service');break;
    case '3':console.log('notice');break;    
}

// img 확장자 바꾸기 ==============================

var img = document.querySelector('#img img');
var src = img.src;
//images/check-cross.png

img.src = src.replace('png','jpg')
console.log(src.replace('png','jpg'))





var el = document.getElementById('info');

el.innerHTML = msg;