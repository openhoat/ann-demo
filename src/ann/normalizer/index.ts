import { StaticNormalizable } from '../../types/ann'
import BooleanNormalizer from './boolean'
import DefaultNormalizer from './default'
import IntegerNormalizer from './integer'
import PhraseNormalizer from './phrase'

const normalizers = new Map<string, StaticNormalizable>(
  [DefaultNormalizer, BooleanNormalizer, IntegerNormalizer, PhraseNormalizer].map((Normalizer) => [
    Normalizer.type,
    Normalizer,
  ]),
)

export default normalizers
