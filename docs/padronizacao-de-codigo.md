
# Padronização de código

Os seguintes arquivos definem as configurações do ESLint e Prettier que estabelecem as regras de código, 
linting e padrões que devem ser seguidos em todo o projeto.

Atenção: certifique-se de que as extensões das ferramentas estejam habilitadas em seu ambiente de desenvolvimento

- .eslintrc.json (front e back separados)
- .eslintignore
- .prettierrc.json

## Instalação

É necessário instalar as dependências das duas ferramentas. Note que projetos em Next.js e em Nest.js 
já possuem todas estas dependências no package.json.

- Instalação de dependeências no **front**
```bash
npm i -D prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier prettier-plugin-tailwind-css
```

- Instalação de dependeências no **back**
```bash
npm i -D prettier eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier
```
## Configurações
- ESLint

  Define as configurações e regras do ESLint para projetos com React e TS
  * Front
  ```json
  //.eslintrc-front.json
  {
    "extends": [
      "next/core-web-vitals",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:prettier/recommended"
    ],
    "plugins": ["@typescript-eslint", "react", "react-hooks"],
    "parser": "@typescript-eslint/parser",
    "rules": {
      "@typescript-eslint/no-unused-vars": "error"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
  ```
  * Back
  ```js
  //.eslintrc-back.js
  module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-imports': 'error', 
      'prettier/prettier': 'error', 
      'no-console': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    },
  }
  ```
  **Observação:** A configuração acima inclue também as configurações por padrão de projetos nest.js

  As regras acima estabelecem que o código deve serguir as seguintes regras:
    1. Remove a obrigatoriedade de interfaces possuírem prefixo no nome, como "I"
    2. Remove a obrigatoriedade de definir explicitamento o tipo de retorno de funções
    3. Remove a obrigatoriedade de definir explicitamento o tipo de retorno de funções e variáveis exportadas
    4. Não permite o uso do tipo any, lança warning
    5. Marca como erro qualquer variável ou parâmetro declarado que não seja utilizado.
    6. Força a importação consistente de tipos
    7. Ser formatado
    8. Desabilita uso exagerado do console
    9. Desabilita o uso de debugger em ambiente de produção

  * .eslintignore **(Back e Front)**

    Define arquivos que não devem ser analisados pelo ESLint.
  ```
  /*.js
  **/*js
  node_modules
  build
  .env
  ```

- .prettierrc.json **(Back e Front)**

  Define as configurações de formatação de código do Prettier.
  ```js
  {
    "singleQuote": true,
    "trailingComma": "es5",
    "semi": true,
    "arrowParens": "avoid",
    "tabWidth": 2,
    "jsxSingleQuote": true,
    "plugins": ["prettier-plugin-tailwindcss"] // (somente front com tailwindcss)
  }
  ```
  Atenção: note que a configuração para **back** não necessita da linha:
    > "plugins": ["prettier-plugin-tailwindcss"]
    
  As regras acima estabelecem que o código deve serguir as seguintes regras de formatação:
    1. Aspas simples em strings
    2. "," ao final de objetos e arrays
    3. ";" ao final de declarações
    4. Remove parênteses nos parâmetros em arrow functions que só possui 1 parâmetro 
    5. Cada nível de identação deve usar 2 espaços
    6. Aspas simples em atributos de tags dentro de JSX