import { writeFileSync } from '@skpm/fs'

export default function writeConfig ({ outputFilePath, config }) {
  const fileContent = `window.__SKETCH_PROTOTYPE_DATA__=${JSON.stringify(
    config,
    null,
    2
  )}\n`
  writeFileSync(outputFilePath, fileContent)
}
