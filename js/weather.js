const API_Key = "bedeb6d763168a7091390e7670ac10fe"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lng = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_Key}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    })
}

function onGeoError() {alert("위치를 불러올 수 없음. 날씨가 비활성화됨")}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)