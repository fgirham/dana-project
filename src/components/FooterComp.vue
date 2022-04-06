<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
<footer>
    <div class="flex-container">
        <div class="flex-item-left">
            <p>Follow Us:</p>
            <div class="icons">
                <a target="_blank" href="https://www.facebook.com/danawallet/"><i class="fa fa-facebook-square fa-lg"></i></a>
                <a target="_blank" href="https://www.instagram.com/dana.id/"><i class="fa fa-instagram fa-lg"></i></a>
                <a target="_blank" href="https://twitter.com/danawallet/"><i class="fa fa-twitter fa-lg"></i></a>
            </div>
        </div>
        <div class="flex-item-right">
            <div class="footer-link">
                <RouterLink to="/about">ABOUT</RouterLink>
                <RouterLink to="/contact">CONTACT US</RouterLink>
            </div>
            <p>&copy; 2017 DANA - PT Espay Debit Indonesia Koe. All Rights Reserved</p>
        </div>
    </div>
</footer>
</template>

<style scoped lang="less">
@import '@/assets/footer.less';
</style>