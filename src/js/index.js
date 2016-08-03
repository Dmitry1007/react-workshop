let MenuItem = require('./menu-item')

ReactDOM.render(
  <ul>
    <MenuItem />
    <MenuItem isActive={true} />
  </ul>,
  document.getElementById('app')
)
