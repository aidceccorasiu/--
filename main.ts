input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    servos.P2.run(100)
    basic.pause(2000)
    servos.P2.run(-100)
    basic.pause(2000)
    servos.P2.run(0)
})
basic.forever(function () {
    let 狀態 = 0
    if (狀態 == 1) {
    	
    }
})
