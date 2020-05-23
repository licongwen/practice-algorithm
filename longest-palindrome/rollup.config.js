import typescript from 'rollup-plugin-typescript2'

export default {
  input: './lib/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'umd',
      name: 'NumberFormat'
    },
    {
      file: './dist/index.esm.js',
      format: 'es'
    }
  ],

  plugins: [
    typescript()
  ]
}
