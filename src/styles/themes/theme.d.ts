import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      'background-secondary': string
      'background-terciary': string
      'orange-300': string
      'orange-400': string
      'text-primary': string
      'text-secondary': string
      border: string
    }
  }
}
