input.onButtonPressed(Button.A, function () {
    wpm += -2
    dotLength = Math.idiv(1200, wpm)
    basic.showString("" + (wpm))
})
function dash () {
    music.playTone(600, 3 * dotLength)
    basic.pause(dotLength)
}
function dot () {
    music.playTone(600, dotLength)
    basic.pause(dotLength)
}
input.onButtonPressed(Button.AB, function () {
    if (serialKeyMode == 1) {
        serialKeyMode = 0
        basic.showLeds(`
            . # # # .
            # . . . #
            # . # . #
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else if (serialKeyMode == 0) {
        serialKeyMode = 1
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    wpm += 2
    dotLength = Math.idiv(1200, wpm)
    basic.showString("" + (wpm))
})
let paddleRightHeld = 0
let paddleLeftHeld = 0
let paddleRightState = 0
let paddleLeftState = 0
let serialKeyMode = 0
let dotLength = 0
let wpm = 0
basic.showString("" + (wpm))
// 0 = automatic, 1 = cootie
wpm = 20
dotLength = Math.idiv(1200, wpm)
serialKeyMode = 1
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
    let paddleMode = 0
    paddleLeftState = pins.digitalReadPin(DigitalPin.P1) // Dash (onboard keyer)
    paddleRightState = pins.digitalReadPin(DigitalPin.P2) // Dot (onboard keyer)
    // Active LOW (pressed = 0)
    if (serialKeyMode == 0) {
        if (paddleLeftState == 1 && paddleMode == 0) {
            dash()
        } else if (paddleRightState == 1 && paddleMode == 0) {
            dot()
        }
    } else if (serialKeyMode == 1) {
        if (paddleLeftState == 0 && paddleLeftHeld == 0) {
            paddleLeftHeld = 1
            serial.writeLine("leftReleased")
        } else if (paddleLeftState == 1 && paddleLeftHeld == 1) {
            paddleLeftHeld = 0
            serial.writeLine("leftHeld")
        } else if (paddleRightState == 0 && paddleRightHeld == 0) {
            paddleRightHeld = 1
            serial.writeLine("rightReleased")
        } else if (paddleRightState == 1 && paddleRightHeld == 1) {
            paddleRightHeld = 0
            serial.writeLine("rightHeld")
        }
    }
    // Cootie mode (continuous tone while held)
    if (paddleMode == 1) {
        while (pins.digitalReadPin(DigitalPin.P1) == 0 || pins.digitalReadPin(DigitalPin.P2) == 0) {
            music.playTone(600, 50)
        }
    }
    basic.pause(10)
})
