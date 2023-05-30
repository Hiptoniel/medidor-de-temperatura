radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
    radio.sendNumber(121)
})
input.onGesture(Gesture.Shake, function () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature() + 32)
    basic.showString("f")
    radio.sendString("f")
})
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showNumber(input.temperature() + 32)
    basic.showString("f")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature() + 273)
    basic.showString("k")
    radio.sendValue("name", 0)
})
radio.onReceivedValue(function (name, value) {
    basic.clearScreen()
    basic.showNumber(input.temperature() + 273)
    basic.showString("k")
})
basic.forever(function () {
    radio.setGroup(121)
})
