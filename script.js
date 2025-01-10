// DOM ELEMENTS

const boxCardElm = document.getElementById('ms-box-card')


    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(function (response) {
            
            response.data.forEach((element, index) => {
                const resultTitle = element.title;
                const resultUrl = element.url;
                const lightboxId = `lightbox-${index}`;

                boxCardElm.innerHTML += 
                (`<div class="col-12 col-md-6 col-lg-4 mt-5">
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
                <div id="${lightboxId}" class="lightbox">
                    <a href="#" class="lightbox-close">&times;</a>
                    <img src="${resultUrl}" alt="img">
                </div>
                `);
            })        
    })
        .catch(function()  {
            boxCardElm.innerHTML += "404 Not Found"
        });




      