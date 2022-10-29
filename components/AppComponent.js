
'use strict';

const e = React.createElement;

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