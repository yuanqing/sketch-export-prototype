import { getPluginResourcesDirectoryPath } from 'sketch-plugin-helper'
import { copyFileSync } from '@skpm/fs'

import {
  prototypeViewerJsFile,
  prototypeViewerCssFile,
  prototypeViewerHtmlFile
} from './constants'

export default function copyPrototypeViewerApp (outputDirectoryPath) {
  const pluginResourcesDirectory = getPluginResourcesDirectoryPath()
  ;[
    prototypeViewerJsFile,
    prototypeViewerCssFile,
    prototypeViewerHtmlFile
  ].forEach(function (file) {
    copyFileSync(
      `${pluginResourcesDirectory}/${file}`,
      `${outputDirectoryPath}/${file}`
    )
  })
}
