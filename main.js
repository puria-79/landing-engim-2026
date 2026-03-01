// const container = document.querySelector(".container")
// const img = document.querySelectorAll("img")
// window.onmouseup = () => {
//   container.dataset.mouseDownAt = "0"
//   container.dataset.mouseNow = container.dataset.percentage
// }
// window.onmousedown = e => {
//   container.dataset.mouseDownAt = String(e.clientX)
// }
// container.onmousemove = e => {
//   if (container.dataset.mouseDownAt === "0") return;
//   const prevPercentage = container.dataset.mouseNow
//   const mouseDelta = parseFloat(container.dataset.mouseDownAt) - e.clientX
//   const mouseMax = window.innerWidth / 2
//   const percentage = Math.min(Math.max((mouseDelta / mouseMax) * -100 + parseFloat(prevPercentage), -100), 0)
//   container.dataset.percentage = String(percentage)
//   container.animate({
//     transform: `translate(${percentage}%, 0%)`
//   }, {
//     duration: 1200,
//     fill: 'forwards'
//   })
//   img.forEach((e) => {
//     e.animate({
//       objectPosition: `${-percentage}% center`
//     }, {
//       duration: 1200,
//       fill: 'forwards'
//     })
//   })
// }

// const layers = document.querySelectorAll('.layer');

// function parallax() {
//   const y = window.scrollY;
//   for (let i = 1; i < layers.length; i++) {
//     layers[layers.length - i].style.transform = `translateY(${(i * 0.1) * y}px)`;
//   }
// }

// window.addEventListener('scroll', parallax, false);

const parallaxContainer = document.querySelector(".parallax-container")

if (parallaxContainer) {
  const setSnapState = isVisible => {
    document.querySelector("header").classList.toggle("snap-first-section", isVisible)
  }
  const width = window.innerWidth

  const observer = new IntersectionObserver(
    entries => {
      setSnapState(entries[0].isIntersecting)
    },
    { threshold: width > 752 ? 0.65 : 0.95, rootMargin: "1% 0px 10% 0px"}
  ) 

  setSnapState(parallaxContainer.getBoundingClientRect().bottom > 0)
  observer.observe(parallaxContainer)
}

const signupIcon = document.querySelector(".sign-up img")
const signupModal = document.querySelector(".sign-up-modal")
signupModal.addEventListener("click", e => {
  if (e.target == signupModal) {
    signupModal.style.display = "none"
  }
})
signupIcon.addEventListener("click", (e) => {
  signupModal.style.display = "block"
})

const loginIcon = document.querySelector(".login img")
const loginModal = document.querySelector(".login-modal")
loginModal.addEventListener("click", e => {
  if (e.target == loginModal) {
    loginModal.style.display = "none"
  }
})
loginIcon.addEventListener("click", (e) => {
  loginModal.style.display = "block"
})