import * as utils from './utils'
import * as directives from './directives'
import * as components from './components'

export default {
    install(Vue) {

        Vue.prototype.$utils = {}

        for (let item in directives) {
            Vue.directive(item, directives[item])
        }
        Object.assign(Vue.prototype.$utils, utils)
    }
}

