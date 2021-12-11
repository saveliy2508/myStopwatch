let startButton = document.querySelector('.stopwatch__start')
let pauseButton = document.querySelector('.stopwatch__pause')
let restartButton = document.querySelector('.stopwatch__restart')
let lapButton = document.querySelector('.stopwatch__lap')
let clearLapButton = document.querySelector('.stopwatch__clear-laps')
let ulLaps = document.querySelector('.stopwatch__lap-list')
let milliseconds = document.querySelector('.stopwatch__milliseconds')
let seconds = document.querySelector('.stopwatch__seconds')
let minutes = document.querySelector('.stopwatch__minutes')

function startFunction() {
    startButton.setAttribute('disabled', '')
    pauseButton.removeAttribute('disabled', '')
    let millisecondsVariable = Number(milliseconds.innerHTML)
    let interval10ms = setInterval(() => {
        if(milliseconds.innerHTML.length == 1){
            milliseconds.classList.add('before-number')
        }
        if(milliseconds.innerHTML > 8){
            milliseconds.classList.remove('before-number')
        }
        if(seconds.innerHTML.length == 1){
            seconds.classList.add('before-number')
        }
        if(seconds.innerHTML > 9){
            seconds.classList.remove('before-number')
        }
        if(minutes.innerHTML.length == 1){
            minutes.classList.add('before-number')
        }
        if(minutes.innerHTML > 9){
            minutes.classList.remove('before-number')
        }
        pauseButton.addEventListener('click', function () {
            clearInterval(interval10ms)
            pauseButton.setAttribute('disabled', '')
            startButton.removeAttribute('disabled', '')
        })
        if (millisecondsVariable < 100) {
            milliseconds.innerHTML = millisecondsVariable;
            millisecondsVariable += 1
            if (millisecondsVariable == 99) {
                millisecondsVariable = 0
                milliseconds.innerHTML = 0
                let numberSeconds = Number(seconds.innerHTML) + 1
                seconds.innerHTML = numberSeconds
                if (seconds.innerHTML == 60) {
                    seconds.innerHTML = 0
                    let numberMinutes = Number(minutes.innerHTML) + 1
                    minutes.innerHTML = numberMinutes
                }
            }
        }
    }, 10);
}

startButton.addEventListener('click', startFunction)

function restart(){
    milliseconds.innerHTML = '00'
    seconds.innerHTML = '00'
    minutes.innerHTML = '00'
    milliseconds.classList.remove('before-number')
    seconds.classList.remove('before-number')
    minutes.classList.remove('before-number')
}

restartButton.addEventListener('click', restart)

let lapCounter = 0;
function newLap (){
    lapCounter+=1
    let newLi = document.createElement('li')
    newLi.classList.add('stopwatch__li')
    let minVar = minutes.innerHTML
    let secVar = seconds.innerHTML
    let milliVar = milliseconds.innerHTML
    if(milliVar.length == 1) {
        milliVar = '0' + milliVar
    }
    if(secVar.length == 1) {
        secVar = '0' + secVar
    }
    if(minVar.length == 1) {
        minVar = '0' + minVar
    }
    newLi.innerHTML = `Lap${lapCounter} = ${minVar}:${secVar}:${milliVar}`
    ulLaps.prepend(newLi)
}

lapButton.addEventListener('click', newLap)

function clearLaps(){
    ulLaps.innerHTML = ''
    lapCounter = 0
}

clearLapButton.addEventListener('click', clearLaps)