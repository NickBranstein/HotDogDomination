module Engine {
    export interface IGetClicked {
        click(event: MouseEvent): void;
        checkCollision(x: number, y: number) : boolean 
    }
}