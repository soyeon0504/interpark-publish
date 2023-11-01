window.addEventListener("load", function(){
    console.log("인터파크라이브코딩");

    const fileName = "live.json"

    const xhr = new XMLHttpRequest();

    xhr.open("GET", fileName);
    xhr.send();
    xhr.onreadystatechange = function(event){
        console.log("데이터 전송 상태 확인", event.target.readyState);
        if(event.target.readyState === XMLHttpRequest.DONE) {
            console.log("자료 가져오는데 성공완료", event.target.response);
        }
    }
    const htmlLiveTag = ``;

    const liveSlide = ".live-slide .swiper-wrapper";

    const swiperBook = new Swiper(".live-slide", {
    slidesPerView: 4,
    spaceBetween: 28,
    navigation: {
        nextEl: ".live-slide-wrap .slide-next-bt",
        prevEl: ".live-slide-wrap .slide-prev-bt",
    },
    slidesPerGroup: 4,
    });
})