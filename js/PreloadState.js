var PreloadState = {
    preload: function(){
        this.load.image('bg', 'assets/solnedgang.jpg');
        //this.load.spritesheet('restart', 'assets/restartknapp.png', 150, 42);
    },
    create: function(){
        this.state.start('GameStart', true, false);
    }
};