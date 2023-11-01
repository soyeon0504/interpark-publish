window.addEventListener("load", function(){
    console.log("티켓랭킹코딩");
    const fileName = "ticket.json"
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", fileName);
    xhr.send();

    xhr.onreadystatechange = function(event){
        console.log("데이터 전송 상태 확인", event.target.readyState);
        if(event.target.readyState === XMLHttpRequest.DONE) {
            console.log("자료 가져오는데 성공완료", event.target.response);
        }
    }

    const htmlTicketTag = ``;

    const ticketSlide = ".ticket-slide .swiper-wrapper";
    
    const swiperTicket = new Swiper(".ticket-slide", {
        slidesPerView: 4,
        spaceBetween: 28,
        navigation: {
            nextEl: ".ticket-slide-wrap .slide-next-bt",
            prevEl: ".ticket-slide-wrap .slide-prev-bt",
        },
        slidesPerGroup: 4,
    
    });


})