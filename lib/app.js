ReactDOM.render(
  React.createElement('ul', null,
    React.createElement('li', null,
      React.createElement('i', null, 'Hello'),
      ', react!'
    ),
    React.createElement('li', null,
      'And hello ',
      React.createElement('b', null, 'again')
    )
  ),
  document.getElementById('app')
)
