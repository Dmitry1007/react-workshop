let MenuItem = require('./menu-item.jsx')

ReactDOM.render(
  <ul>
    <MenuItem isActive={'bold'} />
    <MenuItem />
  </ul>,
  document.getElementById('app')
)
