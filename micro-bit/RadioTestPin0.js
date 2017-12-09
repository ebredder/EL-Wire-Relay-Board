radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == 1) {
        // Display
        basic.showString("TEST")
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1000)
        radio.sendNumber(2)
    }
    if (receivedNumber == 2) {
        basic.pause(1000)
        // Display
        basic.showString("OK")
    }
})
radio.setGroup(0)
basic.forever(() => {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        basic.pause(300)
    }
})
