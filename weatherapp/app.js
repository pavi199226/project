let xhr = new XMLHttpRequest();
let xmr = new XMLHttpRequest();
var td = document.getElementsByClassName("value");
var url = "";
var text = document.querySelectorAll("input");
text.forEach((item) => {
  url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(
    item.value,
    "&APPID=f47ab680ca6824accbd4cfd34b357718"
  );
  console.log(url);
});
var desc = document.querySelectorAll("p");
var d = new Date();
var td = document.querySelectorAll("td");
var span = document.querySelectorAll("span");
var img = document.querySelectorAll("img");
console.log(span[1].innerText);

document.addEventListener("dblclick", (e) => {
  e.preventDefault();
  console.log("hey");
  xhr.onload = () => {
    if (xhr.status == 200) {
      var res = JSON.parse(xhr.responseText);
      desc[0].innerHTML = res.weather[0].description;
      desc[1].innerHTML = d;
      text.forEach((item) => {
        url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(
          item.value,
          "&APPID=f47ab680ca6824accbd4cfd34b357718"
        );
        if (item.value == res.name) {
          td[1].innerHTML = res.main.pressure;
          td[3].innerHTML = res.main.humidity;
          td[5].innerHTML = res.wind.speed;
          var temp = res.main.temp;
          span[0].innerHTML = Math.floor(Number(temp) - 273.15);
          var tem = "http://openweathermap.org/img/wn/".concat(
            res.weather[0].icon,
            "@2x.png"
          );
          img.src = tem;
        }
      });
    }

    xmr.open(
      "get",
      "http://api.openweathermap.org/data/2.5/forecast?id=".concat(
        res.id,
        "&APPID=f47ab680ca6824accbd4cfd34b357718"
      ),
      true
    );
    xmr.send();
    xmr.onload = () => {
      var rest = JSON.parse(xmr.response);
      console.log(rest.list);
      for (var i = 0; i <= 7; i++) {
        img[i + 2].src = "http://openweathermap.org/img/wn/".concat(
          rest.list[i].weather[0].icon,
          "@2x.png"
        );
      }
    };
  };

  xhr.open("get", url, true);
  xhr.send();
});
