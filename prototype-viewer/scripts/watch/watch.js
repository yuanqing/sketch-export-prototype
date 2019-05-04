import chokidar from 'chokidar'

import buildBundle from '../build/build-bundle'
import copyHtml from '../build/copy-html'

const watcher = chokidar.watch(['./src/prototype-viewer', './package.json'])
watcher.on('change', build)

async function build () {
  await buildBundle({ isDevelopment: true })
  await copyHtml()
}
build()
