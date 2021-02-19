const { join, relative } = require('path')
const { concurrent, series } = require('nps-utils')

const env = process.env.NODE_ENV || 'production'

const baseDir = relative(process.cwd(), __dirname) || '.'

const scriptNamePerEnv = (scriptName) => `nps ${scriptName}.${env}`

const scripts = {
  analyze: {
    description: 'Analyze webpack bundle',
    script: `webpack-bundle-analyzer ${join(baseDir, 'dist', 'stats.json')}`,
  },
  beautify: {
    default: {
      description: 'List files to be beautified',
      script: 'prettier -l "src/**/*.{js,ts}"',
    },
    fix: {
      description: 'Beautify source files',
      script: 'prettier --write "src/**/*.{js,ts}"',
    },
  },
  build: {
    default: {
      description: 'Build the bundle',
      script: scriptNamePerEnv('build'),
    },
    development: {
      description: 'Build the dev bundle',
      script: `webpack --config ${join(baseDir, 'webpack.dev.js')}`,
    },
    production: {
      description: 'Build the prod bundle',
      script: `webpack --config ${join(baseDir, 'webpack.prod.js')}`,
    },
  },
  clean: {
    description: 'Clean all dist generated files',
    script: `rimraf '${join(baseDir, 'dist')}/**'`,
  },
  deploy: {
    default: {
      description: 'Deploy production bundle',
      script: series.nps('clean', 'build.production', 'deploy.pages'),
    },
    pages: {
      description: 'Deploy web app to GitHub pages',
      script: `gh-pages -d ${join(baseDir, 'dist')}`,
    },
  },
  deps: {
    default: {
      description: 'check dependencies',
      script: concurrent.nps('deps.usage', 'deps.version'),
    },
    update: {
      description: 'update outdated dependencies',
      script: 'ncu -u',
    },
    usage: {
      description: 'check dependencies usage',
      script: `depcheck --ignore-bin-package=true --ignores="${[
        '?(@)babel-*',
        '@babel/**',
        '@typescript-eslint/**',
        '*-loader',
      ].join(',')}" ${baseDir}`,
    },
    version: {
      description: 'check dependencies versions',
      script: 'npm outdated -l',
    },
  },
  lint: {
    description: 'Lint TypeScript sources',
    script: `eslint ${baseDir}`,
  },
  start: {
    default: {
      description: 'Start the web application',
      script: scriptNamePerEnv('start'),
    },
    development: {
      description: 'Start the web application in development mode',
      script: `webpack serve --config ${join(baseDir, 'webpack.dev.js')}`,
    },
    production: {
      description: 'Start the web application in production mode',
      script: `here -s -d  ${join(baseDir, 'dist')}`,
    },
  },
  validate: {
    description: 'validate project',
    script: series.nps('clean', 'build', 'lint'),
  },
}

module.exports = { baseDir, scriptNamePerEnv, scripts }
