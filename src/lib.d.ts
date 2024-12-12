declare module '@prettier/plugin-php/standalone'
declare module '@prettier/plugin-ruby' {
  import type { Plugin } from 'prettier'
  const plugin: Plugin
  export default plugin
}
