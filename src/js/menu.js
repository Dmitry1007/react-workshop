let MenuItem = require('./menu-item')

let Menu = React.createClass({
  render: function() {
    return (
      <ul>
        <MenuItem isActive={true} />
        <MenuItem />
      </ul>
    )
  }
})

module.exports = Menu
