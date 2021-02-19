import { JsonEntry } from './utils'

declare module '*.yml' {
  const content: JsonEntry
  export default content
}
