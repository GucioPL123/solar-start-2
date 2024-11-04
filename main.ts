radio.onReceivedNumber(function (receivedNumber) {
    onoff = receivedNumber
    radio_start = 1
    if (1 == receivedNumber) {
        start = input.runningTime()
    }
})
input.onButtonPressed(Button.A, function () {
    meters += 1
    basic.showNumber(meters)
    basic.pause(500)
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    } else if (meters == 61) {
        meters = 60
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    control.reset()
})
input.onButtonPressed(Button.AB, function () {
    if (start != 0 && stop != 0) {
        // tutaj np.8m
        basic.showString("" + (3.6 * (meters / ((stop - start) / 1000))))
        basic.pause(3500)
        basic.clearScreen()
    } else {
        music.play(music.tonePlayable(277, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.No)
        basic.pause(300)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    meters += -1
    basic.showNumber(meters)
    basic.pause(500)
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    } else if (meters == 61) {
        meters = 60
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
