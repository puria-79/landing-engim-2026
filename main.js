const container = document.querySelector(".container")
const img = document.querySelectorAll("img")
window.onmouseup = () => {
  container.dataset.mouseDownAt = "0"
  container.dataset.mouseNow = container.dataset.percentage
}
window.onmousedown = e => {
  container.dataset.mouseDownAt = String(e.clientX)
}
container.onmousemove = e => {
  if (container.dataset.mouseDownAt === "0") return;
  const prevPercentage = container.dataset.mouseNow
  const mouseDelta = parseFloat(container.dataset.mouseDownAt) - e.clientX
  const mouseMax = window.innerWidth / 2
  const percentage = Math.min(Math.max((mouseDelta / mouseMax) * -100 + parseFloat(prevPercentage), -100), 0)
  container.dataset.percentage = String(percentage)
  container.animate({
    transform: `translate(${percentage}%, 0%)`
  }, {
    duration: 1200,
    fill: 'forwards'
  })
  img.forEach((e) => {
    e.animate({
      objectPosition: `${-percentage}% center`
    }, {
      duration: 1200,
      fill: 'forwards'
    })
  })
}

const layers = document.querySelectorAll('.layer');

function parallax() {
  const y = window.scrollY;
  for (let i = 1; i < layers.length; i++) {
    layers[layers.length-i].style.transform = `translateY(${(i*0.1) * y}px)`;
  }
}

window.addEventListener('scroll',parallax,false);