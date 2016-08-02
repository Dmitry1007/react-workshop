let MenuItem = require('./menu-item')

ReactDOM.render(
  React.createElement('ul', null,
    MenuItem(),
    MenuItem()
  ),
  document.getElementById('app')
)
