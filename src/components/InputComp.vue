<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    isTextArea: Boolean,
    label: String    
})
</script>

<template>
<label>{{ label }}</label>
<input v-if="!isTextArea" v-bind="$attrs"/>
<textarea v-if="isTextArea" v-bind="$attrs"></textarea>
</template>

<style scoped lang="less">
    label {
        display: block;
        margin-bottom: 5px;
    }
    input {
        width: 100%;
        padding: 10px 10px;
        margin-bottom: 20px;
    }
    textarea {
        width: 100%;
        font-family: inherit;
        min-height: 200px;
        padding: 10px 10px;
        margin-bottom: 20px;
    }
</style>