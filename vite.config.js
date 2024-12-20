import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 3000
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components')
		}
	},
	test: {
		silent: true,
		browser: {
			enabled: true,
			headless: true,
			screenshotFailures: false,
			name: 'chromium',
			provider: 'playwright'
		}
	}
});
