const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?";
const lat = "&lat=33.753746";
const lon = "&lon=-84.386330";
const apiOptions = "&units=imperial&exclude=minutelyalerts&appid=";
const apiKey = "f5e714a68db3e76d8aa2c2377b0726f2";
const url = weatherURL + lat + lon + apiOptions + apiKey;

const button = document.getElementById("GetInfo");

function GetInfo() {
  var newName = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");
  cityName.innerHTML = "--" + newName.value + "--";

  fetch(
    (geoUrl =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      newName.value +
      "&units=imperial&exclude=minutelyalerts&appid=f5e714a68db3e76d8aa2c2377b0726f2")
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let day = 1;

      for (let index = 0; index < data.list.length; index += 8) {
        const wind = data.list[index].wind.speed;
        const temp = data.list[index].main.temp;
        const humidity = data.list[index].main.humidity;

        const id = "day" + day;
        day++;

        const element = document.getElementById(id);
        element.innerText =
          "Temp:" + temp + " windspeed:" + wind + "humidity:" + humidity;
      }
    });
}
