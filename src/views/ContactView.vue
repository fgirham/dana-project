<script setup>
import InputComp from '../components/InputComp.vue'
import ButtonComp from '../components/ButtonComp.vue';
import { reactive } from 'vue';

const formValue = reactive({
    name: '',
    email: '',
    message: '',
})
</script>

<template>
    <div class="flex-container">
        <div class="flex-item1">
            <h1 class="section-title">Contact Us</h1>
            <form>
                <InputComp label="Name" type="text" v-model="formValue.name"/>
                <InputComp label="E-mail" type="text" v-model="formValue.email"/>
                <InputComp :isTextArea="true" label="Message" v-model="formValue.message"/>
                <ButtonComp button-text="Send" color="#368CE4" @on-click="sendMessage"/>
            </form>
        </div>
        <div class="flex-item2">
            <h1 class="section-title">Customer Support</h1>
            <div class="phone-number">
                <i class="fa fa-comments-o fa-3x"></i>
                <h1>1-500-455</h1>
            </div>
            <p>
                Contact our customer support or email us at 
                <a
                    href="mailto:help@dana.id"
                >help@dana.id</a>
                if you need help
            </p>
            <h1 class="section-title">Social Media</h1>
            <p>Feel free to contact us at on of our social media outlets below</p>
            <div class="icons">
                <a target="_blank" href="https://www.facebook.com/danawallet/"><i class="fa fa-facebook-square fa-3x"></i></a>
                <a target="_blank" href="https://www.instagram.com/dana.id/"><i class="fa fa-instagram fa-3x"></i></a>
                <a target="_blank" href="https://twitter.com/danawallet/"><i class="fa fa-twitter fa-3x"></i></a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "@/assets/contact.less";
</style>