export default async function preloadImages () {
  return Promise.resolve()
}

// function collectImageUrls (pages) {
//   const result = []
//   Object.keys(pages).forEach(function (key) {
//     const { image, fixedLayers } = pages[key]
//     result.push(image.fileName)
//     fixedLayers.forEach(function ({ fileName }) {
//       result.push(fileName)
//     })
//   })
//   return result
// }
