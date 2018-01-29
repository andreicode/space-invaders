var Music = {
    music: undefined,
    play: function(title) {
        if(Cache.get('MUSIC') === 'ON') {
            this.music = new Audio('music/' + title);
            this.music.addEventListener('ended', this.repeat.bind(this), false);
            this.music.play();
        }
    },
    stop: function() {
        if(Cache.get('MUSIC') === 'ON') {
            this.music.removeEventListener('ended', this.repeat.bind(this), false);
            this.music.pause();
            this.music.currentTime = 0;
        }
    },
    repeat: function () {
        if(Cache.get('MUSIC') === 'ON') {
            this.music.currentTime = 0;
            this.music.play();
        }
    }
}
