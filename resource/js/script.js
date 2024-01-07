// modal article

const openButtons = document.querySelectorAll('.open');
const close = document.getElementById('close');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const postDate = document.getElementById('postDate');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const modalArticle = document.getElementById('modalArticle');

openButtons.forEach((openButton) => {
    openButton.addEventListener('click', () => {
        const date = openButton.getAttribute('data-posted');
        const title = openButton.getAttribute('data-title');
        const content = openButton.getAttribute('data-content');
        const article = openButton.getAttribute('data-article');

        postDate.textContent = date;
        modalTitle.textContent = title;
        modalContent.textContent = content;
        modalArticle.textContent = article;

        popup.style.display = 'flex';
        overlay.style.display = 'block';
    });
});

close.addEventListener('click', () => {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});


// share button - ideia descontinuada mas caso queira adicionar ao seu projeto, fique a vontade

// function share() {
//     if (navigator.share !== undefined) {
//         navigator.share({
//             title: '1011',
//             text: 'Blog sobre tecnologia',
//             url: 'https://seusite.com/1011',
//         })
//         .then(() => console.log('Compartilhado com sucesso'))
//         .catch((error) => console.log('Erro no Compartilhamento', error));
//     }
// }

// input filter

document.querySelector('#search-input');
addEventListener('input', filterlist);

function filterlist() {
    const searchInput = document.querySelector('#search-input');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.main-card');

    listItems.forEach((item) => {
        let text = item.textContent.toLowerCase();
        if (text.includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
};

// const likeButtons

function like(likeElement) {
    if(likeElement.getAttribute('src') === 'resource/img/border.svg') {
        likeElement.src = 'resource/img/fill.svg' 
        likeElement.alt = 'imagem ilustrativa de um coração preenchido que representa um botão de like'
    } else {
        likeElement.src = 'resource/img/border.svg' 
        likeElement.alt = 'imagem ilustrativa de um coração preenchido que representa um botão de like'
    }
}

// scroll to top

let myButton = document.getElementById("scrollTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "flex";
    } else {
        myButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// scroll reveal

ScrollReveal().reveal('.main-card', {
    delay: 500,
    distance: '50px',
    origin: 'top',
    duration: 800,
    reset: true
})
