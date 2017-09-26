import resolve from 'rollup-plugin-node-resolve';

// Add here external dependencies that actually you use.
const globals = {
    '@angular/core': 'ng.core',
    '@kaiu/serializer': 'kaiu.serializer',
};

export default {
    entry: './dist/modules/ng-serializer.es5.js',
    dest: './dist/bundles/ng-serializer.umd.js',
    format: 'umd',
    exports: 'named',
    moduleName: 'kaiu.ngSerializer',
    plugins: [resolve()],
    external: Object.keys(globals),
    globals: globals,
    onwarn: () => { return }
}
