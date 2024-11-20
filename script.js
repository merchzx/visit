document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.getElementById('nav-list');
    if (navList.style.display === 'block') {
        
        navList.style.display = 'none';
    } else {
        navList.style.display = 'block';
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide-container img');
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';
}
