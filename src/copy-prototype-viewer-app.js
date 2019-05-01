import { getPluginResourcesDirectoryPath } from 'sketch-plugin-helper'
import { copyFileSync } from '@skpm/fs'

import {
  prototypeViewerBundleFile,
  prototypeViewerFile
} from './constants'

export default function copyPrototypeViewerApp (outputDirectoryPath) {
  const pluginResourcesDirectory = getPluginResourcesDirectoryPath()
  copyFileSync(
    `${pluginResourcesDirectory}/${prototypeViewerBundleFile}`,
    `${outputDirectoryPath}/${prototypeViewerBundleFile}`
  )
  copyFileSync(
    `${pluginResourcesDirectory}/${prototypeViewerFile}`,
    `${outputDirectoryPath}/${prototypeViewerFile}`
  )
}
