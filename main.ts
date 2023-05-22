input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(1)
})
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . . # . .
    `)
radio.setGroup(25)
