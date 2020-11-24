<template>
    <div class="home">
        <Calendar :date="nowDate" @change="changeValue" />
    </div>
</template>

<script>
import md5 from 'js-md5';
import { mapActions, mapGetters } from 'vuex';
import { sendCode } from '@/apis';

import Calendar from '@components/Calendar/Calendar';
export default {
    name: 'Home',
    data() {
        return {
            nowDate: new Date().getTime()
        };
    },
    props: {},

    components: { Calendar },

    created() {},

    mounted() {
        // this.userLogin({ phone: '', md5_password: md5('') });
        // sendCode({ phone: '' });
        // this.returnUserInfo(1);
    },

    methods: {
        ...mapActions(['send', 'userLogin']),
        changeValue(val) {
            console.log(val);
        }
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
.home {
    width: 100%;
    height: 100%;
}
</style>
