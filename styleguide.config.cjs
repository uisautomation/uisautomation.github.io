const { withCustomConfig } = require('react-docgen-typescript')

module.exports = {
  components: 'src/components/**/[A-Z]*.{ts,tsx}',
  propsParser: withCustomConfig('./tsconfig.styleguidist.json').parse,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: require('path').resolve(__dirname, 'tsconfig.styleguidist.json'),
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },
  styleguideDir: 'build',
  title: 'UIS Automation Components',
  template: {
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ],
    },
  },
  theme: {
    color: {
      base: '#333',
      light: '#999',
      lightest: '#ccc',
      link: '#1976d2',
      linkHover: '#0d47a1',
      border: '#e8e8e8',
      name: '#7f9a44',
      type: '#b77daa',
      error: '#fff',
      baseBackground: '#fff',
      errorBackground: '#c00',
      codeBackground: '#f5f5f5',
      sidebarBackground: '#f5f5f5',
    },
    fontFamily: {
      base: '"Roboto", "Helvetica", "Arial", sans-serif',
      monospace: '"Fira Code", "Monaco", "Consolas", "Lucida Console", monospace',
    },
  },
  styles: {
    Playground: {
      preview: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      },
    },
  },
}