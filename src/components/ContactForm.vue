<template>
<form>
    <InputComp label="Name" type="text" v-model="formValue.name" />
    <InputComp label="E-mail" type="text" v-model="formValue.email" />
    <InputComp :isTextArea="true" label="Message" v-model="formValue.message" />
    <ButtonComp button-text="Send" color="#368CE4" @on-click="sendMessage" />
</form>
</template>

<script setup>
import InputComp from "./InputComp.vue";
import ButtonComp from "./ButtonComp.vue";
import { reactive } from "vue";

const formValue = reactive({
    name: '',
    email: '',
    message: '',
})

</script>

<style>
</style>