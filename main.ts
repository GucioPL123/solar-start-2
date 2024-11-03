radio.onReceivedNumber(function (receivedNumber) {
    onoff = receivedNumber
    radio_start = 1
    if (1 == receivedNumber) {
        start = input.runningTime()
    }
})
input.onButtonPressed(Button.A, function () {
    meters += 1
    if (meters == 1) {
        basic.showNumber(1)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 2) {
        basic.showNumber(2)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 3) {
        basic.showNumber(3)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 4) {
        basic.showNumber(4)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 5) {
        basic.showNumber(5)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 6) {
        basic.showNumber(6)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 7) {
        basic.showNumber(7)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 8) {
        basic.showNumber(8)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 9) {
        meters = 8
    } else if (meters == -1) {
        meters = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    if (start != 0 && stop != 0) {
        // tutaj np.8m
        basic.showString("" + convertToText(36 * (meters / Math.round(stop - start))) + "km/h")
        basic.pause(3500)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    meters += -1
    if (meters == 1) {
        basic.showNumber(1)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 2) {
        basic.showNumber(2)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 3) {
        basic.showNumber(3)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 4) {
        basic.showNumber(4)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 5) {
        basic.showNumber(5)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 6) {
        basic.showNumber(6)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 7) {
        basic.showNumber(7)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 8) {
        basic.showNumber(8)
        basic.pause(500)
        basic.clearScreen()
    } else if (meters == 9) {
        meters = 8
    } else if (meters == -1) {
        meters = 0
    }
})
let stop = 0
let radio_start = 0
let start = 0
let meters = 0
let onoff = 0
radio.setGroup(1)
onoff = 0
meters = 0
start = 0
radio_start = 0
stop = 0
basic.forever(function () {
    if (onoff == 1 && radio_start == 1 && input.lightLevel() > 150) {
        stop = input.runningTime()
        basic.pause(1000)
        basic.showNumber(stop - start)
    }
})
