<template>
    <div class="photo-container">
        <Photo v-for="photo in photos" :key="photo.id" :photoUrl="photo.url" :subtitle="photo.title" />
    </div>
    <Pagination :page-numbers="pageNumbers" :current-page="currentPage" @update-page="updatePage" />
</template>

<script>
import Pagination from "./Pagination.vue"
import Photo from "./Photo.vue"

export default {
    name: 'PhotoGrid',

    components: {
        Pagination,
        Photo,
    },

    data() {
        return {
            totalPhotos: Number,
            allPhotos: [],
            photos: [],
            currentPage: 1,
            pageNumbers: [],
            photosPerPage: 16,
        }
    },

    methods: {
        async fetchPhotos() {
            try {
                const response = await this.axios.get('https://jsonplaceholder.typicode.com/photos')
                this.allPhotos = response.data
                console.log(this.allPhotos)
                this.totalPhotos = this.allPhotos.length
                for (let i = 1; i <= Math.ceil(this.totalPhotos / this.photosPerPage); i++) {
                    this.pageNumbers.push(i)
                }
                console.log(this.pageNumber)
                const indexLastPhoto = this.currentPage * this.photosPerPage
                const indexFirstPhoto = indexLastPhoto - this.photosPerPage
                this.photos = this.allPhotos.slice(indexFirstPhoto, indexLastPhoto)
            }
            catch {
                // alert("Failed to Load")
                console.log("error")
            }
        },

        updatePage(pageNumber) {
            this.currentPage = pageNumber
            console.log(this.currentPage)
        },

    },

    watch: {
        currentPage: {
            handler(newPage) {
                const indexLastPhoto = newPage * this.photosPerPage
                const indexFirstPhoto = indexLastPhoto - this.photosPerPage
                this.photos = this.allPhotos.slice(indexFirstPhoto, indexLastPhoto)
                console.log("handler")
            },
            immediate: true
        }
    },

    mounted() {
        this.fetchPhotos()
    },
}
</script>

<style scoped lang="less">
.photo-container {
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    justify-content: center;

    .item {
        margin: 20px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        box-shadow: 0px 5px 15px #bbbbbb;
        font-family: inherit;
        width: 300px;
        height: 250px;

        .action-btn {
            color: white;
            padding: 10px;
            position: absolute;
            right: 0;
            top: 0;

            .icon {
                margin: 5px;
            }
        }

        .img-caption {
            color: white;
            padding: 10px;
            position: absolute;
            left: 0;
            bottom: 0;

            .title {
                font-weight: bold;
                font-size: 1rem;
            }

            .subtitle {
                font-size: 0.8rem;
            }
        }
    }
}
</style>