var HighScore = {
    process: function (name, score) {
        var highScore = JSON.parse(Cache.get('HIGH_SCORE'));

        highScore.push({name: name, score: score});
        highScore.sort(function (a, b) {
            return parseInt(a.score) < parseInt(b.score);
        });

        highScore = highScore.slice(0,3);
        Cache.set('HIGH_SCORE', JSON.stringify(highScore));
        console.log(highScore);
    },

    get: function () {
        return JSON.parse(Cache.get('HIGH_SCORE'));
    }
}
