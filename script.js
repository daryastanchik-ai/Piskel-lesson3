let currentSlide = 1;
const totalSlides = 15; 

function updatePresentation() {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        slide.classList.remove('active');
        if (index + 1 === currentSlide) slide.classList.add('active');
    });
    
    document.getElementById('slide-counter').innerText = `${currentSlide} / ${totalSlides}`;
    
    document.getElementById('btn-prev').disabled = currentSlide === 1;
    document.getElementById('btn-next').style.display = currentSlide === totalSlides ? 'none' : 'block';
}

function nextSlide() { 
    if (currentSlide < totalSlides) { currentSlide++; updatePresentation(); } 
}
function prevSlide() { 
    if (currentSlide > 1) { currentSlide--; updatePresentation(); } 
}

// Управление стрелочками и пробелом
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === ' ') nextSlide();
    else if (event.key === 'ArrowLeft') prevSlide();
});