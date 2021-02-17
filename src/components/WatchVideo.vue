<template>
    <div class="uk-container uk-container-xlarge">
        <video controls ref="player"></video>
    </div>
</template>

<script>
const shaka = import("shaka-player/dist/shaka-player.compiled.debug.js");

export default {
    name: "App",
    data() {
        return {
            player: null
        };
    },
    mounted() {
        shaka
            .then(shaka => shaka.default)
            .then(shaka => {
                console.log(shaka);

                shaka.polyfill.installAll();

                this.player = new shaka.Player(this.$refs.player);

                console.log(this.$refs.player);

                this.player.load(
                    "http://livesim.dashif.org/livesim/segtimeline_1/testpic_2s/Manifest.mpd"
                );
            });
    },
    beforeUnmount() {},
    watch: {
        "$route.query.v": function() {}
    },
    methods: {
        onChange() {
            if (localStorage)
                localStorage.setItem("autoplay", this.selectedAutoPlay);
        }
    }
};
</script>

<style>
.vjs-current-time {
    display: block;
}
</style>
