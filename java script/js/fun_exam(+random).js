// ==================(ex04 : 랜덤함수)==========================

/*
Math.seil(1.3) >> 결과 2 : 소수점 3을 버리면서 1의 값을 올림
ㄴ Math.ceil(Math.random()*10) : 1 ~ 10 랜덤
Math.floor(1.1) >> 결과 1: 소수점만 버림
Math.round(1.5) >> 결과 2 : 반올림
*/

// 중복값 제거

var arr = [];
var i = 0;

while(++i <= 45){
    var num = Math.ceil(Math.random()*45);
    check(num);
}
function check(n){
    var bln = true;

    for(var k in arr){
        if(arr[k] === n){
            bln = false;
            i--;
            break;
           
        }
    }
    if(bln){arr.push(n)}; // true일때만 작동
}

console.log(arr);

// 변수안에 함수를 넣어놓을 수 있다 

var fun = function(){
    console.log('함수표현식');
}
fun();



// ==================(ex03 : 출석체크)==========================
var sCheck = document.querySelector(".study-check");
var input = sCheck.querySelectorAll('div input');
var tbody = sCheck.querySelector('tbody');
var sNum = tbody.querySelectorAll('tr').length;
var sCount = null;


input[1].onclick = studyCheck;
function studyCheck(){
    var name = input[0].value;
    if(name == ""){
        alert("입력값이 없습니다.");
    }
    else{
        sNum++;
        if(sNum < 10){
            sCount = '0' + sNum;
        }
        else{
            sCount = sNum
        }
        tbody.innerHTML += "<tr><td>" + sCount +  "</td><td>" + name + "</td></tr>";
    }

}


// sNum < 10 ? sCount = '0' + sNum; : sCount = sNum >> 두 번째 if-else 축약,,
//          조건       =  (true 값)   : ( false 값)





// ==================(ex02 : 다중 함수 결과물 얻기)==========================
// querySelector : 단수로 잡을 수 있음, 클래스 .기호 필수 (아이디, 태그 가능)
// querySelectorAll : .number 안의 모든 input를 잡고 싶을 때


var number = document.querySelectorAll(".number input");
var result2 = document.querySelectorAll(".result input");

for(var i=0; i < number.length; i++){
    number[i].onclick = function(){ // number값은 모두 onclick 속성을 가짐 ▼
        if(result2[0].value == 0){
            result2[0].value = '';
        }

        result2[0].value += this.value; // 이벤트를 발생시키는것을 this 로 칭함
    };
}

result2[1].onclick = function(){
    var total = eval(result2[0].value) // eval : 문자열을 스크립트가 인식할 수 있게 바꿈
    result2[0].value = total;
}
/*
var a = "[0,2,5,8,7,8,10]"; >> 문자열(string) : eval(a) 로 입력시 object로 바뀜
console.log(typeof eval(a))
*/

result2[2].onclick = function(){
    result2[0].value = 0;
}






// ====================(ex01)=======================

document.write("<h2> function Prompt</h2>");

function fun(){
    var x = prompt('덧셈 첫번째 숫자를 입력하세요');
    var y = prompt('덧셈 두번째 숫자를 입력하세요');
    // x = parseInt(x) > 값을 지정해줘도 되지만 textContent에서 지정하면서 더해줘도 됨
    // y = parseInt(y)

    var result = document.getElementById('result');
    result.textContent = parseInt(x)+parseInt(y)
}

// ============================================


document.write("<h2> 입력값 연산 </h2>");

var result = document.getElementsByClassName('result'); // 함수 밖 = 전역변수

function fun2(){ // 함수 안 = 지역변수
    var x = document.getElementsByClassName('calc-x');
    var y = document.getElementsByClassName('calc-y');
   
    var sum = Number(x[0].value) + Number(y[0].value);
    
    result[0].value = sum;    
}
result[0].onclick = fun2; // 함수를 호출할 때에는 fun2()에서 괄호를 빼고 입력
