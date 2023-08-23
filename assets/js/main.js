const body = document.querySelector('body');

// Nav=========================================

function navigate () {
    const burgerButton = document.querySelector('.burger-menu a');
    const nav          = document.querySelector('.nav');
    const navLinks     = document.querySelectorAll('.nav__link');
    
    burgerButton.addEventListener('click', () => {
        nav.classList.toggle('active');
        burgerButton.classList.toggle('active');
        body.classList.toggle('hiden');
    
        for (let link of navLinks) {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burgerButton.classList.remove('active');
                body.classList.remove('hiden');
            });
        }
    });
}
navigate ();

// Section intro "Video"========================

function playVideo() {
    const videoPlayButton = document.querySelector('.inro__link');
    const parent          = document.querySelector('.intro');

    videoPlayButton.addEventListener('click', () => {
        const videoBox = document.createElement('div');
        videoBox.classList.add('video-box');
        videoBox.innerHTML = `
                      <button class="button video__button">&#215;</button>
                      <div class="video-container">
                          <div class="video">
                              <iframe src="https://www.youtube.com/embed/JLhbTGzE6MA" title="Atlant" frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen>
                              </iframe>
                          </div>
                      </div>`

        parent.appendChild(videoBox);
        body.classList.add('hiden');

        videoBox.addEventListener('click', () => {
            videoBox.remove();
            body.classList.remove('hiden');
        });
    });

}
playVideo()

// Section gallery =============================

function imageGallery() {
    const galleryElems = document.querySelectorAll('.gallery__button img');
    const galleryImageBig = document.querySelector('.gallery-image__elem img');
    const galleryImageOffer = document.querySelector('.gallery-image');

    for (let image of galleryElems) {
        image.addEventListener('click', () => {
            galleryImageBig.src = image.src;
            galleryImageOffer.classList.add('active')
            body.classList.add('hiden');

            galleryImageOffer.addEventListener('click', (e) => {
                if (e.target.className !== '') {
                    body.classList.remove('hiden');
                    galleryImageOffer.classList.remove('active');
                }
            });
        })
    }
}
imageGallery();

console.log('It`s ok');