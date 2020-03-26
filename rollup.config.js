import sourceMap from 'rollup-plugin-sourcemaps';

import pj  from './package.json';

export default {
	input: 'dist/index.js',
	output: {
		file: pj.main,
		format: 'umd',
		name: 'MyModule',
		sourcemap: true,
		globals: {
			test: pj.main
		}
	},
	plugins: [
		sourceMap()
	]
}