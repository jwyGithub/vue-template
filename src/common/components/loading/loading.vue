<template>
    <transition name="fade">
        <div class="loading" v-show="visible === 'on'">
            <img src="@assets/imgs/loading.png" alt="加载中" />
            <p>加载中...</p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Loading',
    data() {
        return {
            visible: 'off'
        };
    },
    props: {},

    components: {},

    created() {},

    mounted() {},

    methods: {},

    computed: {},

    watch: {},

    directives: {},

    filters: {}
};
</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
}
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #b5b5b5;
    border-radius: 20px;
    padding: 10px 0;
    transition: opacity 0.3s linear;
    > img {
        width: 40%;
        height: 40%;
        animation: turn 1s linear infinite;
    }
    > p {
        margin-top: 10px;
        color: #fff;
    }
}
/* vue动画过渡效果设置 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
@keyframes turn {
    0% {
        -webkit-transform: rotate(0deg);
    }
    25% {
        -webkit-transform: rotate(90deg);
    }
    50% {
        -webkit-transform: rotate(180deg);
    }
    75% {
        -webkit-transform: rotate(270deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}
</style>
