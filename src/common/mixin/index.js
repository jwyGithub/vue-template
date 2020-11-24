export const validationPlugin = {
    install(Vue) {
        Vue.mixin({
            computed: {
                $validata() {
                    let valid = true;
                    const errors = [];
                    const schema = this.$options.validations;
                    if (schema) {
                        Object.keys(schema).forEach(key => {
                            const value = this[key];
                            const validateFn = schema[key].validate;
                            const result = validateFn(value);
                            if (!result) {
                                valid = false;
                                errors.push(schema[key].message(key, value));
                            }
                        });
                    }
                    return {
                        valid,
                        errors
                    };
                }
            }
        });
    }
};
