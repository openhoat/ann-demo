import { isNil, omitBy } from 'lodash'

import { StaticNormalizable } from '../../types/ann'
import { JsonEntry } from '../../types/utils'
import { staticImplements } from '../../utils/helper'
import IntegerNormalizer from './integer'

@staticImplements<StaticNormalizable>()
class PhraseNormalizer extends IntegerNormalizer {
  static phrases = [
    ' ',
    'am',
    'are',
    'do',
    'fine',
    'how',
    'i',
    'is',
    'know',
    'love',
    'marry',
    'me',
    'my',
    'name',
    'not',
    'old',
    'robert',
    'single',
    'thank',
    'what',
    'will',
    'years',
    'you',
    'your',
    '?',
  ]
  // https://medium.com/twyla-ai/40-small-talk-questions-your-chatbot-needs-to-know-and-why-it-matters-63caf03347f6

  static type = 'phrase'

  id: string
  options: JsonEntry
  min: number
  length: number

  constructor(options: JsonEntry) {
    super(options)
    this.id = PhraseNormalizer.type
    this.options = options
    this.min = 0
    this.length = PhraseNormalizer.phrases.length - this.min
  }

  from(value: number): unknown | undefined {
    return PhraseNormalizer.phrases[Number(super.from(value))]
  }

  to(value: unknown): number {
    return super.to(Math.max(PhraseNormalizer.phrases.indexOf(`${value}`), 0))
  }

  toJson(): JsonEntry {
    return omitBy(
      {
        id: this.id,
        options: this.options,
      },
      isNil,
    )
  }
}

export default PhraseNormalizer
