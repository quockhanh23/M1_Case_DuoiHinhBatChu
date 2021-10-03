let name = prompt("Nhập tên")
document.getElementById('ten').innerHTML = "Tên: " + name
let arrQuestion = ["anh1.jpg", "anh2.jpg", "anh3.jpg", "anh4.jpg", "anh5.jpg", "anh6.jpg"];
let arrAns = ["sóc trăng", "yếu ớt", "điếu cầy", "chó", "mắt lác", "óc chó"];
let arrAns2 = ['Con sóc và mặt trăng có liên quan đến nhau không?', '2 quả ớt trông thế nào?',
    'hút hít phê pha', 'con gì sủa gâu gâu', 'mắt anh làm sao thế?', 'tên 1 loại quả (hạt) ,' +
    ' hay được dùng để chửi người khác :v']
let point = 0
let index = 1
let time = 30;


function check() {

    let answer = document.getElementById("nhập").value;
    let question = document.getElementById("anh1");
    let srcSplit = question.src.split("/");
    let src = srcSplit[srcSplit.length - 1];
    let index = arrQuestion.indexOf(src);
    if (answer == arrAns[index]) {
        alert("đúng")
        document.getElementById('audio1').play();  // dẫn id file nhạc vào đây
        question.src = arrQuestion[index + 1];
        point = point + 2

        document.getElementById("res2").innerHTML = "Điểm của bạn: " + point
    } else
        // lỗi audio
        alert("sai")

    point--
    document.getElementById("res2").innerHTML = "Điểm của bạn: " + point

    if (index == 5) {

        document.write("<h3 style='text-align: center;'>Bạn đã thắng" +
            "<h3  style='text-align: center'>" + "Người chơi: " + name +
            " ,Điểm của bạn " + point + "<br>" +
            "<br>" + "Trò chơi kết thúc" + "<br>" +
            "<br>" + "Bạn có muốn chơi lại không??" + "<br>" +
            '<button style="font-size: 30px; ' +
            'color: #008CBA;' +
            'border-radius: 15px;' +
            'border: none; ' +
            'background-color: #008CBA;' +
            'text-decoration: white' +
            ' "><a href="index.html">Chơi lại</a></button>' +
            '<button style="font-size: 30px; color: #008CBA; border-radius: 15px;' +
            'background-color: #008CBA; border: none;" ' +
            '><a href="index3.html">Không chơi nữa đâu!</a></button>')

    }
    document.getElementById('res').innerHTML = "Câu trả lời của bạn là: " + answer
    time = 30
}

countdown()

function audio() {
    document.getElementById('audio').play()
}

function tips() {
    let question = document.getElementById("anh1");
    let srcSplit = question.src.split("/");
    let src = srcSplit[srcSplit.length - 1];
    let index = arrQuestion.indexOf(src);
    document.getElementById('res').innerHTML =
        "<h3 style='text-align: right'>"
        + arrAns2[index] + "</h3>"
}

function changeImage() {
    time = 30

    document.getElementById("anh1").src = arrQuestion[index]
    index++
    point--
    document.getElementById("res2").innerHTML = "Điểm của bạn: " + point
    if (index == 7) {

        alert("hết rồi")

        document.write("<h3 style='text-align: center;'>Bỏ qua nhiều quá" +
            "<h3  style='text-align: center'>" + "Người chơi: " + name +
            " ,Điểm của bạn " + point + "<br>" +
            "<br>" + "Trò chơi kết thúc" + "<br>" +
            "<br>" + "Bạn có muốn chơi lại không??" + "<br>" +
            '<button style="font-size: 30px; ' +
            'color: #008CBA;' +
            'border-radius: 15px;' +
            'border: none; ' +
            'background-color: #008CBA;' +
            'text-decoration: white' +
            ' "><a href="index.html">Chơi lại</a></button>' +
            '<button style="font-size: 30px; color: #008CBA; border-radius: 15px;' +
            'background-color: #008CBA; border: none;" ' +
            '><a href="index3.html">Không chơi nữa đâu!</a></button>')
    }

}

function countdown() {
    if (time === 0) {
        document.getElementById('audio2').play()
        alert('hết giờ')

    } else {
        document.getElementById('time').innerHTML = time
        time--
        setTimeout(countdown, 1000)
    }
}
function myFunction() {
    document.getElementById('nhập').style.background = "yellow";
}
function myFunction2() {
    document.getElementById('nhập').style.background = "#9fd7ea";
}