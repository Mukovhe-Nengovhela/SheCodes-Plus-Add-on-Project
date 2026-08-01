function updateTime() {
  let nairobiElement = document.querySelector("#nairobi");
  if (nairobiElement) {
    let nairobiDateElement = nairobiElement.querySelector(".date");
    let nairobitimeElement = nairobiElement.querySelector(".time");
    let nairobiTime = moment().tz("Africa/Nairobi");

    nairobiDateElement.innerHTML = moment().format("MMMM Do YYYY");
    nairobitimeElement.innerHTML = nairobiTime.format(
      "h:mm:ss [<small>]A [</small>]",
    );
  }
  //BANGKOK

  let bangkokElement = document.querySelector("#bangkok");
  if (bangkokElement) {
    let bangkokDateElement = bangkokElement.querySelector(".date");
    let bangkoktimeElement = bangkokElement.querySelector(".time");
    let bangkokTime = moment().tz("Asia/Bangkok");

    bangkokDateElement.innerHTML = moment().format("MMMM Do YYYY");
    bangkoktimeElement.innerHTML = bangkokTime.format(
      "h:mm:ss [<small>]A [</small>]",
    );
  }
}

function updateCity(event) {
  let citiesTimeZone = event.target.value;
  if (citiesTimeZone === "current") {
    citiesTimeZone = moment.tz.guess();
  }
  let citiesName = citiesTimeZone.replace("_", " ").split("/")[1];
  let citiesTime = moment().tz(citiesTimeZone);
  console.log(citiesTime.format("MMMM Do YYYY"));
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = `
<div id="city">
<div class="city">
    <div>
<h2>${citiesName}</h2>
<div class="date">${citiesTime.format("MMMM Do YYYY")}</div>
    </div>
<div class="time">${citiesTime.format("h:mm:ss")} <small>
${citiesTime.format("A")}</small></div>
</div>

<a href="/">All cities</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
