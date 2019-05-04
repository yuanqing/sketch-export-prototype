import { join } from 'path'

export const outputDirectoryPath = join(
  process.cwd(),
  '..',
  'Export Prototype.sketchplugin',
  'Contents',
  'Resources'
)
export const inputJsFilePath = join(process.cwd(), 'src', 'index.js')
export const outputJsFile = 'script.js'
export const outputCssFile = 'style.css'
export const inputHtmlFilePath = join(process.cwd(), 'src', 'index.html')
export const outputHtmlFilePath = join(outputDirectoryPath, 'index.html')
