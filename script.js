let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function changeSlide(direction) {
    currentIndex += direction;
    
    // Loop back to start/end
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    
    showSlide(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Auto-advance slides every 4 seconds
let autoSlide = setInterval(() => {
    changeSlide(1);
}, 4000);

// Pause auto-advance on hover
document.querySelector('.slider').addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

// Resume auto-advance when mouse leaves
document.querySelector('.slider').addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
        changeSlide(1);
    }, 4000);
});

// Download APK function
function downloadAPK() {
    // Replace 'your-app.apk' with your actual APK file name
    const apkUrl = 'app-release.apk';
    const link = document.createElement('a');
    link.href = apkUrl;
    link.download = 'textile-models-app.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
