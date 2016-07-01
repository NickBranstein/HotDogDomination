module Engine {
    export interface ILevel extends IRender {
        sprites: Array<Engine.IGetClicked>;
    }

    export class StartLevel implements ILevel {
            public sprites: Array<Engine.IGetClicked>;       
            
            constructor(game: Game) {
                this.sprites = [];
                this.sprites.push(new Button(50, 900, 'New Game'));
                this.sprites.push(new Button(350, 900, 'Continue Game'));
                
                game.sprites = this.sprites;
            }
            
            public render(context: CanvasRenderingContext2D, timestamp): void {    
                var background = new Image();
                
                background.src = 'images/splash.png';
                context.drawImage(background, 0, 0);

                this.sprites.forEach((sprite) => {
                    sprite.render(context, timestamp);
                });
            }
        }   
}