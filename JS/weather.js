
function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY ="00082a5d3f85aaa4d44d65ca5c7f1ca0"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(Response => Response.json()).then(data => {
        const name =data.name;
        const weadher = data.weather[0].main;
        const header = document.querySelector("header:first-child");
        header.innerText =`${name},${weadher}`;
    })

}

navigator.geolocation.getCurrentPosition(geoOK);