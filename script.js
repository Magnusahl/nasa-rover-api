let pictureButton = document.querySelector("#picture")

pictureButton.addEventListener("click", () => {
    sendApiRover()
    sendApiRoverOne()
    sendApiRoverTwo()
    sendApiRoverThree()
})

async function sendApiRover() {
    let apiKey = "DIhfuwgrEZQzwxenOdDsfVfVHQL01UMn7U0FP5ms"
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`);
    let data = await response.json()
    document.querySelector("#rover").innerHTML += `<img src="${data.photos[0].img_src}">`
    document.querySelector("#roverName").innerHTML += data.photos[0].camera.full_name
}

async function sendApiRoverOne() {
    let apiKey = "DIhfuwgrEZQzwxenOdDsfVfVHQL01UMn7U0FP5ms"
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=${apiKey}`);
    let data = await response.json()
    document.querySelector("#roverOne").innerHTML += `<img src="${data.photos[0].img_src}">`
    document.querySelector("#roverOneName").innerHTML += data.photos[0].camera.full_name

}

async function sendApiRoverTwo() {
    let apiKey = "DIhfuwgrEZQzwxenOdDsfVfVHQL01UMn7U0FP5ms"
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${apiKey}`);
    let data = await response.json()
    document.querySelector("#roverTwo").innerHTML += `<img src="${data.photos[0].img_src}">`
    document.querySelector("#roverTwoName").innerHTML += data.photos[0].camera.full_name
}

async function sendApiRoverThree() {
    let apiKey = "DIhfuwgrEZQzwxenOdDsfVfVHQL01UMn7U0FP5ms"
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${apiKey}`);
    let data = await response.json()
    document.querySelector("#roverThree").innerHTML += `<img src="${data.photos[0].img_src}">`
    document.querySelector("#roverThreeName").innerHTML += data.photos[0].camera.full_name
}