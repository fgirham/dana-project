<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const danaLogo = ref("https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg");
const mobile = ref(false);
const mobileNav = ref(false);

function toggleNav() {
    mobileNav.value = !mobileNav.value
}
function checkScreen() {
    if (window.innerWidth <= 768) {
        mobile.value = true;
    }
    else {
        mobile.value = false;
        mobileNav.value = false;
    }
}

checkScreen()
window.addEventListener('resize', checkScreen)

</script>

<template>
        <nav>
            <RouterLink :to="{ name: 'home' }" @[mobileNav&&`click`]="toggleNav">
                <img alt="DANA logo" class="logo" :src="danaLogo" />
            </RouterLink>
            <div v-show="!mobile" class="nav-link">
                <RouterLink :to="{ name: 'about' }">About</RouterLink>
                <RouterLink :to="{ name: 'contact' }">Contact us</RouterLink>
            </div>
            <div class="icon" v-show="mobile">
                <i @click="toggleNav" class="fa fa-bars" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <div v-show="mobileNav" class="dropdown-nav-link">
                    <RouterLink :to="{ name: 'about' }" @click="toggleNav">About</RouterLink>
                    <RouterLink :to="{ name: 'contact' }" @click="toggleNav">Contact us</RouterLink>
                </div>
            </transition>
        </nav>
</template>

<style scoped lang="less">
@import "@/assets/navbar.less";
</style>