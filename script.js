const cheese = document.getElementById('cheese')
const pointerListeners = []

const addHole = () => {
  const size = 20 + Math.floor(Math.random() * 40)
  const left = Math.floor(Math.random() * 100)
  const top = Math.floor(Math.random() * 100)
  const parallaxAmount = size / 40

  const hole = document.createElement('div')
  hole.classList.add('hole')
  hole.style.width = `${size}px`
  hole.style.height = `${size}px`
  hole.style.left = `${left}%`
  hole.style.top = `${top}%`

  pointerListeners.push((clientX, clientY) => {
    const top = (clientY / window.innerHeight * 100 - 50)
      * parallaxAmount
    const left = (clientX / window.innerWidth * 100 - 50)
      * parallaxAmount

    hole.style.marginTop = `${top}px`
    hole.style.marginLeft = `${left}px`
  })

  cheese.appendChild(hole)
}

for (let i = 0; i < 40; i++) addHole()

document.addEventListener('mousemove', (event) => {
  for (let listener of pointerListeners) {
    listener(event.clientX, event.clientY)
  }
})

document.addEventListener('touchmove', (event) => {
  for (let listener of pointerListeners) {
    listener(event.touches[0].clientX, event.touches[0].clientY)
  }
})