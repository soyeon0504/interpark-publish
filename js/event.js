window.addEventListener("load", function(){

    const fileName = "event.json"

    const xhr = new XMLHttpRequest();

    xhr.open("GET", fileName);
    xhr.send();
    xhr.onreadystatechange = function(event){
        if(event.target.readyState === XMLHttpRequest.DONE) {
        }
    }
    const htmlEventTag = ``;

    const eventSlide = ".event-slide .swiper-wrapper";

    const swiperEvent = new Swiper(".event-slide", {
    slidesPerView: 4,
    spaceBetween: 28,
    navigation: {
        nextEl: ".event-slide-wrap .slide-next-bt",
        prevEl: ".event-slide-wrap .slide-prev-bt",
    },
    slidesPerGroup: 4,
    });
})
