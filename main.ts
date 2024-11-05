enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    radio_start = 1
    if (1 == receivedNumber) {
        start = input.runningTime()
    }
    basic.clearScreen()
    radio.setGroup(2)
})
input.onButtonPressed(Button.A, function () {
    meters += 1
    basic.showNumber(meters)
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    } else if (meters == 61) {
        meters = 60
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (onoff == false) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        onoff = true
    } else if (onoff == true) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        onoff = false
    }
})
input.onButtonPressed(Button.AB, function () {
    if (start != 0 && stop != 0) {
        // tutaj np.8m
        basic.showNumber(3.6 * (meters / ((stop - start) / 1000)))
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
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    } else if (meters == 61) {
        meters = 60
    }
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
    control.reset()
})
let radio_stop = false
let stop = 0
let radio_start = 0
let start = 0
let meters = 0
let onoff = false
radio.setGroup(1)
onoff = false
meters = 0
start = 0
radio_start = 0
stop = 0
loops.everyInterval(50, function () {
    if (onoff == true && radio_start == 1 && (radio_stop == false && input.lightLevel() < 205)) {
        onoff = false
        stop = input.runningTime()
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Half)), music.PlaybackMode.InBackground)
        radio_stop = true
        basic.pause(2000)
        basic.clearScreen()
        basic.showNumber(stop - start)
    }
})
basic.forever(function () {
    if (radio_stop == true) {
        basic.pause(5000)
        radio_stop = false
    }
})
