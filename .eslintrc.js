
import path from 'path'

module.exports = {
    parser:'@typescript-eslint/parser',
    extends:[
        'plugin:@typescript-eslint/recommended'
    ],
    plugins:['@typescript-eslint'],
    parserOptions:{
        project:path.resolve(__dirname,'./tsconfig.json'),
        tsconfigRootDir:__dirname,
        ecmaVersion:2019,
        sourceType:'module'
    },
    rules:{
        
    }
}