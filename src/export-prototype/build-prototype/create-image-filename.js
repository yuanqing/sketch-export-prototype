import { imageFormat, imageScale, imagesDirectory } from './constants'

export default function createImageFilename (id) {
  return `${imagesDirectory}/${id}@${imageScale}x.${imageFormat}`
}
