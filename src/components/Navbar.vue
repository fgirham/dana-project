<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const danaLogo = ref("https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg");

</script>

<template>
<div class="navbar" fixed>
<RouterLink to="/"><img alt="DANA logo" class="logo" :src="danaLogo" width="150"/></RouterLink>
<ul>
    <li><RouterLink to="">Contact us</RouterLink></li>
    <li><RouterLink to="/about">About</RouterLink></li>
</ul>
</div>
</template>

<style scoped lang="less">
.navbar {
    box-shadow: 0px 5px 5px #BBBBBB;
    padding: 5px 15px;
}
.logo {
    padding: 10px 15px;
}

ul {
    list-style-type: none;
    padding: 0;
    overflow: hidden;
    display: inline;
    background-color: white;
}

li {
    float: right;
    a {
        display: block;
        color: grey;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    a:hover {
        color: black;
    }
}
</style>