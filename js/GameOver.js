//Skapar objektet
var GameOver = {
    
    create: function(){
        this.add.sprite(0,0,'bg');
        
        text = this.game.add.text(game.world.centerX, 150, "- Välkommen åter! -");

        //  Centers the text
        text.anchor.set(0.5);
        text.align = 'center';
        text.fontSize = 50;
    }
};