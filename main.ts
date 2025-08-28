scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.splash("")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level1`)
})
let location = 0
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
scene.setBackgroundColor(8)
scene.cameraFollowSprite(myCorg)
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level1`))
tiles.placeOnTile(myCorg, tiles.getTileLocation(0, 9))
location = location
