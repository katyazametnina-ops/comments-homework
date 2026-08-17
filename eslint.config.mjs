import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: { js, prettier: eslintPluginPrettier },
        extends: [
            'js/recommended',
            'plugin:prettier/recommended',
            eslintConfigPrettier,
        ],
        languageOptions: { globals: globals.browser },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    tabWidth: 4,
                    semi: false,
                    singleQuote: true,
                },
            ],
        },
    },
])
