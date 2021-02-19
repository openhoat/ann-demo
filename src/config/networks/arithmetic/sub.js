import { buildArray } from '../../../utils/helper'
import * as yamlConfig from './sub.yml'

const minX = yamlConfig.inputs[0]?.normalizerOptions?.min
const maxX = yamlConfig.inputs[0]?.normalizerOptions?.max
const minY = yamlConfig.inputs[1]?.normalizerOptions?.min
const maxY = yamlConfig.inputs[1]?.normalizerOptions?.max

const usecases = buildArray(maxX - minX + 1).reduce((acc, i) => {
  const x = i + minX
  return acc.concat(
    buildArray(maxY - minY + 1).map((j) => {
      const y = j + minY
      return { inputs: [x, y], outputs: x - y }
    }),
  )
}, [])

export default { ...yamlConfig, training: { ...yamlConfig.training, usecases } }
