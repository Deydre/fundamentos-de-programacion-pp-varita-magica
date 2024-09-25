//------------ 1 ---------------
// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

for (let i = 0; i < document.getElementsByTagName('a').length ; i++) {
    document.getElementsByTagName('a')[i].removeAttribute("href");
}

//Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// ------- IMÁGENES ---------
let images = document.querySelectorAll('img');

// Función para crear un nº random del 1 al 6
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

images.forEach((img)=>{

    img.addEventListener('click', function() {
        // Sustituir el HTML por el gif
        img.src = `assets/magic-${randomNumber(1,6)}.gif`;
    });

    let imgBefore = img.src;
    img.addEventListener('mouseover', function() {
        // Sustituir el HTML por el gif
            img.src = `assets/abracadabra.gif`;
    });

    img.addEventListener('mouseout', function() {
        // Sustituir el gif por el anterior HTML
        img.src = imgBefore;
    });

});


// ------- PÁRRAFOS ---------
let paragraphs = document.querySelectorAll('p');

paragraphs.forEach((p)=>{
    p.addEventListener('click', function() {
        // Sustituir el HTML por el gif
            p.style.color = 'purple';
            p.style.background = 'linear-gradient(301deg, rgba(170,123,221,1) 0%, rgba(0,255,176,1) 100%)';
    });

    p.addEventListener('mouseover', function() {
        // Sustituir el HTML por el gif
            p.style.color = 'red';
            p.style.background = 'black';
    });

    p.addEventListener('mouseout', function() {
        // Sustituir el HTML por el gif
            p.style.color = 'black';
            p.style.background = 'red';
    });

});

// ------- ARTICLE / SECTION ---------
let articles = document.querySelectorAll('article');
let sections = document.querySelectorAll('section');

articles.forEach((article)=>{
    article.addEventListener('click', function() {
        // Sustituir el HTML por el gif
            article.style.background = 'green';
    });

    article.addEventListener('mouseover', function() {
        // Sustituir el HTML por el gif
            article.style.background = '#AAFF00';
    });

    article.addEventListener('mouseout', function() {
        // Sustituir el HTML por el gif
            article.style.background = '#097969';
    });
});

sections.forEach((section)=>{
    section.addEventListener('click', function() {
        // Sustituir el HTML por el gif
        section.style.background = 'blue';
    });

    section.addEventListener('mouseover', function() {
        // Sustituir el HTML por el gif
        section.style.background = '#1bdfff';
    });

    section.addEventListener('mouseout', function() {
        // Sustituir el HTML por el gif
        section.style.background = '#29a8bd';
    });
});

// Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ['red', 'blue', 'green'];

const getRandom = (array) => {
    return array[randomNumber(0, array.length+1)];
}

console.log(getRandom(colors));