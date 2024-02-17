

export const scrolling = (element) => {
  document.getElementById(element).scrollIntoView({
    behavior : 'smooth'
  })
}