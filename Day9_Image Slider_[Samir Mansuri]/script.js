const slides = document.querySelectorAll(".slide")
var counter=0;
slides.forEach (
    (slide,index) => {
        slide.style.bottom = `${index * 100}%`
    }
)
const goPrev = () => {
    counter--;
    slideImage();
}

const goNext = () => {
    counter++;
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(+${counter * 100}%)`
        }
    )
}