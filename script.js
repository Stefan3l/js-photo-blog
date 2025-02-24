// DOM ELEMENTS

const boxCardElm = document.getElementById('ms-box-card')


// GET API

const lightbox = document.querySelector('.lightbox')
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            
            response.data.forEach((element) => {
                const resultTitle = element.title;
                const resultUrl = element.url;
                

                boxCardElm.innerHTML += 
                `<div class="col-12 col-md-6 col-lg-4 mt-5">
                        <div class="ms-card">                          
                            <div class="pin">
                                <img id="ms-image" src="./img/pin.svg">
                            </div>
                            <div> 
                                <a href="#"><img class="ms-img-blog" src="${resultUrl}" alt="photo"></a>
                            </div>
                            <div class="ms-title">
                                <h2 id="ms-title-image">${resultTitle}</h2>
                            </div>
                        </div>               
                </div>
                `;
            });

            // REMOVE DISPLAY NONE E AGGIUNGI IMG AL CLICK

            const overlayImg = document.getElementById('overlay-img')
            const cards = document.querySelectorAll('.ms-img-blog'); 
            cards.forEach((elementCard, index) => {
                elementCard.addEventListener('click', function()  {
                    overlayImg.src = response.data[index].url
                    lightbox.classList.remove('lightbox-hidden')
                })
            })
          
    })
        .catch(function()  {
            boxCardElm.innerHTML += "404 Not Found"
        });

    

// BUTTON CLOSE ADD DISPLAY NONE AL CLICK   
        
const btnCloseElm = document.getElementById('close-btn')
            
    btnCloseElm.addEventListener("click", function () {
        lightbox.classList.add('lightbox-hidden')
    });

        