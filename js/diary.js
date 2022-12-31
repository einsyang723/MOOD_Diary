let c_event = document.querySelector(".c-event")
let event_1 = document.querySelector(".event_1")
let event_2 = document.querySelector(".event_2")
let btn_down = document.querySelector(".icon_down")
let btn_up = document.querySelector(".icon_up")
let diary = document.querySelector(".c-card_big")

let e1 = document.querySelector(".g_social.g_inside").children
let e2 = document.querySelector(".g_interest.g_inside").children
let e3 = document.querySelector(".g_sleep.g_inside").children
let e4 = document.querySelector(".g_food.g_inside").children
let e5 = document.querySelector(".g_food_2.g_inside").children
let e = [e1, e2, e3, e4, e5]
let arr_event = []

let btn_finish = document.querySelector(".finish")
let date = document.querySelector(".date")
let time = document.querySelector(".time")

eventColor()
getTime()

// diary.addEventListener("change", () => {
  
// })

btn_down.addEventListener("click", () => {
  c_event.classList.add("is-active")
  event_1.style = "display: none"
  event_2.style = "display: flex"
  event_2.classList.remove("up")
  event_2.classList.add("down")
})

btn_up.addEventListener("click", () => {
  event_2.classList.remove("down")
  event_2.classList.add("up")
  setTimeout(function () {
    c_event.classList.remove("is-active")
    event_1.style = "display: flex"
    event_2.style = "display: none"
  }, 1000)
})

btn_finish.addEventListener("click", () => {
  console.log("finish")
  const a = diary.value
  console.log(a)
})

function eventColor() {
  e.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener("click", () => {
        switch (element[i].style.color) {
          case "rgb(0, 0, 0)":
            element[i].style = "color: rgba(#000, 0.5)"
            const j = arr_event.indexOf(element[i].children[1].textContent)
            delete arr_event[j]
            arr_event.sort()
            arr_event.pop()
            console.log(arr_event)
            break
          default:
            element[i].style = "color: #000"
            arr_event.push(element[i].children[1].textContent)
            console.log(arr_event)
            break
        }
      })
    }
  })
}

function getTime() {
  let d = new Date()
  const dateText = (d.getMonth() + 1) + "月" + d.getDate() + "日"
  const timeText = d.getHours() + ":" + d.getMinutes()
  date.textContent = dateText
  time.textContent = timeText
}