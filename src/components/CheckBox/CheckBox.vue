<template>
    <div class="repair-parts">
        <dl>
            <dt>
                <h3>维修配件名称</h3>
                <p>
                    <input type="text" placeholder="搜索配件名称" v-model="item" @input="searchPart" />
                    <a href="javascript:;" @click="isSelect">确定</a>
                </p>
            </dt>
            <dd>
                <h3 @click="historyRecord = !historyRecord">历史记录<i :style="{ transform: historyRecord ? 'rotate(0deg)' : 'rotate(180deg)' }"></i></h3>

                <transition-group name="list" tag="div" v-show="historyRecord">
                    <p v-for="(item, index) in itemList" :key="index" v-show="item.isShow">
                        <span>{{ item.label }}</span>
                        <label>
                            <span class="is-right">
                                <input type="checkbox" v-model="currentValue" :value="item.value" />
                                <span class="core"></span>
                            </span>
                        </label>
                    </p>
                </transition-group>

                <h3 @click="allRecord = !allRecord">全部配件<i :style="{ transform: allRecord ? 'rotate(0deg)' : 'rotate(180deg)' }"></i></h3>

                <transition-group name="list" tag="div" v-show="allRecord">
                    <p v-for="(item, index) in itemList" :key="index" v-show="item.isShow">
                        <span>{{ item.label }}</span>
                        <label>
                            <span class="is-right">
                                <input type="checkbox" v-model="currentValue" :value="item.value" />
                                <span class="core"></span>
                            </span>
                        </label>
                    </p>
                </transition-group>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'RepairParts',
    data() {
        return {
            // 抽屉开关状态
            historyRecord: false,
            allRecord: true,
            item: '',
            currentValue: [],
            itemList: [
                {
                    label: '选项A',
                    value: '1',
                    isShow: true
                },
                {
                    label: '选项B',
                    value: '2',
                    isShow: true
                },
                {
                    label: '选项B',
                    value: '3',
                    isShow: true
                },
                {
                    label: '选项B',
                    value: '4',
                    isShow: true
                },
                {
                    label: '选项B',
                    value: '5',
                    isShow: true
                },
                {
                    label: '选项B',
                    value: '6',
                    isShow: true
                },
                {
                    label: '选项B',
                    value: '7',
                    isShow: true
                }
            ],
            max: 3
        };
    },

    created() {
        if (this.$route.params.repairParts) {
            const { repairParts } = this.$route.params;
            repairParts.map(item => {
                item.name && this.currentValue.push(item.name);
            });
        }
    },

    mounted() {},

    methods: {
        back() {
            this.$router.push({
                name: 'detail',
                params: {
                    fromParts: true,
                    thisOrder: this.$route.params.thisOrder,
                    itemList: this.$route.params.itemList,
                    baseItemName: this.$route.params.baseItemName,
                    orderDataHandleInfo: this.$route.params.orderDataHandleInfo,
                    useInputVal: this.$route.params.useInputVal,
                    pickDatetime: this.$route.params.pickDatetime,
                    selectParts: []
                }
            });
        },
        isSelect() {
            this.$router.push({
                name: 'detail',
                params: {
                    fromParts: true,
                    thisOrder: this.$route.params.thisOrder,
                    itemList: this.$route.params.itemList,
                    baseItemName: this.$route.params.baseItemName,
                    orderDataHandleInfo: this.$route.params.orderDataHandleInfo,
                    useInputVal: this.$route.params.useInputVal,
                    pickDatetime: this.$route.params.pickDatetime,
                    selectParts: this.currentValue
                }
            });
        },
        searchPart() {
            this.itemList.map(item => {
                if (item.label.includes(this.item)) {
                    item.isShow = true;
                } else {
                    item.isShow = false;
                }
            });
        }
    },

    computed: {
        limit() {
            return this.max < this.currentValue.length;
        }
    },

    watch: {
        value(val) {
            this.currentValue = val;
        },
        currentValue(val) {
            if (this.limit) val.pop();
        }
    },

    directives: {},

    filters: {}
};
</script>

<style scoped>
header {
    height: 2.7rem;
}
.repair-parts {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.repair-parts dl {
    overflow: hidden;
    background: #fff;
    box-sizing: border-box;
}
.repair-parts dl dt {
    padding: 0.5rem 0.8rem;
}
.repair-parts dl dt h3 {
    font-weight: 500;
    color: #333333;
    box-sizing: border-box;
    font-size: 0.875rem;
    margin-bottom: 0.7rem;
    line-height: 1.2rem;
}
.repair-parts dl dt p {
    display: flex;
    align-items: center;
}
.repair-parts dl dt p input {
    background: #f5f5f5;
    border-radius: 0.375rem;
    border: none;
    line-height: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-size: 1rem 1rem;
    background-position: 0.5rem center;
    padding-left: 2rem;
    padding-right: 1rem;
    box-sizing: border-box;
    outline: none;
    border: 0.0625rem solid transparent;
    width: 85%;
    transition: all 0.3s ease-in-out;
}
.repair-parts dl dt p > a {
    width: 15%;
    text-align: right;
    color: #1677ff;
    font-size: 0.875rem;
}

.repair-parts dl dd {
    overflow: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    line-height: 2.5rem;
    font-size: 0.75rem;
    padding: 0 0.8rem;
    height: 26.8125rem;
}
.repair-parts dl dd h3 {
    line-height: 1.875rem;
    position: relative;
}
.repair-parts dl dd h3 > i {
    position: absolute;
    width: 1.5625rem;
    height: 1.25rem;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background-size: cover;
}
.repair-parts dl dd > div > p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.1875rem;
}

.repair-parts dl dd > div > p span.is-right > span {
    display: inline-block;
    background-color: #fff;
    border: 1px solid #ccc;
    position: relative;
    width: 0.9375rem;
    height: 0.9375rem;
    vertical-align: middle;
}
.repair-parts dl dd > div > p span.is-right input {
    display: none;
}
.repair-parts dl dd > div > p span.is-right input:checked + .core {
    background-color: #26a2ff;
    border-color: #26a2ff;
}
.repair-parts dl dd > div > p span.is-right input:checked + .core::after {
    border-color: #26a2ff;
    transform: rotate(45deg) scale(1);
    background-color: #26a2ff;
    border-color: #fff;
}
.repair-parts dl dd > div > p span.is-right > span::after {
    border: 2px solid transparent;
    border-left: 0;
    border-top: 0;
    content: ' ';
    position: absolute;
    top: 0.0625rem;
    left: 0.3125rem;
    width: 0.25rem;
    height: 0.5rem;
    transform: rotate(45deg) scale(0);
    transition: transform 0.2s;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(2.5rem);
}

.additem-enter-active,
.additem-leave-active {
    transition: all 0.5s;
}
.additem-enter, .additem-leave-to
/* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(2.5rem);
}
</style>
