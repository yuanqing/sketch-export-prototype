import {
  getAllPages,
  getCurrentDocument,
  getSettings,
  showSuccessMessage
} from 'sketch-plugin-helper'
import { existsSync, rmdirSync } from '@skpm/fs'

import buildPrototype from './build-prototype/build-prototype'
import copyPrototypeViewerApp from './copy-prototype-viewer-app'

export default function exportPrototype () {
  const pages = getAllPages()
  const settings = getSettings()
  const outputDirectoryPath = createOutputDirectoryPath(
    settings.outputDirectoryPath
  )
  if (existsSync(outputDirectoryPath)) {
    rmdirSync(outputDirectoryPath)
  }
  buildPrototype({
    pages,
    outputDirectoryPath
  })
  copyPrototypeViewerApp(outputDirectoryPath)
  showSuccessMessage(`Built prototype in ${outputDirectoryPath}`)
}

const basenameRegularExpression = /([^.]+).sketch$/g
const tildeRegularExpression = /~/

function createOutputDirectoryPath (outputDirectoryPath) {
  const currentDocument = getCurrentDocument()
  const fileName = currentDocument.sketchObject.fileURL().lastPathComponent()
  const baseName = basenameRegularExpression.exec(fileName)[1]
  return `${outputDirectoryPath.replace(
    tildeRegularExpression,
    process.env.HOME
  )}/${baseName}`
}
