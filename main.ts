controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Lola.vy == 0) {
        Lola.vy = -300
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.melt)
})
let Lola: Sprite = null
scene.setBackgroundColor(9)
Lola = sprites.create(img`
    . . . . . . f f f f 4 4 f . . . 
    . . . . f f b f 5 4 5 5 4 f . . 
    . . . f b 3 3 e 4 5 5 5 5 f . . 
    . . f b 3 3 3 3 e 4 4 4 e f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . . f 3 3 3 3 e b 3 e e 3 3 f . 
    . . f 3 3 3 3 f f e e e 3 3 f . 
    . . f b b b b f b f e e e 3 f . 
    . . f b b b b e 1 f 4 4 e f . . 
    . f f b b b b f 4 4 4 4 f . . . 
    . f b b b b f f f e e e f . . . 
    . . f b b f 4 4 e d d d f . . . 
    . . . f f e 4 4 e d d d f . . . 
    . . . . f b e e b d b d b f . . 
    . . . . f f d 1 d 1 d 1 f f . . 
    . . . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Lola, 100, 0)
tiles.setTilemap(tilemap`level2`)
Lola.ay = 1000
scene.cameraFollowSprite(Lola)
