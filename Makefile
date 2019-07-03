
bundelPacking:
	yarn webpack --config webpack/webpack.config.dev.js

autocompile: 
	yarn webpack --watch --config webpack/webpack.config.dev.js

serve: 
	yarn webpack-dev-server --config  webpack/webpack.config.dev.js --open

dev: 
	$(MAKE) bundelPacking && $(MAKE) serve && $(MAKE) autocompile


storybook: 
	yarn run storybook

prod-bundelPacking:
	yarn webpack --config webpack/webpack.config.prod.js

prod-autocompile: 
	yarn webpack --watch --config webpack/webpack.config.prod.js

prod-serve: 
	yarn webpack-dev-server --config  webpack/webpack.config.prod.js --open

production: 
	$(MAKE) prod-bundelPacking && $(MAKE) prod-serve && $(MAKE) prod-autocompile


