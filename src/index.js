import './index.scss'
import { createTheme } from '@acnb/core'

function hi() {
  alert('Hello World!')
}

createTheme().use(hi)
