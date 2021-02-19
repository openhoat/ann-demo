import './styles/main.css'

import { initUi } from './ui'
import workerHandler from './worker-handler'

workerHandler.init()
initUi(workerHandler)
