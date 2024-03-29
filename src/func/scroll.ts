const totalHeight = window.innerHeight
const isAtRightHeight = (elm: HTMLElement) => {
  const { top } = elm.getBoundingClientRect()
  if (top < totalHeight - 50) {
    return true
  }
  return false
}

export { isAtRightHeight }
