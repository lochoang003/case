
let canvas = document.getElementById(' canVas')
let ctx =canvas.getContext('2d')

// Khởi tạo đối tượng cá lớn
var bigFish = {
    x: canvas.width/2,
    y: canvas.height/2,
    width: 50,
    height: 50,
    speed: 5
};
// Khởi tạo đối tượng cá bé
var smallFish = {
    x: Math.random() * (canvas.width - 30),
    y: Math.random() * (canvas.height - 30),
    width: 30,
    height: 30,
    speed: 3,
    visible: true
};
// Xử lý sự kiện bàn phím
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37) { // sang trái
        bigFish.x -= bigFish.speed;
    }
    else if(event.keyCode == 39) { // sang phải
        bigFish.x += bigFish.speed;
    }
    else if(event.keyCode == 38) { // lên trên
        bigFish.y -= bigFish.speed;
    }
    else if(event.keyCode == 40) { // xuống dưới
        bigFish.y += bigFish.speed;
    }
});
// Hàm vẽ đối tượng
function drawObject(obj, color) {
    ctx.beginPath();
    ctx.rect(obj.x, obj.y, obj.width, obj.height);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}
// Hàm kiểm tra va chạm
function checkCollision(obj1, obj2) {
    var left1 = obj1.x;
    var right1 = obj1.x + obj1.width;
    var top1 = obj1.y;
    var bottom1 = obj1.y + obj1.height;
    var left2 = obj2.x;
    var right2 = obj2.x + obj2.width;
    var top2 = obj2.y;
    var bottom2 = obj2.y + obj2.height;
    return (left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2);
}
// Hàm vẽ trò chơi
function drawGame() {
    // Xóa canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Vẽ cá lớn
    drawObject(bigFish, "#0095DD");
    // Vẽ cá bé
    if(smallFish.visible) {
        drawObject(smallFish, "#FF0000");
        smallFish.x += smallFish.speed;
        if(smallFish.x > canvas.width) {
            smallFish.x = 0;
            smallFish.y = Math.random() * (canvas.height - 30);
        }
        if(checkCollision(bigFish, smallFish)) {
            bigFish.width += 5;
            bigFish.height += 5;
            smallFish.visible = false;
        }
    }
    // Lặp lại vẽ trò chơi
    requestAnimationFrame(drawGame);
}
// Bắt đầu vẽ trò chơi
drawGame();




/*// Khởi tạo đối tượng người chơi
var player = {
    x: canvas.width/2,
    y: canvas.height-30,
    width: 30,
    height: 30,
    speed: 5
};
// Khởi tạo đối tượng đạn
var bullet = {
    x: 0,
    y: 0,
    width: 5,
    height: 10,
    speed: 10,
    visible: false
};
// Khởi tạo đối tượng kẻ địch
var enemy = {
    x: Math.random() * (canvas.width - 30),
    y: 0,
    width: 30,
    height: 30,
    speed: 3,
    visible: true
};
// Xử lý sự kiện bàn phím
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37) { // sang trái
        player.x -= player.speed;
    }
    else if(event.keyCode == 39) { // sang phải
        player.x += player.speed;
    }
    else if(event.keyCode == 32) { // bắn đạn
        if(!bullet.visible) {
            bullet.x = player.x + player.width/2 - bullet.width/2;
            bullet.y = player.y - bullet.height;
            bullet.visible = true;
        }
    }
});
// Hàm vẽ đối tượng
function drawObject(obj) {
    ctx.beginPath();
    ctx.rect(obj.x, obj.y, obj.width, obj.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
// Hàm kiểm tra va chạm
function checkCollision(obj1, obj2) {
    var left1 = obj1.x;
    var right1 = obj1.x + obj1.width;
    var top1 = obj1.y;
    var bottom1 = obj1.y + obj1.height;
    var left2 = obj2.x;
    var right2 = obj2.x + obj2.width;
    var top2 = obj2.y;
    var bottom2 = obj2.y + obj2.height;
    return (left1 < right2 && right1 > left2 && top1 < bottom2 && bottom1 > top2);
}
// Hàm vẽ trò chơi
setInterval(function drawGame() {
    // Xóa canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Vẽ người chơi
    drawObject(player);
    // Vẽ đạn
    if(bullet.visible) {
        drawObject(bullet);
        bullet.y -= bullet.speed;
        if(bullet.y < 0) {
            bullet.visible = false;
        }
    }
    // Vẽ kẻ địch
    if(enemy.visible) {
        drawObject(enemy);
        enemy.y += enemy.speed;
        if(enemy.y > canvas.height) {
            enemy.x = Math.random() * (canvas.width - 30);
            enemy.y = 0;
        }
        if(checkCollision(enemy, player)) {
            alert("Bạn đã thua!");
            document.location.reload();
        }
        if(checkCollision(enemy, bullet)) {
            enemy.visible = false;
            bullet.visible = false;
        }
    }
    // Kiểm tra kết thúc trò chơi
    if(!enemy.visible) {
        alert("Bạn đã thắng!");
        document.location.reload();
    }

},100)
 */
