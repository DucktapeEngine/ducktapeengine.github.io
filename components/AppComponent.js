
'use strict';

const e = React.createElement;

// it took me some time to figure out how this e() function works so heres how it works:
// e('name of tag', { events: callbacks }, 'value')
// to run the site locally you can just use the Live Serve VSCode extension, and run the index.html file.
// enjoy

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return e(
      'h1',
      null,
      'Hello, World!'
    )
  }
}

const domContainer = document.querySelector('#app-container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(AppComponent));