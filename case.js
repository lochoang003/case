const canvas = document.getElementById("canvas1")

const ctx = canvas.getContext('2d')
canvas.width = 800
canvas.height = 500
const keys = []

const player = {
    x: 200,//tọa độ ảnh di chuyển trong canvas
    y: 150,
    width: 40,//khoảng cách cắt ảnh từ 0 tới width theo chiều ngang
    height: 72,//khoảng cách cắt ảnh từ 0 tới height theo chiều dọc
    framesX: 0,// framesX là giá trị x trong ảnh gốc
    framesY: 0,// là giá trị y trong ảnh gốc
    speed: 9, //tốc độ di chuyển
    moving: false //gắn cờ di chuyển
}
//khởi tạo nhân vật
const playerSprite = new Image();
playerSprite.src = "nhanVat.png"
//khởi tạo ảnh nền
const background = new Image()
background.src = "bg.jpg"
//thêm hình ảnh nhân vật vào trong canvas
// .drawImage vẽ hình ảnh lên canvas
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

//animate hàm gọi hình ảnh
/*function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // xóa khung hình khi di chuyển
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    // 5 biến là hình ảnh trong ô vuông ,,  4 biến sau là di chuyển ô vuông
    drawSprite(playerSprite, player.width * player.framesX, player.height * player.framesY, player.width, player.height,
        player.x, player.y, player.width, player.height)
    movePlayer()
    diChuyen()
    requestAnimationFrame(animate)
    }

animate();*/
// tốc độ di chuyển / khung hình
setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // xóa khung hình khi di chuyển
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
    // 5 biến là hình ảnh trong ô vuông ,,  4 biến sau là di chuyển ô vuông
    drawSprite(playerSprite, player.width * player.framesX, player.height * player.framesY, player.width, player.height,
        player.x, player.y, player.width, player.height)
    movePlayer()
    cui1(images.cui11,  cui.x, cui.y , cui.width, cui.height,
        cui.cuiX, cui.cuiY, cui.width, cui.height)
    vaCham()
    diChuyen()
}, 100)//mili giây / 10 khung hình

// nhận giá trị khi ấn phím vào mảng keys
window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true
    player.moving = true // gắn cờ

})
//xóa giá trị vừa nhận của phím ở mảng keys
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode]
    player.moving = false // gắn cờ
})

// thêm sự kiện bàn phím
function movePlayer() {
    if (keys[38] && player.y > 0) {
        player.y -= player.speed
        player.framesY = 3
          player.moving = true
    }
    if (keys[37] && player.x > 0) {
        player.x -= player.speed
        player.framesY = 1
          player.moving = true
    }
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += player.speed
        player.framesY = 2
         player.moving = true
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += player.speed
        player.framesY = 0
         player.moving = true
    }
}

// hiệu ứng di chuyển
function diChuyen() {
    if (player.framesX < 3 && player.moving) {
        player.framesX++
    } else {
        player.framesX = 0
    }

}


const images = {}
images.cui11 = new Image()
images.cui11.src = "cui4.jpg"
  const cui = {
    x :0,
    y: 0,
    width :10,
    height: 30,
    cuiX:200,//vị trí
    cuiY:160
  }

function cui1(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

function vaCham() {
if (player.x == cui.cuiX || player.y == cui.cuiY){
    console.log(1)
}
}
