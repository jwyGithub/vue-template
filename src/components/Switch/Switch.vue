<template>
    <div class="k-switch" ref="switch">
        <label>
            <input type="checkbox" :value="value" @input="change" />
            <span :style="{ width: spanWidth, height: spanHeight }">
                <i :style="{ top: toggleOffset, transform: `translateX(${transform})`, height: diameterHeight }"></i>
            </span>
        </label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            htmlFontSize: 16,
            diameter: 24,
            diameterHeight: 24,
            spanWidth: '',
            spanHeight: ''
        };
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        width: {
            type: Number,
            default: 60
        },
        height: {
            type: Number,
            default: 30
        }
    },

    components: {},

    created() {
        this.$nextTick(() => {
            this.htmlFontSize = parseInt(document.getElementsByTagName('html')[0].style.fontSize);
        });
        this.diameter = this.height - 6;
        this.diameterHeight = (this.height - 6) / this.htmlFontSize + 'rem';
        this.spanWidth = this.width / this.htmlFontSize + 'rem';
        this.spanHeight = this.height / this.htmlFontSize + 'rem';
    },

    mounted() {},

    methods: {
        change(e) {
            this.$emit('input', e.target.checked);
        }
    },

    computed: {
        // 偏移的距离
        toggleOffset() {
            return (this.height - this.diameter) / 2 / this.htmlFontSize + 'rem';
        },
        transform() {
            return !this.value ? (this.height - this.diameter) / 2 / this.htmlFontSize + 'rem' : (this.width - this.diameter - (this.height - this.diameter) / 2) / this.htmlFontSize + 'rem';
        }
    },

    watch: {},

    directives: {},

    filters: {}
};
</script>

<style scoped lang="less">
.k-switch {
    --button-width: 60px;
    --button-height: 30px;
    --toggle-diameter: 24px;
    --button-toggle-offset: calc((var(--button-height) - var(--toggle-diameter)) / 2);
    --toggle-shadow-offset: 10px;
    --toggle-wider: 40px;
    --color-grey: #e9e9e9;
    --color-dark-grey: #39393d;
    --color-green: #30d158;
}
span {
    display: inline-block;
    width: var(--button-width);
    height: var(--button-height);
    background-color: var(--color-grey);
    border-radius: calc(var(--button-height) / 2);
    position: relative;
    transition: 0.3s all ease-in-out;
}

span > i {
    display: inline-block;
    width: var(--toggle-diameter);
    height: var(--toggle-diameter);
    background-color: #fff;
    border-radius: calc(var(--toggle-diameter) / 2);
    position: absolute;
    // top: var(--button-toggle-offset);
    // transform: translateX(var(--button-toggle-offset));
    box-shadow: var(--toggle-shadow-offset) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
    transition: 0.3s all ease-in-out;
}

input[type='checkbox']:checked + span {
    background-color: var(--color-green);
}

input[type='checkbox']:checked + span > i {
    transform: translateX(calc(60px - 24px - 3px));
    box-shadow: calc(var(--toggle-shadow-offset) * -1) 0 calc(var(--toggle-shadow-offset) * 4) rgba(0, 0, 0, 0.1);
}

input[type='checkbox'] {
    display: none;
}

input[type='checkbox']:active + span > i {
    width: var(--toggle-wider);
}

input[type='checkbox']:checked:active + span > i {
    transform: translateX(calc(var(--button-width) - var(--toggle-wider) - var(--button-toggle-offset)));
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: #1c1c1e;
    }
    span {
        background-color: var(--color-dark-grey);
    }
}
</style>
