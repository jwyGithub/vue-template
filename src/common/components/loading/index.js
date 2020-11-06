import Loadings from './loading.vue';
const Loading = {
    install: function(Vue) {
        // 创建一个Vue的“子类”组件
        const ToastConstructor = Vue.extend(Loadings);
        // 创建一个该子类的实例,并挂载到一个元素上
        const instance = new ToastConstructor();
        // 将这个实例挂载到动态创建的元素上,并将元素添加到全局结构中
        instance.$mount(document.createElement('div'));
        document.body.appendChild(instance.$el);
        // 在Vue的原型链上注册方法，控制组件
        Vue.prototype.$loading = status => {
            instance.visible = status || 'on';
        };
    }
};

export default Loading;
