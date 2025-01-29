import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: `http://localhost:${process.env.PORT || 3000}`,
        supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
        specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    },
    component: {
        indexHtmlFile: 'cypress/support/component-index.html',
        supportFile: 'cypress/support/component.{js,jsx,ts,tsx}',
        specPattern: 'cypress/component/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    }
})