var Engine;
(function (Engine) {
    var Button = (function () {
        function Button(x, y, frameWidth, frameHeight, text) {
            this.x = x;
            this.y = y;
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            this.text = text;
        }
        Button.prototype.render = function (context, timestamp) {
            // render the sprite
            context.font = '2em Arial';
            context.fillText(this.text, this.x, this.y);
        };
        Button.prototype.checkCollision = function (x, y) {
            if (y >= this.y && y <= this.y + this.frameHeight && x >= this.x && x <= this.x + this.frameWidth)
                return true;
            return false;
        };
        Button.prototype.click = function (event) {
            console.log('Button Got Clicked');
        };
        return Button;
    }());
    Engine.Button = Button;
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLE1BQU0sQ0F3Qlo7QUF4QkQsV0FBTyxNQUFNLEVBQUMsQ0FBQztJQUNaO1FBR0ssZ0JBQW1CLENBQVMsRUFBUyxDQUFTLEVBQVMsVUFBa0IsRUFBUyxXQUFtQixFQUFTLElBQVk7WUFBdkcsTUFBQyxHQUFELENBQUMsQ0FBUTtZQUFTLE1BQUMsR0FBRCxDQUFDLENBQVE7WUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO1lBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQVE7WUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQzFILENBQUM7UUFFTSx1QkFBTSxHQUFiLFVBQWMsT0FBaUMsRUFBRSxTQUFTO1lBQ3RELG9CQUFvQjtZQUNwQixPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztZQUMzQixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsQ0FBQztRQUVNLCtCQUFjLEdBQXJCLFVBQXNCLENBQVMsRUFBRSxDQUFTO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDOUYsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFFTSxzQkFBSyxHQUFaLFVBQWEsS0FBaUI7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDTCxhQUFDO0lBQUQsQ0F0QkQsQUFzQkUsSUFBQTtJQXRCVyxhQUFNLFNBc0JqQixDQUFBO0FBQ0wsQ0FBQyxFQXhCTSxNQUFNLEtBQU4sTUFBTSxRQXdCWiIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VSb290IjoiL3RzIn0=
