const api_key = 'T92FH9Vwx2A3pGpt1O08fUErbq2lri9i';
const searchBtn = document.querySelector('#search-btn');
const input = document.querySelector('#search-input');
const imgDiv = document.querySelector('#img-container');
const removeBtn = document.querySelector('#remove-btn');
const $allImages = $('img');

async function getGiphy(api_key, q) {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=10`);

    const randomNum = Math.floor(Math.random() * 10);
    const url = res.data.data[randomNum].images.downsized.url;
    createImage(url);
};

function createImage(imgURL) {
    const img = document.createElement('img');
    img.src = imgURL;
    imgDiv.appendChild(img);
}

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getGiphy(api_key, input.value);
    input.value = '';
});

removeBtn.addEventListener('click', function (e) {
    const $allImages = $('img');
    $allImages.remove();
})

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const letters = document.querySelectorAll('.letter');

const intervalId = setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1000);