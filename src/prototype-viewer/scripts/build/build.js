import buildBundle from './build-bundle'
import copyHtml from './copy-html'

async function build () {
  await buildBundle()
  await copyHtml()
}
build()
