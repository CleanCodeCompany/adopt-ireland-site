import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'
// Styles
import 'semantic-ui-css/semantic.min.css';


const title = 'Setup complete!';

ReactDOM.render(
  <div>
    <Button>Semantic UI</Button>
  </div>,
  document.getElementById('content')
);
// Enable hot reloading
module.hot.accept();
