let pictureButton = document.querySelector("#picture")

let apiKey = "DIhfuwgrEZQzwxenOdDsfVfVHQL01UMn7U0FP5ms"

pictureButton.addEventListener("click", () => {
    sendApiRover()
})

async function sendApiRover() {
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`);
    let responseOne = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=${apiKey}`);
    let responseTwo = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${apiKey}`);
    let responseThree = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${apiKey}`);

    let data = await response.json()
    let dataOne = await responseOne.json()
    let dataTwo = await responseTwo.json()
    let dataThree = await responseThree.json()

    apiData(data)
    apiData(dataOne)
    apiData(dataTwo)
    apiData(dataThree)
}

function apiData(data) {
    document.querySelector("#rover").innerHTML += `<img src="${data.photos[0].img_src}">`
    document.querySelector("#roverName").innerHTML += data.photos[0].camera.full_name
        /*
        document.querySelector("#roverOne").innerHTML += `<img src="${data.photos[0].img_src}">`
        document.querySelector("#roverOneName").innerHTML += data.photos[0].camera.full_name
        document.querySelector("#roverTwo").innerHTML += `<img src="${data.photos[0].img_src}">`
        document.querySelector("#roverTwoName").innerHTML += data.photos[0].camera.full_name
        document.querySelector("#roverThree").innerHTML += `<img src="${data.photos[0].img_src}">`
        document.querySelector("#roverThreeName").innerHTML += data.photos[0].camera.full_name
        */
}