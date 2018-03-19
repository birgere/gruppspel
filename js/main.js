//Skapar spelet
var game = new Phaser.Game(800, 450, Phaser.AUTO);

//Lägger till ett spelläge
game.state.add('PreloadState', PreloadState);
game.state.add('GameStart', GameStart);
game.state.add('GameOver', GameOver);
game.state.add('Level1', Level1);
game.state.add('Level2', Level2);


//Startar spelets första spelläge
game.state.start('PreloadState');
