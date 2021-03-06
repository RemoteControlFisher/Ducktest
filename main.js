var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/duck.png")

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	gameEngine.init(ctx);

	gameEngine.addEntity(new duck(gameEngine, "walk", 20, 20))
	gameEngine.addEntity(new duck(gameEngine, "jump", 84, 20))
	gameEngine.addEntity(new duck(gameEngine, "holdwalk", 148, 20))
	gameEngine.start();
});
