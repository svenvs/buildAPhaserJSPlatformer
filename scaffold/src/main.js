import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics:{
    default: 'arcade',
    arcade: {
      
      debug: true
    }
  },
  scene: []
};

const game = new Phaser.Game(config);