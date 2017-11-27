var Music = {
    play: function(title) {
        var music = new Audio('music/' + title);
        music.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        music.play();
    }
}
