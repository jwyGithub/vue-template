import Toasts from './Toast.vue';
export const Toast = {
    install: function(Vue) {
        // 创建一个Vue的“子类”组件
        const ToastConstructor = Vue.extend(Toasts);
        // 创建一个该子类的实例,并挂载到一个元素上
        const instance = new ToastConstructor();
        // 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
        instance.$mount(document.createElement('div'));
        document.body.appendChild(instance.$el);

        // 在Vue的原型链上注册方法，控制组件
        Vue.prototype.$toast = options => {
            // 如果icon状态不存在，则直接隐藏icon
            if (!options.icon) {
                instance.options.icon = false;
            }
            if (Object.prototype.toString.call(options) == '[object String]') {
                instance.options.message = options;
            } else {
                Object.keys(options).forEach(item => {
                    if (instance.options[item] !== undefined) {
                        instance.options[item] = options[item];
                    }
                });
            }
            instance.options.visible = true;
            return new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        instance.options.visible = false;
                        resolve();
                    },
                    options.duration ? options.duration : 1500
                );
            });
        };
    }
};
