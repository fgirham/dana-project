<template>
    <div class="photo" :style="imageStyle">
        <div class="action-btn">
            <i :class="['icon fa', liked ? 'fa-heart red' : 'fa-heart-o']" @click="handleLike"></i>
            <span>{{ likesAmount }}</span>
            <i :class="['icon fa', open ? 'fa-share-alt-square' : 'fa-share-alt']" @click="handleShare"></i>
            <transition name="social-icon">
                <div class="social-icon" v-show="open">
                    <a target="_blank" href="https://www.facebook.com/danawallet/"><i
                            class="fa fa-facebook-square"></i></a>
                    <a target="_blank" href="https://www.instagram.com/dana.id/"><i class="fa fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com/danawallet/"><i class="fa fa-twitter"></i></a>
                </div>
            </transition>
        </div>
        <div class="img-caption">
            <h4 class="title">{{ title }}</h4>
            <p class="subtitle">{{ subtitle }}</p>
        </div>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity"
import { defineProps, ref } from "vue"

const liked = ref(false)
const likesAmount = ref(Math.floor(Math.random() * 1000))
const open = ref(false)

const props = defineProps({
    photoUrl: {
        type: String,
        default: "",
    },
    w: {
        type: String,
        default: "300",
    },
    h: {
        type: String,
        default: "250",
    },
    title: {
        type: String,
        default: "Lorem Ipsum",
    },
    subtitle: {
        type: String,
        default: "dolor sit amet",
    },
})

const imageStyle = computed(() => ({
    backgroundImage: `url(${props.photoUrl})`,
    width: `${props.w}px`,
    height: `${props.h}px`,
}))

const handleLike = () => {
    if (!liked.value) { likesAmount.value++ }
    else { likesAmount.value-- }
    liked.value = !liked.value
}

const handleShare = () => {
    open.value = !open.value
}

</script>

<style scoped lang="less">
.photo {
    margin: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0px 5px 15px #bbbbbb;
    font-family: inherit;
    border-radius: 5px;

    .action-btn {
        color: white;
        padding: 10px;
        position: absolute;
        right: 0;
        top: 0;

        &>* {
            margin-left: 5px;
        }

        .icon {
            cursor: pointer;

            &.red {
                color: red;
            }
        }

        .social-icon {
            display: flex;
            flex-direction: column;
            position: absolute;
            right: 0;
            padding: 0 10px;

            a {
                color: white;
            }
        }
    }

    .img-caption {
        color: white;
        padding: 10px;
        position: absolute;
        left: 0;
        bottom: 0;

        .title {
            font-weight: bold;
            font-size: 1rem;
        }

        .subtitle {
            font-size: 0.8rem;
        }
    }
}

.social-icon-enter-active {
    transition: all 0.3s ease-out;
}

.social-icon-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.social-icon-enter-from,
.social-icon-leave-to {
    transform: translateY(-5px);
    opacity: 0;
}
</style>