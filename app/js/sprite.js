var Engine;
(function (Engine) {
    var Sprite = (function () {
        function Sprite(x, y, frameWidth, frameHeight, source, frames, fps) {
            this.x = x;
            this.y = y;
            this.frameWidth = frameWidth;
            this.frameHeight = frameHeight;
            this.image = new Image();
            this.image.src = source;
            this.currentFrame = 0;
            this.frames = frames;
            this.fps = fps;
            this.lastTimestamp = 0;
        }
        Sprite.prototype.render = function (context, timestamp) {
            if (this.lastTimestamp == null || this.lastTimestamp == undefined) {
                this.lastTimestamp = timestamp;
            }
            var elapsedTime = timestamp - this.lastTimestamp;
            if (this.frames != null && elapsedTime > (1000 / this.fps)) {
                this.animate(context);
                this.lastTimestamp = timestamp;
            }
            // render the sprite
            context.drawImage(this.image, this.currentFrame * this.frameWidth, 0, this.frameWidth, this.image.height, this.x, this.y, this.frameWidth, this.image.height);
        };
        Sprite.prototype.animate = function (context) {
            // advance the sprite animation
            this.currentFrame++;
            if (this.currentFrame >= this.frames) {
                this.currentFrame = 0;
            }
        };
        Sprite.prototype.checkCollision = function (x, y) {
            if (y >= this.y && y <= this.y + this.frameHeight && x >= this.x && x <= this.x + this.frameWidth)
                return true;
            return false;
        };
        Sprite.prototype.click = function (event) {
            console.log('Sprite Got Clicked');
        };
        return Sprite;
    }());
    Engine.Sprite = Sprite;
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,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
