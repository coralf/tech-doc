
import React from './core';

const ReactDOM = React;

const element = (
  <div id="container">
    <input value="foo" type="text" /> <a href="/bar"></a>
    <span></span>
  </div>
);

ReactDOM.render(element, document.getElementById('root'));