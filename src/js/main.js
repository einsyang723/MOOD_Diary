let btn_add = document.querySelector(".btn_add")
let card_mood = document.querySelector(".c-mood")

btn_add.addEventListener("click", () => {
  card_mood.style = "display: flex"
  btn_add.innerHTML = "下一個"
  btn_add.classList.add('btn_next')

  //將"添加"的按鈕改為"下一個"的按鈕
  //之後增加"點擊後跳轉到日記頁面"的功能
  let btn_next = document.querySelector(".btn_next")
  btn_next.addEventListener("click", () => {
    console.log("diary page")
    window.location.assign("diary.html");
  })
})