let MenuItem = React.createClass({
  getDefaultProps: function() {
      return {
          isActive: false,
          message: 'This is awesome!'
      };
  },

  render: function() {
    let style = {
      backgroundColor: this.props.isActive ? 'red' : 'yellow'
    }

    return <div style={style}>{this.props.message}</div>
  }
})

module.exports = MenuItem
