export default function createImageFilename ({ id, imageScale, imageFormat }) {
  return `images/${id}@${imageScale}x.${imageFormat}`
}
