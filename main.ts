basic.showIcon(IconNames.Heart)
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
4
)
basic.forever(function () {
    tm.showNumber(0)
    basic.pause(1000)
    tm.showNumber(0)
    basic.pause(1000)
})
