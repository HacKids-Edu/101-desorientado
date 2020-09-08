/**
 * Forças Físicas - Aceleração
 */
function desorientado () {
    basic.showLeds(`
        # . . # .
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        # # . # #
        # . . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        # # . # #
        . # . . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . # . . #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 500 && input.acceleration(Dimension.X) > -500) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.acceleration(Dimension.X) > 500 || input.acceleration(Dimension.X) < -500) {
        if (input.acceleration(Dimension.Y) > 500 || input.acceleration(Dimension.Y) < -500) {
            for (let index = 0; index < 2; index++) {
                desorientado()
            }
            basic.showLeds(`
                # # . # #
                # # . # #
                . . . . .
                . # # # .
                # . . . #
                `)
            basic.pause(500)
        }
    }
})
