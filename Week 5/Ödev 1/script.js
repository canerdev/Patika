let name = prompt('Write your name..')
let nameDOM = document.querySelector('#name')
let timeDOM = document.querySelector("#time")

nameDOM.innerHTML = name

function showTime() {
    let time = new Date()

    let dayNames =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = dayNames[new Date().getDay()]; // day stuff is copy pasted

    // let h = time.getHours()
    // let m = time.getMinutes()
    // let s = time.getSeconds()

    // h = h < 10 ? h = "0" + h : h ;
    // m = m < 10 ? m = "0" + m : m ;
    // s = s < 10 ? s = "0" + s : s ;
    timeDOM.innerHTML = time.toLocaleTimeString() + ' ' + day 
}
setInterval(showTime, 1000)