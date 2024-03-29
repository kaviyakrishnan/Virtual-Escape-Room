

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
    
  }

  preload() {
    this.load.image('background', 'assets/img/tempBg.jpg')
    this.load.image('navButton', 'assets/img/navButtonCG.png')
    this.load.image('puzzOneImg', 'assets/img/labyrinth.png')
    this.load.image('Map', 'assets/img/map.png')
    this.load.image('alphaChart', 'assets/img/Alphabet.png')
    this.load.image('rocket', 'assets/img/rocket.png')
    this.load.image('volcano', 'assets/img/volcano.png')    
    this.load.image('sandDune', 'assets/img/sanddune.png')  
    this.load.image('rocks', 'assets/img/rocks.png')
    this.load.image('crater', 'assets/img/crater.png')
    this.load.image('mountains', 'assets/img/redMountains.png')  
    this.load.image('inventoryBackground', 'assets/img/mars.jpg')
    this.load.image('puzzThreeImgOne', 'assets/img/wordSearch1.png')
    this.load.image('puzzThreeImgTwo', 'assets/img/wordSearch2.png')
    this.load.image('puzzleFourRiddle', 'assets/img/figurineRiddle.png')

    this.load.image('martianOne', 'assets/img/martianOne.PNG')
    this.load.image('martianTwo', 'assets/img/martianTwo.PNG')
    this.load.image('martianThree', 'assets/img/martianThree.PNG')
    this.load.image('martianFour', 'assets/img/martianFour.PNG')


    this.load.image('messageOne', 'assets/img/messageOne.PNG')
    this.load.image('messageTwo', 'assets/img/messageTwo.PNG')
    this.load.image('messageThree', 'assets/img/messageThree.PNG')
    this.load.image('messageFour', 'assets/img/messageFour.PNG')
    this.load.image('mapLg', 'assets/img/mapLg.PNG')
    this.load.image('rocksImg', 'assets/img/rocksImg.PNG')





    this.load.image('framesImgs', 'assets/img/framesImgs.PNG')


   

  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
