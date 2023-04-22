let canvas = document.getElementById("canVas")
let ctx = canvas.getContext('2d')
let bg1 = new Image()
bg1.src = 'bg01.jpg'
let nhaVat = new Image()
nhaVat.src = 'nhanVat.png'
let keys = []
let count = 0
let hP = 10

let player = {
    x: 560,
    y: 70,
    width: 40,
    height: 72,
    viTri_X: 0,
    viTri_Y: 0
}
canvas.width = 800
canvas.height = 500
let vatPham1 = new Image()
vatPham1.src = 'cui4.jpg'
let vatPham2 = new Image()
vatPham2.src = 'lửa.png'
let vatPham3 = new Image()
vatPham3.src = 'cui.png'

let vatPham = {
    x: 50,
    y: 70,
    width: 10,
    height: 30,
}

let lua = {
    x: 18,
    y: 240,
    width: 400,
    height: 534.666666667,
    viTri_X: 2,
    viTri_Y: 1
}
let endGame = setInterval(function hienThi() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bg1, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(nhaVat, player.width * player.viTri_X, player.height * player.viTri_Y, player.width,
        player.height, player.x, player.y, player.width, player.height)
    ctx.drawImage(vatPham1, vatPham.x, vatPham.y, vatPham.width, vatPham.height)
    ctx.drawImage(vatPham3, 0, 260, 80, 80)
    ctx.drawImage(vatPham2, lua.width * lua.viTri_X, lua.height * lua.viTri_Y, lua.width,
        lua.height, lua.x, lua.y, 70, 50)
    diem()
    dichuyen()
    hanhDong()
    hieuUngLua()

}, 100)
function diem() {
    ctx.font = '20px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText("điểm số : " + count,30,30)
    ctx.fillText("HP    : " + hP,30,50)
}


function vaCham() {
    if (player.x + player.width >= vatPham.x - 5 &&
        player.x + 5 <= vatPham.x + vatPham.width &&
        player.y + player.height >= vatPham.y + 5 &&
        player.y + 5 <= vatPham.y + vatPham.height
    ) {
        count++
        vatPham.x = Math.random() * 750
        vatPham.y = Math.random() * 450
        if (count == 10) {
            ctx.font = '50px Arial'
            ctx.fillStyle = 'black'
            clearInterval(endGame)
            ctx.fillText("bị củi đè chết",canvas.width/2-150,canvas.height/2)
        }

    }
    if (count<= 0)
        count =0
    if (player.x + player.width >= lua.x &&
        player.x <= lua.x + 70 &&
        player.y + player.height >= lua.y &&
        player.y <= lua.y + 50
    ) {
        count--
        if (count <= 0) {
            hP --
            if (hP <= 0){
                ctx.font = '50px Arial'
                ctx.fillStyle = 'black'
                clearInterval(endGame)
                ctx.fillText("chết cháy",canvas.width/2-100,canvas.height/2)
            }

        }

    }

}

let chuyenDong = false

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true
    vaCham()

})
window.addEventListener("keyup", function (e) {
    delete keys[e.keyCode]
    chuyenDong = false
})

function dichuyen() {
    if (keys[37] && player.x > 0) {
        player.x -= 9
        player.viTri_Y = 1
        chuyenDong = true

    }
    if (keys[38] && player.y > 0) {
        player.y -= 9
        player.viTri_Y = 3
        chuyenDong = true
    }
    if (keys[40] && player.y < canvas.height - player.height) {
        player.y += 9
        player.viTri_Y = 0
        chuyenDong = true
    }
    if (keys[39] && player.x < canvas.width - player.width) {
        player.x += 9
        player.viTri_Y = 2
        chuyenDong = true
    }
}

function hieuUngLua() {
    if (lua.viTri_Y < 3) {
        lua.viTri_Y++
    } else {
        lua.viTri_Y = 0
    }
}

function hanhDong() {
    if (player.viTri_X < 3 && chuyenDong) {
        player.viTri_X++
    } else {
        player.viTri_X = 0
    }
}
