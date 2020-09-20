function desorientadoEsquerda () {
    basic.showLeds(`
        # . . # .
        # # . # #
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # # . # #
        # . . # .
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        # # . # #
        . # . . #
        . . . . .
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . # . . #
        # # . # #
        . . . . .
        . # . # .
        # . # . #
        `)
}
function desorientadoDireita () {
    basic.showLeds(`
        # . . # .
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . # . . #
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . # #
        . # . . #
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        # # . # #
        # . . # .
        . . . . .
        . . . . .
        # # # # #
        `)
}
basic.showLeds(`
    # # . # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 500 && input.acceleration(Dimension.X) > -500) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (input.acceleration(Dimension.X) > 500) {
        for (let index = 0; index < 2; index++) {
            desorientadoDireita()
        }
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(500)
    }
    if (input.acceleration(Dimension.X) < -500) {
        for (let index = 0; index < 2; index++) {
            desorientadoEsquerda()
        }
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # . # .
            # . # . #
            `)
        basic.pause(500)
    }
})
