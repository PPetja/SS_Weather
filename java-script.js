function getXHR() {
    var xhrobj;
    if (window.XMLHttpRequest) {
        xhrobj = new XMLHttpRequest();
    } else {
        xhrobj = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhrobj;
}
    var APPID = "76b6c5825dfc632f930a8b269629b897";

    var send = document.getElementById('send');
    var selectedcity = document.getElementById('selectedcity');
    var clouddescr = document.getElementById('clouddescr');
    var cloudimg = document.getElementById('cloudimg');
    var temp = document.getElementById('temp');
    var pressure = document.getElementById('pressure');
    var humidity = document.getElementById('humidity');
    var windspeed = document.getElementById('windspeed');

send.addEventListener('click', function() {

    var cityname = document.getElementById('cityname').value;
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=' + APPID;
    var xhr = getXHR();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            selectedcity.innerHTML = data.name;
            clouddescr.innerHTML = data.weather[0].description;
            cloudimg.setAttribute('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
            temp.innerHTML = data.main.temp - 273.15;
            pressure.innerHTML = data.main.pressure;
            humidity.innerHTML = data.main.humidity;
            windspeed.innerHTML = data.wind.speed;
        }
    }
    xhr.open('GET', url, true);
    xhr.send();

}, false);