
module.exports = {
    parser:'@typescript-eslint/parser',
    extends:[
        'plugin:@typescript-eslint/recommended'
    ],
    plugins:['@typescript-eslint'],
    parserOptions:{
        ecmaVersion: 2020
    },
    root: true,
    env: {
        node: true
    },
}