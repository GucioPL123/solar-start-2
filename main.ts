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
})
input.onButtonPressed(Button.A, function () {
    meters += 1
    basic.showString("" + meters + "m")
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    } else if (meters == 61) {
        meters = 60
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    onoff = true
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
    basic.showString("" + meters + "m")
    basic.clearScreen()
    if (meters == -1) {
        meters = 0
    } else if (meters == 61) {
        meters = 60
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    control.reset()
})
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
basic.forever(function () {
    if (onoff == true && radio_start == 1 && input.lightLevel() < 205) {
        stop = input.runningTime()
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(2000)
        basic.clearScreen()
        basic.showNumber(stop - start)
    } else if (onoff == true) {
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
    }
})
