// DOM ELEMENTS

const boxCardElm = document.getElementById('ms-box-card')


    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            
            response.data.forEach((element, index) => {
                const resultTitle = element.title;
                const resultUrl = element.url;
                const lightboxId = `lightbox-${index}`;

                boxCardElm.innerHTML += 
                `<div class="col-12 col-md-6 col-lg-4 mt-5">
                        <div class="ms-card">                          
                            <div class="pin">
                                <img id="ms-image" src="./img/pin.svg">
                            </div>
                            <div> 
                                <a href="#${lightboxId}"><img class="ms-img-blog" src="${resultUrl}" alt="photo"></a>
                            </div>
                            <div class="ms-title">
                                <h2 id="ms-title-image">${resultTitle}</h2>
                            </div>
                        </div>               
                </div>
                `;
            });


            const cards = document.querySelectorAll('.ms-img-blog'); 
            const cardElm = document.querySelectorAll('.ms-card')
            cards.forEach((resultUrl) => {
                cardElm.addEventListener('click', function()  {
                    overlayImg.src += resultUrl
                    console.log(overlayImg)
                })
            })
          
    })
        .catch(function()  {
            boxCardElm.innerHTML += "404 Not Found"
        });

    

   
        const lightbox = document.querySelector('.lightbox')
        const btnCloseElm = document.getElementById('close-btn')
        const overlayImg = document.getElementById('overlay-img') 
      
         
            btnCloseElm.addEventListener("click", function () {
                lightbox.classList.add('lightbox-hidden')
            });

        