/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== CHANGE BACKGROUND HEADER ===*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('bg-header')
                      : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper('.popular__content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            centeredSlides: false,
        }
    }
  });

/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

faqItems.forEach((item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    faqHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-open')
        toggleItem(item)
        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const faqContent = item.querySelector('.choose__faq-content')

    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    }else{
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionClass.classList.add('active-link')
                }else{
                    sectionClass.classList.remove('active-link')
                }
    })

}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

//we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the use choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__content, .popular__container, .products__container, .join__bg, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.choose__image, .features__image`, {origin: 'left'})
sr.reveal(`.choose__content, .features__content`, {origin: 'right'})