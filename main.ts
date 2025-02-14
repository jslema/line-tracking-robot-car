let value = 0
basic.forever(function () {
    value = MiniCar.LineTracking()
    if (value == 1) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 70)
    } else if (value == 2) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
    } else if (value == 3) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
    } else {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 0)
    }
})
