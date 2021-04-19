// https://zhuanlan.zhihu.com/p/62401626
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'react-app'
  ],
  plugins: ['@typescript-eslint', 'react'],
  globals: {
    chrome: true
  },
  rules: {
    // 关闭模块引入校验
    '@typescript-eslint/no-var-requires': 'off',
    // 关闭ts方法指定无返回值校验
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 关闭any校验
    '@typescript-eslint/no-explicit-any': 'off',
    // 暂时关闭;
    '@typescript-eslint/member-delimiter-style': 'off',
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'error',
    // 要求箭头函数的箭头之前或之后有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': ['error', 'always'],
    // 大括号风格要求，例: if else 1tbs不换行，stroustrup换行
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    // 不要求使用骆驼拼写法
    camelcase: [
      'off',
      {
        properties: 'always'
      }
    ],
    // 要求或禁止使用拖尾逗号，配置为不使用
    'comma-dangle': ['error', 'never'],
    // 强制在逗号周围使用空格
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 逗号风格，配置为换行逗号在后
    'comma-style': ['error', 'last'],
    // 验证构造函数中 super() 的调用
    'constructor-super': 'error',
    // 要求遵循大括号约定，配置为单表达式模块仍然需要{}包裹
    curly: 'error',
    // 强制在点号之前或之后换行，配置为点操作符和属性放在同一行
    'dot-location': ['error', 'property'],
    // 要求或禁止文件末尾保留一行空行，默认要求
    'eol-last': 'error',
    // 要求使用 === 和 !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 强制 generator 函数中 * 号周围有空格
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // 强制回调错误处理
    'handle-callback-err': ['error', '^(err|error)$'],
    // 强制换行双空格，默认是4
    // webstrom在Editor->Code Style->html的Do not indent children of里添加script
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 1,
        FunctionDeclaration: { body: 1, parameters: 2 }
      }
    ],
    // 强制在 JSX 属性中使用一致的单引号或双引号
    // 'jsx-quotes': ['error', 'prefer-single'],
    // 强制在对象字面量的键和值之间使用一致的空格
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    // 强制关键字周围空格的一致性
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // 要求构造函数首字母大写
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    // 要求调用无参构造函数时带括号
    'new-parens': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
    // 禁用 caller 或 callee
    'no-caller': 'error',
    // 禁止使用console，配置为可使用
    'no-console': 'off',
    // 不允许修改类声明的变量
    'no-class-assign': 'error',
    // 禁止在条件语句中出现赋值操作符
    'no-cond-assign': 'error',
    // 不允许改变用const声明的变量
    'no-const-assign': 'error',
    // 禁止在正则表达式中使用控制字符
    'no-control-regex': 'off',
    // 禁止删除变量
    'no-delete-var': 'error',
    // 禁止在 function 定义中出现重复的参数
    'no-dupe-args': 'error',
    // 不允许类成员中有重复的名称
    'no-dupe-class-members': 'error',
    // 禁止在对象字面量中出现重复的键
    'no-dupe-keys': 'error',
    // 禁止重复 case 标签
    'no-duplicate-case': 'error',
    // 禁止使用alert
    'no-alert': 'warn',
    // 禁止var
    'no-var': 'error',
    // 禁止空模块
    'no-empty': 'error',
    // 禁止在正则表达式中出现空字符集
    'no-empty-character-class': 'error',
    // 禁止使用空解构模式
    'no-empty-pattern': 'error',
    // 不允许使用eval
    'no-eval': 'error',
    // 禁止不必要的函数绑定
    'no-extra-bind': 'error',
    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'error',
    // 禁止 case 语句落空
    'no-fallthrough': 'error',
    // 禁止浮点小数
    'no-floating-decimal': 'error',
    // 禁止对 function 声明重新赋值
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    // 需要多个空格
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-native-reassign': 'error',
    'no-negated-in-lhs': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'off',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'one-var': [
      'error',
      {
        initialized: 'never'
      }
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'padded-blocks': ['error', 'never'],
    // 强制定义字符串使用单引号
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: ['error', 'never'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],
    // 注释添加空格
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
      }
    ],
    'template-curly-spacing': ['error', 'never'],
    'use-isnan': 'error',
    'valid-typeof': 'error',
    'wrap-iife': ['error', 'any'],
    'yield-star-spacing': ['error', 'both'],
    yoda: ['error', 'never'],
    // 变量使用const
    'prefer-const': 'error',
    'no-debugger': 'error',
    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false
      }
    ],
    'array-bracket-spacing': ['error', 'never']
  }
}
