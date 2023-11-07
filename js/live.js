window.addEventListener("load", function () {
    const fileName = "live.json";
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

      let htmlLiveTag = ``;

      for (let i = 0; i < _res.total; i++) {
        const index = i + 1;

        const obj = _res["live_" + index];
  
        const tempTag = `
        <div class="swiper-slide">
          <div class="live-slide-item">
            <a href="${obj.live_info.url}" class="live-link">
              <img src="${obj.live_info.image}" class="live-img"></img>
              <div class="live-info">
                <span class="live-info-state">
                    <div>${obj.live_info.state}</div>
                </span>
                <span class="live-info-title">
                    <div>${obj.live_info.title}</div>
                </span>
              </div>
              <div class="live-day">
                <span class="live-day-date">
                <div>${obj.live_day.date}</div>
                </span>
                <span class="live-day-time">
                <div>${obj.live_day.time}</div>
                </span>
              </div>
              
            </a>

            <a href="${obj.live_good.url}" class="live-good-link">

              <div class="live-good">
                <img src="${obj.live_good.image}" alt="">

                <div class="live-good-title">
                  <div>${obj.live_good.title}</div>
                </div>

                <div class="live-good-discount">
                  <div>${obj.live_good.discount}</div>
                </div>

                <div class="live-good-price">
                  <div>${obj.live_good.price}</div>
                </div>
                
              </div>
            </a>
          </div>
        </div>
        `;
        htmlLiveTag += tempTag;
      }
  
      showHtmlTag(htmlLiveTag);
    }
  
    function showHtmlTag(_html) {
      const liveSlide = ".live-slide .swiper-wrapper";
      const tag = document.querySelector(liveSlide);
      tag.innerHTML = _html;
  
      makeSwiper();
    }
  
    function makeSwiper() {
      const swiperLive = new Swiper(".live-slide", {
        slidesPerView: 4,
        spaceBetween: 28,
        navigation: {
          nextEl: ".live-slide-wrap .slide-next-bt",
          prevEl: ".live-slide-wrap .slide-prev-bt",
        },
        slidesPerGroup: 4,
      });
    }
  });