//Skapar objektet
var GameStart = {

  create: function () {
    this.add.sprite(0,0,'bg');
    this.info = this.add.text(game.world.centerX,150,'Välkommen!');
    this.info.anchor.setTo(0.5);
  }
};