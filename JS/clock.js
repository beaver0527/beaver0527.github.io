const clock = document.querySelector("#clock");

function getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getclock();
setInterval(getclock,1000);

//setInterval 로 매시간마다 반복적으로 실행시킬 수 있음!
//new Date()로 date 오브젝트를 만들어서 내부 property의 요소를 활용하여 시간을 얻음! ex) date.getfullyears 등등 searching이 중요