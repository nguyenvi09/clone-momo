let $ = document.querySelector.bind(document)
let $$ = document.querySelectorAll.bind(document)
let navbar = document.querySelector('.navbar-dropdown')
let iconDown = document.querySelector('.rotate')

const services = $(".services")
services.onmouseover = () => {
    navbar.classList.toggle('active')
}

iconDown.onmouseover = () => {
    iconDown.classList.toggle('active-rotate')
}



// tienich section 

const tabs = $$(".tab-item")
const panes = $$(".tab-pane")

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function () {
        $(".tab-item.active-tab").classList.remove("active-tab")
        $(".tab-pane.active-display").classList.remove("active-display")

        tab.classList.add("active-tab")
        pane.classList.add("active-display")
    }
})


const tabsSecond = $$(".tab-secon-item")
const tabsBanner = $$(".tab-banner-item")

tabsSecond.forEach((tabsec, index) => {
    const banner = tabsBanner[index]
    tabsec.onclick = function () {
        $(".tab-secon-item.active-tab-secon").classList.remove("active-tab-secon")
        $(".tab-banner-item.active-banner").classList.remove("active-banner")
        tabsec.classList.add("active-tab-secon")
        banner.classList.add("active-banner")
    }
})

var swiper = new Swiper(".banner-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     540: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //     },
    //     768: {
    //       slidesPerView: 1,
    //       spaceBetween: 0,
    //     },
    //     991: {
    //       slidesPerView: 1,
    //       spaceBetween: 00,
    //     },
    // },
});


// movie theaters section
const movieTabsItem = $$('.movie-tab-item')
const movieTabsPane = $$('.movie-tab-pane')

const tabActive = $('.movie-tab-item')
const line = $('.movie-tab-primary .line')

line.style.left = tabActive.offsetLeft + "px"
line.style.width = tabActive.offsetWidth + "px"

movieTabsItem.forEach((movietab, index) => {
    const moviePane = movieTabsPane[index]

    movietab.onclick = function() {
        $('.movie-tab-pane.movie-active').classList.remove('movie-active')

        line.style.left = this.offsetLeft + "px"
        line.style.width = this.offsetWidth + "px"

        moviePane.classList.add('movie-active')
    }
})



var swiper = new Swiper(".movie-tab-pane", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     540: {
    //       slidesPerView: 2,
    //       spaceBetween: 10,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 10,
    //     },
        // 991: {
        //   slidesPerView: 1,
        //   spaceBetween: 00,
        // },
    // },
})

var swiper = new Swiper(".movie-tab-container .movie-tab-pane:last-child", {
    slidesPerView: 5,
    spaceBetween: 20,
    slidesPerGroup: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    // breakpoints: {
    //     540: {
    //       slidesPerView: 2,
    //       spaceBetween: 10,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 10,
    //     },
        // 991: {
        //   slidesPerView: 1,
        //   spaceBetween: 00,
        // },
    // },
})

// guide section

var swiper = new Swiper(".phone-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  })


// news section start

const tabsNews = $$('.tab-news-item')
const panesNews = $$('.tab-news-pane')

const tabNewsItemActive = $('.tab-news-item.active-tab-news-item')
const tabNewsLine = $('.tab-news .tab-news-line')

tabNewsLine.style.left = tabNewsItemActive.offsetLeft + "px"
tabNewsLine.style.width = tabNewsItemActive.offsetWidth + "px"

tabsNews.forEach((tab, index) => {
    const pane = panesNews[index]

    tab.onclick = function() {
        $('.tab-news-item.active-tab-news-item').classList.remove('active-tab-news-item')
        $('.tab-news-pane.active-tab-news-pane').classList.remove('active-tab-news-pane')

        tabNewsLine.style.left = this.offsetLeft + "px"
        tabNewsLine.style.width = this.offsetWidth + "px"

        this.classList.add('active-tab-news-item')
        pane.classList.add('active-tab-news-pane')
    }
})


// news section end


// ariline ticket starts

const tabsTicket = $$('.tab-ticket-item')
const tabsPaneTicket = $$('.tab-pane-ticket-item')

const tabTicketActive = $('.tab-ticket-item.active-tab-ticket')
const tabTicketLine = $('.tabs-ticket .line-ticket')

tabTicketLine.style.left = tabTicketActive.offsetLeft + "px"
tabTicketLine.style.width = tabTicketActive.offsetWidth + "px"

tabsTicket.forEach((tab, index) => {
    const pane = tabsPaneTicket[index]

    tab.onclick = function () {
        $('.tab-ticket-item.active-tab-ticket').classList.remove('active-tab-ticket')
        $('.tab-pane-ticket-item.active-ticket').classList.remove('active-ticket')

        tab.classList.add('active-tab-ticket')
        pane.classList.add('active-ticket')

        tabTicketLine.style.left = tabTicketActive.offsetLeft + "px"
        tabTicketLine.style.width = tabTicketActive.offsetWidth + "px"
    }
})


// ariline ticket ends

// pay sercurity starts

const tabsPaySecu = $$('.tab-paySecu-item')
const tabsPaySecuPane = $$('.tab-paySecu-pane')

const tabPaySecuActive = $('.tab-paySecu-item.active-tab-paySecu')
const paySecuLine = $('.tabs-paySecu .paySecu-line')

paySecuLine.style.left = tabPaySecuActive.offsetLeft + "px"
paySecuLine.style.width = tabPaySecuActive.offsetWidth + "px"

tabsPaySecu.forEach((tab,index) => {
    const pane = tabsPaySecuPane[index]

    tab.onclick = function() {
        $('.tab-paySecu-item.active-tab-paySecu').classList.remove('active-tab-paySecu')
        $('.tab-paySecu-pane.active-paySecu-pane').classList.remove('active-paySecu-pane')

        tab.classList.add('active-tab-paySecu')
        pane.classList.add('active-paySecu-pane')

        paySecuLine.style.left = this.offsetLeft + "px"
        paySecuLine.style.width = this.offsetWidth + "px"
    }
})

// pay sercurity ends