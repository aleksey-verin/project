import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const arrowDown: NodeListOf<HTMLElement> =
  document.querySelectorAll('[data-section]')

arrowDown.forEach((arrow) => {
  const section = document.querySelector(`.${arrow.dataset.section}`)
  if (arrow.dataset.section === 'products') {
    arrow.addEventListener('click', (event) => {
      event.preventDefault()
      section?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      })
    })
  } else {
    arrow.addEventListener('click', (event) => {
      event.preventDefault()
      section?.scrollIntoView({
        block: window.innerWidth < 1000 ? 'start' : 'center',
        behavior: 'smooth',
      })
    })
  }
})
