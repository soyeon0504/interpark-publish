window.addEventListener("load", function(){
    console.log("이벤트코딩");

    const fileName = "event.json"

    const xhr = new XMLHttpRequest();

    xhr.open("GET", fileName);
    xhr.send();
    xhr.onreadystatechange = function(event){
        console.log("데이터 전송 상태 확인", event.target.readyState);
        if(event.target.readyState === XMLHttpRequest.DONE) {
            console.log("자료 가져오는데 성공완료", event.target.response);
        }
    }
    const htmlEventTag = ``;

    const eventSlide = ".event-slide .swiper-wrapper";

    const swiperTour = new Swiper(".event-slide", {
    slidesPerView: 4,
    spaceBetween: 28,
    navigation: {
        nextEl: ".event-slide-wrap .slide-next-bt",
        prevEl: ".event-slide-wrap .slide-prev-bt",
    },
    slidesPerGroup: 4,
    });
})
