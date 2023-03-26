const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const buildTscCommand = (filenames) => `tsc --noEmit -p ./tsconfig.json`
const buildPrettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`

module.exports = {
  './src/**/*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand, buildTscCommand],
}
