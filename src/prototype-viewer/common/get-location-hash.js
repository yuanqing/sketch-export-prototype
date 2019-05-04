const hashRegularExpression = /#([^#]+)$/

export default function getLocationHash () {
  const matches = hashRegularExpression.exec(window.location.hash)
  return matches ? matches[1] : null
}
