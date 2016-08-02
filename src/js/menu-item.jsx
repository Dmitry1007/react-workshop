function MenuItem(props) {
  let style = {
    color: props.isAwesome ? 'red' : 'green'
  }

  return <div style={style}>This is awesome!</div>
}

module.exports = MenuItem
