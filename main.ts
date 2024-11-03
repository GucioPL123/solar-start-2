radio.onReceivedNumber(function (receivedNumber) {
    onoff = receivedNumber
    radio_start = 1
    if (1 == receivedNumber) {
        start = input.runningTime()
    }
})
input.onButtonPressed(Button.A, function () {
    if (start != 0 && stop != 0) {
        // tutaj np.8m
        basic.showNumber(36 * (8 / Math.round(stop - start)))
        basic.pause(3500)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
	
})
let stop = 0
let radio_start = 0
let start = 0
let onoff = 0
radio.setGroup(1)
onoff = 0
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
