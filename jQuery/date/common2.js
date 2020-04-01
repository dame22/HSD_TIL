$(function(){  

    // var today = new Date(),
    //     year = today.getFullYear(),
    //     month = today.getMonth() + 1 ,
    //     date = today.getDate();
    // // today.getDay()
    // var day = ['일','월','화','수','목','금','토'];

    // var date = year + "년" + month + "월" + date + "일" + day[today.getDay(3)] + "요일"
    
    // $('div').append(date)

    // var startDay = new Date();
    // var lastDay = new Date('2020-06-08');
    // var oneDay = 24*60*60*1000;

    // var end = Math.round((lastDay - startDay) / oneDay)

    // $('div').append('<br>종강일 까지 '+ end + '일')  
    
    
    
// --------선생님이 쓴 것--------

var today  = new Date(),
        year = today.getFullYear(),
        month = today.getMonth(),
        date = today.getDate(),
day = ['일','월','화','수','목','금','토'][today.getDay()];
    
//con1 = "year"+"년 "+month+"월 "+date+"일 "+day+"요";
con1 = `${year}년 ${month}월 ${date}일 ${day}요`;
$('div').text(con1);
  
    var startDay = new Date();
    var lastDay = new Date('2020-06-08');
    var endDay = lastDay - startDay;
    
var dDay = Math.round(endDay / (24*60*60*1000));
$('div').text(`종강일(2020.6.8) 까지 D-day : ${dDay}일`);

var event = new Date(); // 현재날짜
var eventS = new Date('2020-04-01'); // 시작날짜
var eventE = new Date('2020-04-08 18:00:00'); // 종료날짜

console.log(eventS.getDate()) // 1
console.log(event.getDate()) // 1
console.log(eventE.getDate()) // 8

if(event >= eventS && event <= eventE){
    console.log('이벤트 기간입니다.')
}else{
    console.log('이벤트가 종료되었습니다.')
}

});