module.exports = wallaby => {
  return {
    files: ['src/*.mjs'],
    tests: ['test/*.js'],
    debug: true,
    testFramework: 'mocha',
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: `-r ${require.resolve('esm')}`
      }
    },

    preprocessors: { '**/*.mjs': file => file.changeExt('js').content }
  }
}