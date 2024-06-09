// Thay đổi nội dung búc thư ở đây
var letterContent = "Thương em yêu của anh lắm. Đoạn thời gian cuối ni em mệt lắm rồi. Thực sự anh rất muốn ôn em vào lòng dỗ dành em. Nhớ em rât nhiêu. Bảo bối của anh cố lên hai ta cùng cố gắng vì tương lai cả hai nha. Hè ni nữa thôi ta ko còn phải yêu xa nữa anh bù lại cho em thật nhiều gấp hàng tỉ lần những ngày mà ta ko ở bên nhay. Anh cố gắng cùng với em. Anh yêu em nhiều lắm"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})