window.onload = function () {

  spin.classList.toggle("loader")

  let request = new XMLHttpRequest();


  request.open("GET", "https://my-json-server.typicode.com/zoelounge/menupizza/dataLanding", true)

  request.send();

  request.onload = function () {

    console.log("response = ", request.response)

    let arrayResult = JSON.parse(request.response)
    console.log(`title[0] = ${arrayResult[0].title}`);
    let resultHtml = ''

    for (let i = 0; i < arrayResult.length; i++) {

      resultHtml += ` <div class="row mb-3">
            <div class="description d-flex flex-column justify-content-center col-lg-6 col-md-6 col-sm-12">
              <h3>${arrayResult[i].title}</h3>
              <p>${arrayResult[i].description}</p>
            </div>
            <div class="image text-center col-lg-6 col-md-6 col-sm-12">
              <img src="${arrayResult[i].image}" alt="music" />
            </div>
          </div>`
    }
    setTimeout(() => {
      spin.classList.toggle("loader")
      document.getElementById("mainContainer").innerHTML = resultHtml;
    }, 3000)

  }

}