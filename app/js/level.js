var Engine;
(function (Engine) {
    var StartLevel = (function () {
        function StartLevel(game) {
            this.sprites = [];
            this.sprites.push(new Engine.Button(50, 900, 'New Game'));
            this.sprites.push(new Engine.Button(350, 900, 'Continue Game'));
            game.sprites = this.sprites;
        }
        StartLevel.prototype.render = function (context, timestamp) {
            var background = new Image();
            background.src = 'images/splash.png';
            context.drawImage(background, 0, 0);
            this.sprites.forEach(function (sprite) {
                sprite.render(context, timestamp);
            });
        };
        return StartLevel;
    }());
    Engine.StartLevel = StartLevel;
})(Engine || (Engine = {}));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sTUFBTSxDQTJCWjtBQTNCRCxXQUFPLE1BQU0sRUFBQyxDQUFDO0lBS1g7UUFHUSxvQkFBWSxJQUFVO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksYUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLGFBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFFekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2hDLENBQUM7UUFFTSwyQkFBTSxHQUFiLFVBQWMsT0FBaUMsRUFBRSxTQUFTO1lBQ3RELElBQUksVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFFN0IsVUFBVSxDQUFDLEdBQUcsR0FBRyxtQkFBbUIsQ0FBQztZQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNO2dCQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTCxpQkFBQztJQUFELENBckJKLEFBcUJLLElBQUE7SUFyQlEsaUJBQVUsYUFxQmxCLENBQUE7QUFDVCxDQUFDLEVBM0JNLE1BQU0sS0FBTixNQUFNLFFBMkJaIiwiZmlsZSI6ImxldmVsLmpzIiwic291cmNlUm9vdCI6Ii90cyJ9
