
bundelPacking:
	yarn webpack --config webpack/webpack.config.dev.js

autocompile: 
	yarn webpack --watch --config webpack/webpack.config.dev.js

serve: 
	yarn webpack-dev-server --config  webpack/webpack.config.dev.js --open

dev: 
	$(MAKE) bundelPacking && $(MAKE) serve && $(MAKE) autocompile


book: 
	yarn run storybook
