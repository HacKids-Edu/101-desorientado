function desorientadoEsquerda () {
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
function desorientadoDireita () {
    basic.showLeds(`
        # . . # .
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # . . #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        . # . . #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . # .
        . . . . .
        # # # # #
        . . . . .
        `)
}
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 500 && input.acceleration(Dimension.X) > -500) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.acceleration(Dimension.X) > 500) {
        for (let index = 0; index < 2; index++) {
            desorientadoDireita()
        }
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # # # # #
            . . . . .
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
            . # # # .
            # . . . #
            `)
        basic.pause(500)
    }
})
