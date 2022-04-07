<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: String,
    buttonText: String,
})

const buttonColor = computed(() => {
    return {
        '--bg-color': props.color,
    }
})
</script>

<template>
    <button :style="buttonColor">{{ buttonText }}</button>
</template>

<style scoped lang="less">
button {
    background-color: var(--bg-color);
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    font-family: inherit;
}
</style>