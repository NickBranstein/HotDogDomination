var Engine;
(function (Engine) {
    var StartLevel = (function () {
        function StartLevel(game) {
            this.sprites = [];
            this.sprites.push(new Engine.Button(50, 900, 'New Game', function () {
                console.log('new game callback');
            }));
            this.sprites.push(new Engine.Button(350, 900, 'Continue Game', function () {
                console.log('continue game callback');
            }));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxldmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQU8sTUFBTSxDQStCWjtBQS9CRCxXQUFPLE1BQU0sRUFBQyxDQUFDO0lBS1g7UUFHUSxvQkFBWSxJQUFVO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksYUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFO2dCQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksYUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFO2dCQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNoQyxDQUFDO1FBRU0sMkJBQU0sR0FBYixVQUFjLE9BQWlDLEVBQUUsU0FBUztZQUN0RCxJQUFJLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBRTdCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsbUJBQW1CLENBQUM7WUFDckMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXBDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtnQkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQXpCSixBQXlCSyxJQUFBO0lBekJRLGlCQUFVLGFBeUJsQixDQUFBO0FBQ1QsQ0FBQyxFQS9CTSxNQUFNLEtBQU4sTUFBTSxRQStCWiIsImZpbGUiOiJsZXZlbC5qcyIsInNvdXJjZVJvb3QiOiIvdHMifQ==
