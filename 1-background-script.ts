import {
    Sprite,
    Application
} from "pixi.js";

let init = () => {
    const app: Application = new Application(512, 512);
    document.body.appendChild(app.view);

    let background: Sprite = Sprite.fromImage("./skyblue.jpg");
    app.stage.addChild(background);

    class Cloud {
        sprite: Sprite;
        direction: number = 1;
        constructor(sprite: Sprite) {
            this.sprite = sprite;
        }
    }
    
    let clouds: Cloud[] = [];
    for (let i: number = 1; i <= 5; i++) {
        let sprite: Sprite = Sprite.fromImage("./cloud3.png");                
        sprite.x = 450 / 10 * i - 20;
        sprite.y = 150;
        let cloud: Cloud = new Cloud(sprite);
        clouds[clouds.length] = cloud;
        app.stage.addChild(cloud.sprite);
    }
    
};
 
init();