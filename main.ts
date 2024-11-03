radio.onReceivedNumber(function (receivedNumber) {
    onoff += receivedNumber
    if (1 == receivedNumber) {
        start = input.runningTime()
    }
})
let start = 0
radio.setGroup(1)
let onoff = 0
basic.forever(function () {
    if (onoff == 1 && input.lightLevel() > 75) {
        basic.showNumber(0)
    }
})
