import {
  getAllPages,
  getCurrentDocument,
  getSettings,
  openSettingsDialog,
  showSuccessMessage,
  DROP_DOWN
} from 'sketch-plugin-helper'
import { existsSync, rmdirSync } from '@skpm/fs'

import buildPrototype from './build-prototype/build-prototype'
import copyPrototypeViewer from './copy-prototype-viewer'

export default function exportPrototype () {
  const pages = getAllPages()
  const { widths, heights } = collectArtboardDimensions(pages)
  let viewportWidth = widths[0]
  let viewportHeight = heights[0]
  if (widths.length !== 1 || heights.length !== 1) {
    const settingsConfig = {
      title: 'Export Prototype',
      inputs: [
        {
          type: DROP_DOWN,
          key: 'width',
          label: 'Viewport width',
          possibleValues: widths
        },
        {
          type: DROP_DOWN,
          key: 'height',
          label: 'Viewport height',
          possibleValues: heights
        }
      ]
    }
    const newSettings = openSettingsDialog(settingsConfig)
    if (!newSettings) {
      return
    }
    viewportWidth = newSettings.viewportWidth
    viewportHeight = newSettings.viewportHeight
  }
  const settings = getSettings()
  const outputDirectoryPath = createOutputDirectoryPath(
    settings.outputDirectoryPath
  )
  if (existsSync(outputDirectoryPath)) {
    rmdirSync(outputDirectoryPath)
  }
  const config = {
    viewportWidth,
    viewportHeight,
    showHotspots: settings.showHotspots,
    showNavigation: settings.showNavigation
  }
  buildPrototype({
    pages,
    outputDirectoryPath,
    config
  })
  copyPrototypeViewer(outputDirectoryPath)
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

function collectArtboardDimensions (pages) {
  const widths = []
  const heights = []
  pages.forEach(function (page) {
    if (page.isSymbolsPage()) {
      return
    }
    page.layers.forEach(function (layer) {
      if (layer.type !== 'Artboard') {
        return
      }
      const preset = layer.sketchObject.preset()
      const width = preset.width()
      if (widths.indexOf(width) === -1) {
        widths.push(width)
      }
      const height = preset.height()
      if (heights.indexOf(height) === -1) {
        heights.push(height)
      }
    })
  })
  return {
    widths: widths.sort(),
    heights: heights.sort()
  }
}
