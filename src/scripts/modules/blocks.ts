import { Modal } from 'bootstrap'
import Swiper from 'swiper'

// Инициализируем слайдер
const swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: false,
  },
  breakpoints: {
    960: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
})

// Бургер меню
const burgerBtn = document.getElementById('header__burger')
const burgerMenu = document.getElementById('header__menu')
burgerBtn?.addEventListener('click', function () {
  burgerMenu?.classList.toggle('d-none')
})

// Инициализируем модальное окно
const window = document.getElementById('ModalForm') as HTMLDivElement | null
if (window) {
  const modalForm = new Modal(window, {
    focus: true,
  })
}

// Изображение для модального окна
const images = document.querySelectorAll(
  '.ModalImg'
) as NodeListOf<HTMLImageElement>

images.forEach((element) => {
  element.addEventListener('click', function (event: MouseEvent) {
    const block = document.querySelector('.modal-img') as HTMLImageElement
    block.src = (event.target as HTMLImageElement).currentSrc
  })
})
