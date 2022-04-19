<template>
<div class="photo-container">
    <img class="item" v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl">
</div>
</template>

<script>
export default {
    name: 'PhotoGrid',

    data() {
        return {
            photos: [],
        }
    },

    methods: {
        fetchPhotos() {
            this.axios.get('https://jsonplaceholder.typicode.com/photos')
                .then((response) => { this.photos = response.data })
                .then(console.log(this.photos))
        }
    },

    created() {
        this.fetchPhotos()
    }
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
  }
}

</style>