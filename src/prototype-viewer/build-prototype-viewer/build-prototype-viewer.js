import buildBundle from './build-bundle'
import copyHtml from './copy-html'

async function buildPrototypeViewer () {
  await buildBundle()
  await copyHtml()
}
buildPrototypeViewer()
