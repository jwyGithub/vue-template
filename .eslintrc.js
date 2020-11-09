module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    extends: ['eslint:recommended', 'plugin:vue/essential'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        //  "off" or 0 - 关闭规则
        //  "warn" or 1 - 将规则视为一个警告（不会影响退出码）
        //  "error" or 2 - 将规则视为一个错误 (退出码为1)
        // 除了与 null 字面量进行比较时, 强制使用 === 和 !==
        eqeqeq: [2, 'always', { null: 'ignore' }],
        // 强制驼峰命名法
        camelcase: ['error', { allow: ['md5_password', 'drop_console', 'drop_debugger', 'pure_funcs'] }],
        // 强制4个空格缩进
        indent: [2, 4, { SwitchCase: 1 }, { VariableDeclarator: { var: 2, let: 2, const: 3 } }],
        // 禁用console.log
        'no-console': 2,
        // 禁止不必要的转义字符
        'no-useless-escape': 2,
        // 不要求对象属性按序排列
        'sort-keys': 0,
        // 强制注释行方式
        'line-comment-position': 1,
        // 禁止在代码后面使用注释
        'no-inline-comments': 0,
        // 强制最大连续空行数
        'no-multiple-empty-lines': [1, { max: 1 }],
        // 禁用tab
        'no-tabs': 2,
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': [1, 'always', { objectsInObjects: true }],
        // 不强制最大行数
        'max-lines': 0,
        'max-len': 0,
        // 禁止末尾逗号
        'comma-dangle': 1,
        // 禁用行尾空格
        'no-trailing-spaces': 1,
        // 禁止空格和 tab 的混合缩进
        'no-mixed-spaces-and-tabs': 0,
        // 禁止函数圆括号之前有一个空格
        'space-before-function-paren': ['error', 'never'],
        // 禁止扩展原生类型
        'no-extend-native': 2,
        'for-direction': 'error',
        // 强制getter出现return
        'getter-return': 'error',
        // 禁止使用异步函数作为 Promise executor
        'no-async-promise-executor': 2,
        // 禁止在循环中出现 await
        'no-await-in-loop': 2,
        // 禁止与 -0 进行比较
        'no-compare-neg-zero': 2,
        // 禁止条件表达式中出现赋值操作符
        'no-cond-assign': 2,
        // 禁止在条件中使用常量表达式
        'no-constant-condition': 2,
        // 是否禁用 debugger
        'no-debugger': 2,
        // 禁止 function 定义中出现重名参数
        'no-dupe-args': 2,
        // 禁止对象字面量中出现重复的 key
        'no-dupe-keys': 2,
        // 禁止出现重复的 case 标签
        'no-duplicate-case': 2,
        // 禁止出现空语句块
        'no-empty': 2,
        // 禁止在正则表达式中使用空字符集
        'no-empty-character-class': 2,
        // 禁止对 catch 子句的参数重新赋值
        'no-ex-assign': 2,
        // 禁止不必要的布尔转换
        'no-extra-boolean-cast': 2,
        // 禁止不必要的分号
        'no-extra-semi': 2,
        // 禁止对 function 声明重新赋值
        'no-func-assign': 2,
        // 禁止在嵌套的块中出现变量声明或 function 声明
        'no-inner-declarations': 'error',
        // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
        'no-invalid-regexp': 2,
        // 禁止不规则的空白
        'no-irregular-whitespace': 2,
        // 不允许在字符类语法中出现由多个代码点组成的字符
        'no-misleading-character-class': 2,
        // 禁止把全局对象作为函数调用
        'no-obj-calls': 2,
        // 禁止直接调用 Object.prototypes 的内置属性
        'no-prototype-builtins': 2,
        // 禁止正则表达式字面量中出现多个空格
        'no-regex-spaces': 2,
        // 禁用稀疏数组
        'no-sparse-arrays': 2,
        // 禁止在常规字符串中出现模板字面量占位符语法
        'no-template-curly-in-string': 2,
        // 禁止出现令人困惑的多行表达式
        'no-unexpected-multiline': 2,
        // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
        'no-unreachable': 2,
        // 禁止在 finally 语句块中出现控制流语句
        'no-unsafe-finally': 2,
        // 禁止对关系运算符的左操作数使用否定操作符
        'no-unsafe-negation': 2,
        // 禁止由于 await 或 yield的使用而可能导致出现竞态条件的赋值
        'require-atomic-updates': 2,
        // 要求使用 isNaN() 检查 NaN
        'use-isnan': 2,
        // 强制 typeof 表达式与有效的字符串进行比较
        'valid-typeof': 2,

        // 最佳实践
        // 强制 getter 和 setter 在对象中成对出现
        'accessor-pairs': 2,
        // 强制数组方法的回调函数中有 return 语句
        'array-callback-return': 2,
        // 强制把变量的使用限制在其定义的作用域范围内
        'block-scoped-var': 2,
        // 强制类方法使用 this
        'class-methods-use-this': 2,
        // 指定程序中允许的最大环路复杂度
        complexity: 2,
        // 要求 return 语句要么总是指定返回的值，要么不指定
        'consistent-return': 2,
        curly: 2, // 强制所有控制语句使用一致的括号风格
        // 要求 switch 语句中有 default 分支
        'default-case': 2,
        // 强制在点号之前和之后一致的换行
        'dot-location': 2,
        // 强制尽可能地使用点号
        'dot-notation': 2,
        // 要求 for-in 循环中有一个 if 语句
        'guard-for-in': 2,
        // 强制每个文件中包含的的类的最大数量
        'max-classes-per-file': 2,
        // 禁用 alert、confirm 和 prompt
        'no-alert': 2,
        // 禁用 arguments.caller 或 arguments.callee
        'no-caller': 2,
        // 不允许在 case 子句中使用词法声明
        'no-case-declarations': 2,
        // 禁止除法操作符显式的出现在正则表达式开始的位置
        'no-div-regex': 2,
        // 禁止 if 语句中 return 语句之后有 else 块
        'no-else-return': 2,
        // 禁止出现空函数
        'no-empty-function': 2,
        // 禁止使用空解构模式
        'no-empty-pattern': 2,
        // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eq-null': 2,
        // 禁用 eval()
        'no-eval': 2,
        // 禁止扩展原生类型
        'no-extend-native': 2,
        // 禁止不必要的 .bind() 调用
        'no-extra-bind': 2,
        // 禁用不必要的标签
        'no-extra-label': 2,
        // 禁止 case 语句落空
        'no-fallthrough': 2,
        // 禁止数字字面量中使用前导和末尾小数点
        'no-floating-decimal': 2,
        // 禁止对原生对象或只读的全局对象进行赋值
        'no-global-assign': 2,
        // 禁止使用短符号进行类型转换
        'no-implicit-coercion': 2,
        // 禁止在全局范围内使用变量声明和 function 声明
        'no-implicit-globals': 2,
        // 禁止使用类似 eval() 的方法
        'no-implied-eval': 2,
        // 禁止 this 关键字出现在类和类对象之外
        'no-invalid-this': 2,
        // 禁用 __iterator__ 属性
        'no-iterator': 2,
        // 禁用标签语句
        'no-labels': 2,
        // 禁用不必要的嵌套块
        'no-lone-blocks': 2,
        // 禁止在循环语句中出现包含不安全引用的函数声明
        'no-loop-func': 2,
        // 禁用魔术数字
        'no-magic-numbers': 2,
        // 禁止使用多个空格
        'no-multi-spaces': 2,
        // 禁止使用多行字符串
        'no-multi-str': 2,
        // 不要求使用 new 以避免产生副作用
        'no-new': 0,
        //不要求对 Function 对象使用 new 操作符
        'no-new-func': 0,
        // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new-wrappers': 2,
        // 禁止对 function 的参数进行重新赋值
        'no-param-reassign': 2,
        // 禁用 __proto__ 属性
        'no-proto': 2,
        // 禁止多次声明同一变量
        'no-redeclare': 2,
        // 禁止使用对象的某些属性
        'no-restricted-properties': 2,
        // 禁止在 return 语句中使用赋值语句
        'no-return-assign': 2,
        // 禁用不必要的 return await
        'no-return-await': 2,
        // 禁止自我赋值
        'no-self-assign': 2,
        // 禁止自身比较
        'no-self-compare': 2,
        // 禁用逗号操作符
        'no-sequences': 2,
        // 禁止抛出异常字面量
        'no-throw-literal': 2,
        // 禁用一成不变的循环条件
        'no-unmodified-loop-condition': 2,
        // 禁止出现未使用过的表达式
        'no-unused-expressions': 2,
        // 禁用出现未使用过的标
        'no-unused-labels': 2,
        // 禁止不必要的 .call() 和 .apply()
        'no-useless-call': 2,
        // 禁止不必要的 catch 子句
        'no-useless-catch': 2,
        // 禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-concat': 2,
        // 禁止多余的 return 语句
        'no-useless-return': 2,
        // 禁止在注释中使用特定的警告术语
        'no-warning-comments': 2,
        // 禁用 with 语句
        'no-with': 2,
        // 建议在正则表达式中使用命名捕获组
        'prefer-named-capture-group': 2,
        // 要求使用 Error 对象作为 Promise 拒绝的原因
        'prefer-promise-reject-errors': 2,
        // 强制在 parseInt() 使用基数参数
        radix: 2,
        // 禁止使用不带 await 表达式的 async 函数
        'require-await': 2,
        // 强制在 RegExp 上使用 u 标志
        'require-unicode-regexp': 2,
        // 要求所有的 var 声明出现在它们所在的作用域顶部
        'vars-on-top': 2,
        // 要求 IIFE 使用括号括起来
        'wrap-iife': 2,
        // 要求或禁止 “Yoda” // 条件
        yoda: 2
    }
};
