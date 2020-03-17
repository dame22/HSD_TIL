var randomNum = Math.floor((Math.random() * 10) + 1);
//                          0 ~ 9 랜덤 값에 +1 >> 1~10 랜덤 값이 됨

var el = document.getElementById('info');

el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';