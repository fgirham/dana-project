<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    color: {
        default: 'green',
        type: String,
    },
    buttonText: {
        default: 'Submit',
        type: String,
    },
    textColor: {
        default: 'white',
        type: String,
    },
    width: {
        default: '100%',
        type: String,
    },
    buttonBorder: {
        default: 'none',
        type: String,
    }
})

const buttonStyle = computed(() => {
    return {
        '--bg-color': props.color,
        '--txt-color': props.textColor,
        '--btn-width': props.width,
        '--btn-border': props.buttonBorder,
    }
})
</script>

<template>
    <button :style="buttonStyle" @click="$emit('onClick')">{{ buttonText }}</button>
</template>

<style scoped lang="less">
button {
    background-color: var(--bg-color);
    border: var(--btn-border);
    color: var(--txt-color);
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    width: var(--btn-width);
    font-family: inherit;

    &:hover {
        cursor: pointer;
    }
}
</style>