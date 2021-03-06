
export default function (state) {
  const { document, selection } = state
  const texts = document.getTextNodes()
  const first = texts.first()
  const second = texts.last()
  const range = selection.merge({
    anchorKey: first.key,
    anchorOffset: first.length,
    focusKey: second.key,
    focusOffset: 0
  })

  return state
    .transform()
    .deleteAtRange(range)
    .apply()
}
