<template>
    <div class="flex-container">
        <div class="flex-30">
            <h1 class="title">{{ film.title }}</h1>
            <img v-show="mobile" alt="image" :src="image">
            <p>{{ film.opening_crawl }}</p>
        </div>
        <div v-show="!mobile" class="flex-70">
            <img alt="image" :src="image">
        </div>
    </div>
    <h1 class="secondary-title"> Lorem Ipsum </h1>
    <div class="flex-container">
        <div v-for="additional in additionals" class="flex-20 additional">
            <i class="icon fa fa-location-arrow fa-3x"></i>
            <h2 class="title">{{ additional.title }}</h2>
            <p class="description">{{ additional.desc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutComponent',

    data() {
        return {
            film: {},
            image: "https://source.unsplash.com/random",
            additionals: [
                {
                    title: 'Lorem Ipsum',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius metus sit amet lacus fringilla scelerisque.',
                },
                {
                    title: 'Lorem Ipsum',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius metus sit amet lacus fringilla scelerisque.',
                },
                {
                    title: 'Lorem Ipsum',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius metus sit amet lacus fringilla scelerisque.',
                },
                {
                    title: 'Lorem Ipsum',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius metus sit amet lacus fringilla scelerisque. ',
                },
                {
                    title: 'Lorem Ipsum',
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius metus sit amet lacus fringilla scelerisque.',
                },
            ],
            mobile: false,
        }
    },


    methods: {
        fetchFilm() {
            this.axios.get("https://swapi.dev/api/films/1/")
                .then((result) => {
                    this.film = result.data
                })
        },
        checkScreen() {
            if (window.innerWidth <= 768) {
                this.mobile = true;
            }
            else {
                this.mobile = false;
            }
        }
    },

    created() {
        this.fetchFilm()
        window.addEventListener('resize', this.checkScreen)
    },
}
</script>

<style scoped lang="less">
.flex-container {
    display: flex;
    flex-direction: row;
    padding: 50px 50px;
    color: gray;
    align-items: center;

    @media(max-width: 768px) {
        flex-direction: column;
        padding: 50px 5px;
        text-align: center;
    }

    .flex-20 {
        flex: 20%;
        margin: 0 25px;
    }

    .flex-30 {
        flex: 30%;
        margin: 0 25px;
    }

    .flex-70 {
        flex: 70%;
        margin: 0 25px;
    }

    img {
        width: 100%;
        height: 500px;
        object-fit: cover;

        @media(max-width: 768px) {
            height: 200px;
            margin-bottom: 10px;
        }
    }

    .title {
        margin-bottom: 20px;
    }

    .additional {
        text-align: center;

        .icon {
            margin-bottom: 10px;
            color: #368CE4;
        }

        .title {
            font-weight: bold;
        }

        .description {
            margin-bottom: 40px;
        }
    }
}

.secondary-title {
    text-align: center;
    color: gray;
}
</style>