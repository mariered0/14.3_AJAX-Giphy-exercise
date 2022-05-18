const api_key = 'T92FH9Vwx2A3pGpt1O08fUErbq2lri9i';
const form = document.querySelector('#form');
const input = document.querySelector('#search-input');
const imgDiv = document.querySelector('#img-container');
const removeBtn = document.querySelector('#remove-btn');
const $allImages = $('img');
// const allImages = document.querySelectorAll('img');
//this is global variable, but cannot have the imgUrl. it becomes undefined

async function getGiphy(api_key, q){
    try{
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=1`);
        const img = document.createElement('img');
        img.src = res.data.data[0].images.downsized.url;
        imgDiv.appendChild(img);
    }catch (e){
        console.log(e);
    };
};

removeBtn.addEventListener('click', function(e){
    const $allImages = $('img');
    $allImages.remove();
})

//removeBtn with plain JavaScript:
// removeBtn.addEventListener('click', function(e){
//     allImages.forEach(function(image) {
//         image.remove();
//     });
// })

//How do i access imgUrl from a separate function?

// function createBtn(){
//     removeBtn.innerText = 'x';
//     imgDiv.appendChild(removeBtn);
//     removeBtn.addEventListener('click', function(e){
//         img.remove();
//         removeBtn.remove();
//     })
// };

form.addEventListener('submit', function(e){
    e.preventDefault();
    getGiphy(api_key, input.value);
    // createImage();
    input.value = '';
});

// function createImage(){
//     const img = document.createElement('img');
//     console.log('in createImage func', imgUrl);
//     img.src = imgUrl;
//     imgDiv.appendChild(img);
// };
