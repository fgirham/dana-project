<script setup>
import InputComp from '../components/InputComp.vue'
</script>

<template>
    <div class="flex-container">
        <div class="flex-item1">
            <h1 class="section-title">Contact Us</h1>
            <form>
                <InputComp label="Name" type="text" />
                <InputComp label="E-mail" type="text" />
                <InputComp :isTextArea="true" label="Message" />
            </form>
        </div>
    </div>
</template>

<style scoped lang="less">
@import '@/assets/contact.less';
</style>