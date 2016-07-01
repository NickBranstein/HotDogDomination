module Engine {
   export class Button implements IRender, IGetClicked {
       lastTimestamp;
       
        constructor(public x: number, public y: number, public frameWidth: number, public frameHeight: number, public text: string) {
        }
        
        public render(context: CanvasRenderingContext2D, timestamp): void {    
            // render the sprite
            context.font = '2em Arial';            
            context.fillText(this.text, this.x, this.y);

        }

        public checkCollision(x: number, y: number) : boolean {
            if (y >= this.y && y <= this.y + this.frameHeight && x >= this.x && x <= this.x + this.frameWidth)
                return true;
            return false;
        }

        public click(event: MouseEvent) : void {
            console.log('Button Got Clicked');
        }
    }   
}