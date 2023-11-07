window.addEventListener("load", function () {
    const fileName = "ticket.json";
    const xhr = new XMLHttpRequest();

    xhr.open("GET", fileName);

    xhr.send();
    xhr.onreadystatechange = function (event) {
      if (event.target.readyState === XMLHttpRequest.DONE) {
      
        const res = event.target.response;
 
        const json = JSON.parse(res);
        makeHtmlTag(json);
      }
    };
  
    function makeHtmlTag(_res) {
      let htmlTicketTag = ``;

      for (let i = 0; i < _res.total; i++) {
        const index = i + 1;

        const obj = _res["ticket_" + index];
  console.log(obj)
        const tempTag = `
          <div class="swiper-slide">
            <div class="ticket-slide-item">
              <a href="${obj.url}" class="ticket-link">
                <div class="ticket-img">
                  <img src="${obj.image}" alt="${obj.desc}" />
                  <div class="ticket-number">${obj.number}</div>
                </div>
                <div class="ticket-info">
                  <ul class="ticket-good-list">
                    <li>
                        <span class="ticket-good-info-title">
                            <div>${obj.title}</div>
                        </span>
                        <p class="ticket-good-info-place">
                        ${obj.place}
                        </p>
                    </li>
                    <li>
                      <span class="ticket-good-info-period">
                        ${obj.period}
                      </span>
                    </li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
        `;
   
        htmlTicketTag += tempTag;
      }
  
      showHtmlTag(htmlTicketTag);
    }
  
    function showHtmlTag(_html) {
      const ticketSlide = ".ticket-slide .swiper-wrapper";
      const tag = document.querySelector(ticketSlide);
      tag.innerHTML = _html;
  
      makeSwiper();
    }
  
    function makeSwiper() {
      const swiperTicket = new Swiper(".ticket-slide", {
        slidesPerView: 4,
        spaceBetween: 28,
        navigation: {
          nextEl: ".ticket-slide-wrap .slide-next-bt",
          prevEl: ".ticket-slide-wrap .slide-prev-bt",
        },
        slidesPerGroup: 4,
      });
    }
  });