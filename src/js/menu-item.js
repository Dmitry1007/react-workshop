let MenuItem = React.createClass({
  getInitialState: function() {
    return {
      subMenuVisible: this.props.isActive
    }
  },

  getDefaultProps: function() {
      return {
          isActive: false,
          message: 'This is awesome!',
          details: 'So awesome you will piss pants'
      };
  },

  render: function() {
    let style = {
      backgroundColor: this.props.isActive ? 'red' : 'yellow'
    }

    return (
      <div style={style}>
        {/* Always show the message */}
        {this.props.message}

        {/* Only show details if `this.state.subMenuVisible` is truthy */}
        {this.state.subMenuVisible ? (
          <p>
            {this.props.details}
          </p>
        ) : false}
      </div>
    )
  }
})

module.exports = MenuItem
