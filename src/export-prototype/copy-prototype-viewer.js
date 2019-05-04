import { getPluginResourcesDirectoryPath } from 'sketch-plugin-helper'
import { copyFileSync } from '@skpm/fs'

const files = {
  'index.html': 'index.html',
  'script.js': 'assets/script.js',
  'style.css': 'assets/style.css'
}

export default function copyPrototypeViewer (outputDirectoryPath) {
  const pluginResourcesDirectory = getPluginResourcesDirectoryPath()
  Object.keys(files).forEach(function (inputFile) {
    const outputFile = files[inputFile]
    copyFileSync(
      `${pluginResourcesDirectory}/${inputFile}`,
      `${outputDirectoryPath}/${outputFile}`
    )
  })
}
