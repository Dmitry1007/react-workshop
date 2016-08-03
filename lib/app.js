(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var MenuItem = require('./menu-item');

ReactDOM.render(React.createElement(
  'ul',
  null,
  React.createElement(MenuItem, { isActive: true }),
  React.createElement(MenuItem, null)
), document.getElementById('app'));

},{"./menu-item":2}],2:[function(require,module,exports){
'use strict';

var MenuItem = React.createClass({
  displayName: 'MenuItem',

  getDefaultProps: function getDefaultProps() {
    return {
      isActive: false,
      message: 'This is awesome!'
    };
  },

  render: function render() {
    var style = {
      backgroundColor: this.props.isActive ? 'red' : 'yellow'
    };

    return React.createElement(
      'div',
      { style: style },
      this.props.message
    );
  }
});

module.exports = MenuItem;

},{}]},{},[1]);
