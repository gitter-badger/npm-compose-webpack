import webpack from 'webpack'

import {
  WebpackIgnoredProps,
} from './enums'

export type WebpackAliases = webpack.Resolve['alias']

export type WebpackConfiguration = Omit<webpack.Configuration, keyof typeof WebpackIgnoredProps>

export type WebpackParserOptions = Omit<webpack.ParserOptions, 'system'>