<template>
    <div class="hero-image">
        <div class="hero-text">
            <h1 class="hero-title">{{ title }}</h1>
            <p class="hero-subtitle">{{ subtitle }}</p>
            <RouterLink :to="{ name: 'about' }">
                <ButtonComp button-text="MORE INFO" color="transparent" button-border="2px solid white" width="20vmin" />
            </RouterLink>
        </div>
    </div>
</template>

<script>
import ButtonComp from "./ButtonComp.vue"
import { RouterLink } from "vue-router"
import { CHUCK_NORRIS } from "../constants/APIConfig"

export default {
    name: 'Hero',

    components: {
        ButtonComp,
        RouterLink,
    },

    data() {
        return {
            title: 'DANA Project',
            subtitle: null,
        }
    },

    methods: {
        async fetchSubtitle() {
            await CHUCK_NORRIS.get('/jokes/random')
                .then((response) => {
                    this.subtitle = response.data.value
                })
        }
    },

    created() {
        this.fetchSubtitle()
    },
}
</script>

<style scoped lang="less">
.hero-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random');
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .hero-text {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;

        .hero-title {
            font-weight: bold;
            font-size: 50px;
        }

        .hero-subtitle {
            margin-bottom: 50px;
        }
    }
}
</style>