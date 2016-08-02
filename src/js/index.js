let MenuItem = require('./menu-item.jsx')

ReactDOM.render(
  <ul>
    <MenuItem isAwesome={'Awesome!!'} />
    <MenuItem />
  </ul>,
  document.getElementById('app')
)
