var Music = {
    music: undefined,
    play: function(title) {
        this.music = new Audio('music/' + title);
        this.music.addEventListener('ended', this.repeat.bind(this), false);
        this.music.play();
    },
    stop: function() {
        this.music.removeEventListener('ended', this.repeat.bind(this), false);
        this.music.pause();
        this.music.currentTime = 0;
        
    },
    repeat: function () {
        this.music.currentTime = 0;
        this.music.play();
    }
}
