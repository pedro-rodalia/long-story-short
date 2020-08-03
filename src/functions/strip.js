const strip = (text) => {
  const tmp = document.createElement('div')
  tmp.innerHTML = text
  return tmp.innerText || ''
}

export default strip
