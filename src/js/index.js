let MenuItem = require('./menu-item.js')
console.log(MenuItem)

ReactDOM.render(
  React.createElement('ul', null,
    MenuItem(),
    MenuItem()
  ),
  document.getElementById('app')
)
