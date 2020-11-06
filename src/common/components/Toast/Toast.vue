<template>
    <transition name="fade">
        <div v-show="options.visible" :style="{lineHeight: options.icon ? '2.2rem' : '1.2rem'}">
            <!-- <img src="@static/images/repairReport/icon_toast_finish.png" alt="" v-show="options.icon" /> -->
            <p>{{ options.message }}</p>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            options: {
                visible: false,
                message: "",
                icon: false,
            },
        };
    },
};
</script>

<style scoped>
div {
    background-color: #3596ff;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.3125rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    -webkit-transition: opacity 0.3s linear;
    transition: opacity 0.3s linear;
    line-height: 2.2rem;
    padding: 0.5rem 0.5rem;
    font-size: 0.875rem;
}
div img {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    opacity: 0.9;
}
div p {
    padding: 0 0.5rem;
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
