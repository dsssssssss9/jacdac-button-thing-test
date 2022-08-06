modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(1)
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showNumber(2)
})
led.setBrightness(64)
basic.showIcon(IconNames.Diamond)
basic.forever(function () {
	
})
