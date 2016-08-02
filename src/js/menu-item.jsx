function MenuItem({isActive = false}) {
  let style = {
    fontWeight: isActive ? 'bold' : 'normal'
  }

  return <div style={style}>This is awesome!</div>
}

module.exports = MenuItem
