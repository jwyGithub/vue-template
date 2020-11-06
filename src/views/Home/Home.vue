<template>
    <div></div>
</template>

<script>
import md5 from 'js-md5';
import { mapActions } from 'vuex';
import { sendCode } from '@/apis';

export default {
    data() {
        return {};
    },
    props: {},

    components: {},

    created() {},

    mounted() {
        this.userLogin({ phone: '', md5_password: md5('') });
        sendCode({ phone: '' }).then(res => {
            console.log(res);
        });
    },

    methods: {
        ...mapActions(['send', 'userLogin'])
    },

    computed: {},

    watch: {},

    directives: {},

    filters: {}
};
</script>

<style scoped>
* {
    margin: 0;
}
</style>
