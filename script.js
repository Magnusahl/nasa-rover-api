let pictureButton = document.querySelector("#picture")

let apiKey = "DIhfuwgrEZQzwxenOdDsfVfVHQL01UMn7U0FP5ms"

pictureButton.addEventListener("click", () => {
    getApiData()
})

async function getApiData() {
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${apiKey}`);
    let responseOne = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=${apiKey}`);
    let responseTwo = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=${apiKey}`);
    let responseThree = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=${apiKey}`);

    let data = await response.json()
    let dataOne = await responseOne.json()
    let dataTwo = await responseTwo.json()
    let dataThree = await responseThree.json()

    const datas = [data, dataOne, dataTwo, dataThree];

    displayApiData(datas);
}

function displayApiData(datas) {
    const rover = document.querySelector(".rover");
    datas.forEach((data) => {
        rover.innerHTML += `
        <div>
            <p>${data.photos[0].camera.full_name}</p>
            <img src="${data.photos[0].img_src}">
            </div>
            `;
    });
}