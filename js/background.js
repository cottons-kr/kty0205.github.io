const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]
const target = document.body
target.style.backgroundImage = `url(img/${chosenImage})`