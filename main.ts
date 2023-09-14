function plotPoints (num: number) {
    if (num == 1) {
        led.plot(playerOnePlotX, playerOnePlotY)
        playerOnePlotY += -1
    }
    if (num == 2) {
        led.plot(playerTwoPlotX, PlayerTwoPlotY)
        PlayerTwoPlotY += -1
    }
    vinnare = 0
    return vinnare
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 20) {
        vinnare = 1
    }
    if (receivedNumber == 30) {
        vinnare = 2
    }
    basic.pause(500)
    plotPoints(vinnare)
    if (playerOnePlotY > 0) {
        basic.showString("Spelare 1 vinner !!")
        basic.pause(5000)
        basic.clearScreen()
    }
    if (PlayerTwoPlotY > 0) {
        basic.showString("Spelare 2 vinner !!")
        basic.pause(5000)
        basic.clearScreen()
    }
})
let PlayerTwoPlotY = 0
let playerTwoPlotX = 0
let playerOnePlotY = 0
let playerOnePlotX = 0
let vinnare = 0
radio.setGroup(115)
vinnare = 0
playerOnePlotX = 0
playerOnePlotY = 4
playerTwoPlotX = 4
PlayerTwoPlotY = 4
basic.forever(function () {
	
})
