import { join } from 'path'
import { copyFile } from 'fs'

const inputFilePath = join(__dirname, '..', '..', 'index.html')
const outputFilePath = join(
  process.cwd(),
  'Export Prototype.sketchplugin',
  'Contents',
  'Resources',
  'index.html'
)

export default async function copyHtml () {
  await new Promise(function (resolve, reject) {
    copyFile(inputFilePath, outputFilePath, function (error) {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })

  // await new Promise(function (resolve, reject) {
  //   copyFile(join(__dirname, '..', '..', 'style.css'), join(
  //     process.cwd(),
  //     'Export Prototype.sketchplugin',
  //     'Contents',
  //     'Resources',
  //     'style.css'
  //   ), function (error) {
  //     if (error) {
  //       reject(error)
  //       return
  //     }
  //     resolve()
  //   })
  // })
}
