
const search = async () =>
{
  /*   var uname = 'perambra' */
    let name = input.value;
    var humidity = document.getElementById('humidity')
    var visibility = document.getElementById('visibility')
    var feelslike = document.getElementById('feelslike')
    var pressure = document.getElementById('pressure')
    var wdes = document.getElementById('wdes');
    var temp = document.getElementById('temp');
    var location = document.getElementById('location');
    var time = document.getElementById('time');

/*     if(!name)
    {
        name = uname;
    } */
    
    if(name)
    {
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=58d317904f844eec7ea99c9b80a87091`)
       response.json().then((data)=>{
            if(response.status ===404)
            {
                alert("Invalid city name")
            }
            else
            {
                const _wDes = data.weather[0].description;
                const _temp = parseInt(data.main.temp-273.15);
                const _feelslike = parseInt(data.main.feels_like-273.15);
                const _pressure = data.main.pressure;
                const _humidity = data.main.humidity;
                const _visibility = (data.visibility/1000);
                const _wind = data.wind.speed;
                const _cloudiness = data.clouds.all;
                const _name = data.name;
                const _weathericon = data.weather[0].icon;
                const _country = data.sys.country;
                const timestamp_s = data.sys.sunset;
                const timestamp_r = data.sys.sunrise;


                const date_s = new Date(timestamp_s * 1000);
                const hours = date_s.getHours();
                const minutes = date_s.getMinutes();
                const _sunset = `${hours}:${minutes}`;

                const date_r = new Date(timestamp_r * 1000);
                const hours_r = date_r.getHours();
                const minutes_r = date_r.getMinutes();
                const _sunrise = `${hours_r}:${minutes_r}`;

                const cDate = new Date();
                console.log(cDate);
                const cyear = cDate.getFullYear();
                const cmonth = cDate.getMonth();
                const cday = cDate.getDate();
                const chour = cDate.getHours();
                const cminutes = cDate.getMinutes();


                humidity.innerHTML = `${_humidity} %`
                visibility.innerHTML = `${_visibility} Km`
                feelslike.innerHTML = `${_feelslike} °C`
                pressure.innerHTML = `${_pressure} hPa`
                temp.innerHTML = `${_temp}<sup>°c</sup>`
                console.log(_weathericon);

                wdes.innerHTML = `<p><img width='10%' style="color:white;" src="https://openweathermap.org/img/wn/${_weathericon}@2x.png">    ${_wDes}</p>`
                location.innerHTML = `<p><i class="fa-solid fa-location-dot"></i>  ${_name} , ${_country}</p>`
                time.innerHTML = `<p><i class="fa-solid fa-calendar-days"></i>  ${cday}-${cmonth}-${cyear}  ,  ${chour}:${cminutes}</p>`
            }

            
       })
    }
    else
    {
        alert('enter a valid city')
    }

}
/* 
window.onload = search; */

