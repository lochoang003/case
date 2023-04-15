const canvas = document.getElementById("canvas1")

const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500
 const images = {}
images.cui = new Image()
images.cui.src = "cui.jpg"

const cuiWidth = 360
const cuiHeight = 360
let cuiFrameX= 0
let cuiFrameY= 0
let cuiX=0
let cuiY=0