input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let index = 0; index <= 6; index++) {
        mult = index / 6
        lum = mult * 6
        strip.setPixelColor(index, neopixel.hsl(0, 0, lum * 7))
    }
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    strip.showRainbow(1, 360)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 1000; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(50)
    }
})
input.onGesture(Gesture.Shake, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    for (let index = 0; index <= 6; index++) {
        mult = index / 6
        lum = mult * 6
        strip.setPixelColor(index, neopixel.rgb(lum * 10, 0, 0))
        strip.show()
    }
})
let lum = 0
let mult = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 18, NeoPixelMode.RGB)
strip.setBrightness(80)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
	
})
