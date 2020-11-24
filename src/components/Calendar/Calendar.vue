<template>
    <div class="calendar">
        <ul>
            <li class="year" @scroll="yearScroll" ref="yearRef" v-show="type === 'DateTime' || type === 'Date'">
                <p v-for="(year, index) in years" :key="index">{{ year }}</p>
            </li>
            <li class="month" @scroll="monthScroll" ref="monthRef" v-show="type === 'DateTime' || type === 'Date'">
                <p v-for="(month, index) in mounths" :key="index">{{ month }}</p>
            </li>
            <li class="day" @scroll="dayScroll" ref="dayRef" v-show="type === 'DateTime' || type === 'Date'">
                <p v-for="(day, index) in days" :key="index">{{ day }}</p>
            </li>
            <li class="hour" @scroll="hourScroll" ref="hourRef" v-show="type === 'DateTime' || type === 'Time'">
                <p v-for="(hour, index) in hours" :key="index">{{ hour }}</p>
            </li>
            <li class="minute" @scroll="minuteScroll" ref="minuteRef" v-show="type === 'DateTime' || type === 'Time'">
                <p v-for="(minute, index) in minutes" :key="index">{{ minute }}</p>
            </li>
            <li class="second" @scroll="secondScroll" ref="secondRef" v-show="type === 'DateTime' || type === 'Time'">
                <p v-for="(second, index) in seconds" :key="index">{{ second }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            years: [],
            mounths: [],
            days: [],
            hours: [],
            minutes: [],
            seconds: [],
            selectYear: '',
            selectMonth: '',
            selectDay: '',
            selectHour: '',
            selectMinute: '',
            selectSecond: ''
        };
    },
    props: {
        date: {
            type: Number,
            default: ''
        },
        type: {
            type: String,
            default: 'DateTime'
        }
    },

    components: {},

    created() {
        this.getYears();
        this.getMonths();
        this.getDaysOfMonth();
        this.getTime();
    },

    mounted() {
        this.$refs.yearRef.scrollTo(0, (new Date().getFullYear() - 1970) * 30);
        this.$refs.monthRef.scrollTo(0, new Date().getMonth() * 30);
        this.$refs.dayRef.scrollTo(0, (new Date().getDate() - 1) * 30);
        this.$refs.hourRef.scrollTo(0, new Date().getHours() * 30);
        this.$refs.minuteRef.scrollTo(0, new Date().getMinutes() * 30);
        this.$refs.secondRef.scrollTo(0, new Date().getSeconds() * 30);
    },

    methods: {
        getYears() {
            for (let i = 0; i <= new Date().getFullYear() + 10 - 1970; i++) {
                this.years.push(1970 + i);
            }
            this.years = this.addEmpty(this.years);
        },
        getMonths() {
            for (let i = 1; i <= 12; i++) {
                this.mounths.push(i);
            }
            this.mounths = this.addEmpty(this.mounths);
        },
        getDaysOfMonth(year, month) {
            year = year || new Date().getFullYear();
            month = month || new Date().getMonth() + 1;
            this.days = [];
            for (var j = 1; j <= new Date(year, month, 0).getDate(); j++) {
                this.days.push(j);
            }
            this.days = this.addEmpty(this.days);
        },
        getTime(minuteStep, secondStep) {
            minuteStep = minuteStep || 1;
            secondStep = secondStep || 1;
            for (let hour = 0; hour <= 23; hour++) {
                this.hours.push(this.addZero(hour));
            }
            this.hours = this.addEmpty(this.hours);
            for (let minute = 0; minute <= 59; minute += minuteStep) {
                this.minutes.push(this.addZero(minute));
            }
            this.minutes = this.addEmpty(this.minutes);

            for (let sec = 0; sec <= 59; sec += secondStep) {
                this.seconds.push(this.addZero(sec));
            }
            this.seconds = this.addEmpty(this.seconds);
        },
        yearScroll(e) {
            let index = e.target.scrollTop / 30;
            this.selectYear = this.years[index + 3];
            this.getDaysOfMonth(this.selectYear, this.selectMonth);
            this.emitValue();
        },
        monthScroll(e) {
            let index = e.target.scrollTop / 30;
            this.selectMonth = this.mounths[index + 3];
            this.emitValue();
        },
        dayScroll(e) {
            let index = e.target.scrollTop / 30;
            this.selectDay = this.days[index + 3];
            this.emitValue();
        },
        hourScroll(e) {
            let index = e.target.scrollTop / 30;
            this.selectHour = this.hours[index + 3];
            this.emitValue();
        },
        minuteScroll(e) {
            let index = e.target.scrollTop / 30;
            this.selectMinute = this.minutes[index + 3];
            this.emitValue();
        },
        secondScroll(e) {
            let index = e.target.scrollTop / 30;
            this.selectSecond = this.seconds[index + 3];
            this.emitValue();
        },
        addZero(val) {
            return val < 10 ? '0' + val : val;
        },
        addEmpty(arr) {
            return ['', '', '', ...arr, '', '', '', ''];
        },
        emitValue() {
            this.$emit('change', this.changeValue);
        }
    },

    computed: {
        changeValue() {
            return `${this.selectYear}-${this.selectMonth}-${this.selectDay}-${this.selectHour}-${this.selectMinute}-${this.selectSecond}`;
        }
    },

    watch: {
        selectMonth(nv, ov) {
            if (nv && nv !== ov) {
                this.days = [];
                this.getDaysOfMonth(this.selectYear, nv);
            }
        }
    },

    directives: {},

    filters: {}
};
</script>

<style scoped lang="less">
div {
    height: 100%;
    background-color: gray;
}

ul {
    display: flex;
    align-items: center;
    height: 42%;
    overflow: hidden;
    position: absolute;
    width: 100%;
    bottom: 0;
    background-color: #fff;
    justify-content: space-around;
}
/* 选择框 */
ul::after {
    content: '';
    position: absolute;
    top: 90px;
    width: 100%;
    height: 30px;
    background: linear-gradient(to bottom, rgba(117, 107, 128, 0.1) 0%, rgba(117, 107, 128, 0.2) 50%, rgba(117, 107, 128, 0.25) 50%, rgba(117, 107, 128, 0.1) 100%);
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    pointer-events: none;
}
li {
    list-style: none;
    height: 100%;
    overflow: auto;

    text-align: center;
    line-height: 30px;
    position: relative;
    scroll-snap-type: y mandatory;
}

li span {
    text-align: center;
}
li p {
    text-decoration: none;
    scroll-snap-align: start;
    height: 30px;
}
::-webkit-scrollbar {
    display: none;
}
</style>
