let MenuItem = require('./menu-item')

let Menu = React.createClass({
  getDefaultProps() {
      return {
          name:  'Default Menu Item'
      }
  },

  render: function() {
    return (
      <ul>
        <MenuItem isActive={true} menuName={'Menu 1'} />
        <MenuItem menuName={this.props.name} />
      </ul>
    )
  }
})

module.exports = Menu
