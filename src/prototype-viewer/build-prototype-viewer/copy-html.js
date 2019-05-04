import { join, basename } from 'path'
import { copyFile } from 'fs'

import { inputHtmlFilePath, outputDirectoryPath } from './constants'

const outputHtmlFilePath = join(
  outputDirectoryPath,
  basename(inputHtmlFilePath)
)

export default async function copyHtml () {
  await new Promise(function (resolve, reject) {
    copyFile(inputHtmlFilePath, outputHtmlFilePath, function (error) {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}
