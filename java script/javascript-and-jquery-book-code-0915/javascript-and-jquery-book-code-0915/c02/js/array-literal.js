// 각 글씨에 색 넣기
var colors; 
colors = ['red', 'black', 'blue'];


var el = document.getElementById('colors');

var clr = '';
for(var i in colors){
    /* 방법 1
    clr += "<span style=color:" + colors[i] + ">";
    clr += colors[i];
    clr += "</span>"; */

    clr += "<span>" + colors[i] + "</span>";
}

el.innerHTML = clr; 
// 방법 2
var span = el.getElementsByTagName('span'); // el 갖고있는 html 태그중에 span을 찾아서 var span안에 넣음
/*
span[0].style.color = colors[0];
span[1].style.color = colors[1];
span[2].style.color = colors[2]; 
▼ 반복되는 내용이기 때문에 for 이용 가능 ▼ */

/*
for(var i in colors){
   span[i].style.color = colors[i];
} 
*/

/* html 태그에 class 이름을 부여함 
span[0].className = 'red';
span   클래스 속성  = 클래스 이름
span[1].className = 'black';
span[2].className = 'blue';
▼ ▼ ▼ ▼ ▼ 
*/


for(var i in colors){
    //span[i].className = colors[i];
    span[i].classList.add(colors[i]);
}

// span[0].className = 'white'; >> span[0]에 className 미지정되어있을 때만 사용
// span[0].classList.add('white'); >> className이 지정되어있을 때 Name 추가

for(var i in colors){    
    span[i].classList.add('white')     
}

/*
span[i].classList.contains('white') >> class 명에 white 가 있는지 찾음
            console.log('true')
span 앞에 !를 붙이면 white 가 없는 값을 찾음 */


