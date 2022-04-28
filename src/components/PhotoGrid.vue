<template>
    <div class="photo-container">
        <Photo 
            v-for="photo in photos" 
            :key="photo.id" 
            :photoUrl="photo.url" 
            :subtitle="photo.title" 
        />
    </div>
    <Pagination 
        :page-numbers="pageNumbers" 
        :current-page="currentPage" 
        :max-visible-page="maxVisiblePage"
        :first-pages-visible = "firstPagesVisible"
        :next-button = "mobile? '' : 'Next'"
        :prev-button = "mobile? '' : 'Back'"
        @update-page="updatePage" 
    />
</template>

<script>
import Pagination from "./Pagination.vue"
import Photo from "./Photo.vue"
import { PHOTO_ALBUM } from "../constants/APIConfig"

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
            pageNumbers: Number,
            mobile: false,
            photosPerPage: 16,
        }
    },

    computed: {
        maxVisiblePage(){
            if(this.mobile){
                return 2
            }
            else {
                return 7
            }
        },
        firstPagesVisible(){
            if(this.mobile){
                return 1
            }
            else {
                return 2
            }
        }
    },

    methods: {
        async fetchPhotos() {
            await PHOTO_ALBUM.get("/photos")
                .then(response => {
                    this.allPhotos = response.data
                })
            this.totalPhotos = this.allPhotos.length
            this.pageNumbers = Math.ceil(this.totalPhotos / this.photosPerPage)
            const indexLastPhoto = this.currentPage * this.photosPerPage
            const indexFirstPhoto = indexLastPhoto - this.photosPerPage
            this.photos = this.allPhotos.slice(indexFirstPhoto, indexLastPhoto)
        },

        updatePage(pageNumber) {
            this.currentPage = pageNumber
        },

        checkScreenSize() {
            if (window.innerWidth <= 768) {
                this.mobile = true;
            }
            else {
                this.mobile = false;
            }
        }

    },

    watch: {
        currentPage: {
            handler(newPage) {
                const indexLastPhoto = newPage * this.photosPerPage
                const indexFirstPhoto = indexLastPhoto - this.photosPerPage
                this.photos = this.allPhotos.slice(indexFirstPhoto, indexLastPhoto)
            },
            immediate: true
        }
    },

    mounted() {
        this.checkScreenSize()
        this.fetchPhotos()
        window.addEventListener('resize', this.checkScreenSize)
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