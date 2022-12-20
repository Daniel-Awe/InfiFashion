const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: './',
	lintOnSave: true,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "@/styles/theme.scss";
				`,
			}
		}
	}
})
