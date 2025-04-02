import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts}"]},
    {languageOptions: { globals: globals.browser }},
    ...tseslint.configs.recommended,
    {
        "rules": {
            "indent": ["error", 4],
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
        }
    }
];