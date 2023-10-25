let myNameDOM = document.querySelector("#myName")

let name = prompt("Adinizi giriniz")

myNameDOM.innerHTML = name

function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);
    
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("myClock").innerHTML += day;

  

  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  