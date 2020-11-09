<template>
    <div>1221</div>
</template>

<script>
import md5 from 'js-md5';
import { mapActions, mapGetters } from 'vuex';
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
        // sendCode({ phone: '' });
        // this.returnUserInfo(1);
    },

    methods: {
        ...mapActions(['send', 'userLogin'])
    },

    computed: {
        ...mapGetters(['returnUserInfo'])
    },

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
