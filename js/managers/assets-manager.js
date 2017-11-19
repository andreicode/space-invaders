var Assets = {
    store: [],
    create: function (name, options) {
        for (var i = 0; i < this.store.length; i++) {
            if (name === this.store[i].name) {
                var asset = CreateAsset(this.store[i]);
                asset._init(options);
                return asset.object;
            }
        }
    },
    register: function (asset) {
        this.store.push(asset);
    }
}
