window.onload = function () {
  /* ========== 메인 슬라이드 (mainSwiper) ========== */
  const swiper = new Swiper('.mainSwiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 400,
    autoplay: { delay: 4000 },
    pagination: {
      el: '.slide-dot-wrap',
      clickable: true,
    },
  });

  // 슬라이드 컨트롤 버튼
  const prevBtn = document.querySelector('.swiper-button.prev');
  const nextBtn = document.querySelector('.swiper-button.next');
  const pauseBtn = document.querySelector('.swiper-button.pause');
  const playBtn = document.querySelector('.swiper-button.play');

  if (prevBtn) prevBtn.onclick = () => swiper.slidePrev();
  if (nextBtn) nextBtn.onclick = () => swiper.slideNext();

  if (pauseBtn && playBtn) {
    pauseBtn.onclick = function () {
      swiper.autoplay.stop();
      pauseBtn.style.display = 'none';
      playBtn.style.display = 'flex';
    };
    playBtn.onclick = function () {
      swiper.autoplay.start();
      playBtn.style.display = 'none';
      pauseBtn.style.display = 'flex';
    };
  }

  /* ========== 헤더 로고 드롭다운 ========== */
  const h1Button = document.querySelector('.header_i h1 button');
  const downLogo = document.querySelector('.down-logo');
  const header = document.querySelector('header');
  let isOpen = false;

  h1Button.onclick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    isOpen = !isOpen;
    downLogo.style.display = isOpen ? 'block' : 'none';
    header.classList.toggle('logo-open', isOpen);
  };

  document.onclick = function (e) {
    if (!h1Button.contains(e.target) && !downLogo.contains(e.target)) {
      downLogo.style.display = 'none';
      header.classList.remove('logo-open');
      isOpen = false;
    }
  };

  /* ========== Section2 슬라이드 ========== */
  new Swiper('.section2 .slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    navigation: {
      prevEl: '.section2 .s_btn .left',
      nextEl: '.section2 .s_btn .right',
    },
    breakpoints: {
      0: { spaceBetween: 12 },
      1025: { spaceBetween: 32 },
    },
  });

  /* ========== Section3 드롭다운 ========== */
  const downSpans = document.querySelectorAll('.down_btn span');

  downSpans.forEach((span) => {
    span.addEventListener('click', function (e) {
      e.stopPropagation();
      const downList = this.closest('.down').querySelector('.down_list');

      document.querySelectorAll('.down_list').forEach((list) => {
        if (list !== downList) list.classList.remove('open');
      });
      downList.classList.toggle('open');
    });
  });

  document.addEventListener('click', function () {
    document.querySelectorAll('.down_list').forEach((list) => {
      list.classList.remove('open');
    });
  });

  /* ========== Section3 지역 선택 ========== */
  const regions = {
    서울특별시: ['강남구', '강서구', '송파구', '마포구'],
    부산광역시: ['해운대구', '사하구', '동래구'],
    대구광역시: ['중구', '남구', '수성구'],
    경기도: ['수원시', '성남시', '고양시'],
    제주특별자치도: ['제주시', '서귀포시'],
  };

  const leftBtn = document.querySelector('.search .left .down_btn');
  const rightBtn = document.querySelector('.search .right .down_btn');
  const leftList = document.querySelector('.search .left .down_list ul');
  const rightList = document.querySelector('.search .right .down_list ul');

  leftList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      const selectedRegion = e.target.textContent;
      leftBtn.childNodes[0].nodeValue = selectedRegion;

      const cities = regions[selectedRegion] || ['시/도를 선택하세요'];
      rightList.innerHTML = '';
      cities.forEach((city) => {
        const li = document.createElement('li');
        li.textContent = city;
        rightList.appendChild(li);
      });
      rightBtn.childNodes[0].nodeValue = '선택하세요';
    }
  });

  rightList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
      rightBtn.childNodes[0].nodeValue = e.target.textContent;
    }
  });

  /* ========== Section4 슬라이드 ========== */
  new Swiper('.section4 .swiper', {
    slidesPerView: 5,
    spaceBetween: 34,
    navigation: {
      nextEl: '.section4 .s_btn .right',
      prevEl: '.section4 .s_btn .left',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      480: { slidesPerView: 2, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 12 },
      1024: { slidesPerView: 4, spaceBetween: 12 },
      1500: { slidesPerView: 5, spaceBetween: 34 },
    },
  });

  /* ========== Section6 슬라이드 ========== */
  new Swiper('.section6 .swiper', {
    slidesPerView: 5,
    spaceBetween: 34,
    navigation: {
      nextEl: '.section6 .s_btn .right',
      prevEl: '.section6 .s_btn .left',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 12 },
      480: { slidesPerView: 2, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 12 },
      1024: { slidesPerView: 4, spaceBetween: 12 },
      1500: { slidesPerView: 5, spaceBetween: 34 },
    },
  });

  /* ========== Section7 슬라이드 ========== */
  new Swiper('.section7 .swiper', {
    slidesPerView: 1,
    spaceBetween: 34,
    navigation: {
      nextEl: '.section7 .s_btn .right',
      prevEl: '.section7 .s_btn .left',
    },
    breakpoints: {
      1025: { slidesPerView: 'auto', spaceBetween: 16 },
    },
  });

  /* ========== Section8 슬라이드 ========== */
  new Swiper('.section8 .swiper', {
    autoplay: { delay: 3000 },
    pagination: {
      el: '.section8 .swiper-pagination',
      dynamicBullets: true,
    },
  });

  /* ========== Footer 드롭다운 ========== */
  const footerBtn = document.querySelector('.footer_f button');
  const fsite = document.querySelector('.footer_f .fsite');

  footerBtn.addEventListener('click', function () {
    fsite.classList.toggle('active');
    this.classList.toggle('active');
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.footer_f')) {
      fsite.classList.remove('active');
      footerBtn.classList.remove('active');
    }
  });

  /* ========== 사이트맵 메뉴 ========== */
  const hamBtn = document.querySelector('.header_i .right .header-btn .ham');
  const sitemapMenu = document.querySelector('.sitemap-menu');
  const sitemapClose = document.querySelector('.sitemap-close');

  if (hamBtn && sitemapMenu) {
    hamBtn.addEventListener('click', function (e) {
      e.preventDefault();
      sitemapMenu.classList.add('active');
      document.body.classList.add('sitemap-open');
    });
  }

  if (sitemapClose && sitemapMenu) {
    sitemapClose.addEventListener('click', function () {
      sitemapMenu.classList.remove('active');
      document.body.classList.remove('sitemap-open');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sitemapMenu?.classList.contains('active')) {
      sitemapMenu.classList.remove('active');
      document.body.classList.remove('sitemap-open');
    }
  });

  /* ========== 사이트맵 아코디언 ========== */
  document.querySelectorAll('.accordion-header').forEach((header) => {
    header.addEventListener('click', function () {
      const accordion = this.parentElement;
      const isActive = accordion.classList.contains('active');

      document.querySelectorAll('.sitemap-accordion').forEach((item) => {
        item.classList.remove('active');
      });

      if (!isActive) accordion.classList.add('active');
    });
  });

  /* ========== 채널 드롭다운 ========== */
  const channelWrap = document.querySelector('.channel-wrap');
  const channelToggle = document.querySelector('.channel-wrap .nav-toggle');

  if (channelToggle && channelWrap) {
    channelToggle.addEventListener('click', function () {
      channelWrap.classList.toggle('open');
    });
  }
};






























