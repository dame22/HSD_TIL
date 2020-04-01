$(function(){ // 검정교재 P137
//get 값을 얻어옴
//set 값을 변경함

    var today = new Date(); //() 값을 넣지 않으면 현재 날짜

    console.log(today);
    console.log(today.getFullYear()); // 년도
    console.log(today.getMonth()); // 0~11월
    console.log(today.getDate()); // 일
    console.log(today.getDay()); // 일월화수목금토 : 숫자로 표기됨
    var day = ['일','월','화','수','목','금','토']; // 배열에 넣어서 사용
    console.log( day[today.getDay()] + "요일" )

    console.log(today.getHours()); // 시간
    console.log(today.getMinutes()); // 분
    console.log(today.getSeconds()); // 초
    console.log(today.getTime()); 
    
    // 날짜 변경
    var lastDate = today.setDate(today.getDate() + 2);
    console.log(lastDate); //1970년 1월 1일 0시 ~ 현재 시간까지의 초

    var aa = new Date(lastDate); // 새로운 date에 만들어낸 date 값을 넣음 > 이틀 뒤 날짜로 나옴
    console.log('2일후 ' + aa)

    today.setDate(today.getDate() + 2); // 변수에 담지않아도 날짜 변경가능
    console.log('4일후 ' + today);

    var changeDate = new Date('2020-04-10'); // 날짜를 직접 넣어도됨
    console.log('월 ' + (changeDate.getMonth()+1)); // 0~11월 이기때문에 +1 해줌

    var oneDay = 24*60*60*1000; // 하루의 초값(86400000) :: 시간 * 분 * 초 * 밀리언단위
    // console.log((oneDay * 365) * 50); 

    console.log( Math.round((changeDate - today) / oneDay));
    
    
    

    


});