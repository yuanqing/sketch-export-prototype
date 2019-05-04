import { copyFile } from 'fs'

import { inputHtmlFilePath, outputHtmlFilePath } from './constants'

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
