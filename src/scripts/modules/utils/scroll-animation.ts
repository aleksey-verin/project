document.addEventListener('DOMContentLoaded', function () {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  function checkElementsInViewport() {
    const items = document.querySelectorAll('.idea__item, .group__element')

    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('hovered')
      }
    }
  }

  window.addEventListener('scroll', checkElementsInViewport)

  checkElementsInViewport()
})
