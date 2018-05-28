import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Button } from 'semantic-ui-react'
import { ContentContainer } from './Components/Container'
import { TitleCard } from './Components/TitleCard'
import { PetGrid } from './Components/PetGrid'
import { HomePage } from './Components/Home'
import { Container, Header } from 'semantic-ui-react'

// Styles
import 'semantic-ui-css/semantic.min.css';

// Redux store
import store from './reducers/store';

// Sample -- REMOVE DURING IMPLEMENTATION
import Sample from './components/containers/sampleContainer';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <div >
        <TitleCard/>
      </div>
      <div>
        <ContentContainer/>
      </div>
      <div>
        <PetGrid/>
      </div>
    </div>
  </Provider>,
  document.getElementById('content'),
);
// Enable hot reloading
module.hot.accept();
