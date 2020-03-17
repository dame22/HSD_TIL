// Create the array and assign it values
var colors = ['white', 'black', 'custom'];

colors[2] = 'beige'; // 2자리에 있는 값을 변경
colors.push('beige2'); // 배열의 끝에 원하는 값을 추가
colors.shift(); // 첫번째 값을 제거
colors.pop(); // 마지막 값을 제거

colors = colors.concat("aa","bb");
// 두 개의 배열을 합쳐줌 >> colors의 배열값과 concat괄호 안에 들어가있는 값을 합쳐서 colors에 넣음
var font = ["dotum","gulim"];
colors = colors.concat(font); 
colors = colors.reverse(); // 배열을 역순으로 재배치
//var colors2 = colors.slice(0,2)

var slice = [10,20,30,40];
    slice.slice(0,2);
// slice(인덱스,)
// 배열의 일부분을 자름 > (n,n) 설정된 범위내에 값만 잘라서 노출
// ㄴ colors안에 0~2내의 값을 colors2 새로운 변수안에 넣음
// 일부분을 없애고 원하는 값만


var splice = [10,20,30,40];
    splice.splice(1,3);
// 배열값을 추가하거나 제거하여 반환 (내가 원하는 값을 찾고싶을 때)
// splice(인덱스,길이) >> 인덱스 값에서 선언된 값의 수만큼
// 배열 원소값이 splice한 결과값으로 변경

colors = colors.join('/'); // 배열값 사이에 원하는 문자를 삽입


console.log(colors);
console.log("slice : " + slice);
console.log("splice : " + splice);


var el = document.getElementById('colors');

el.textContent = colors[2];
