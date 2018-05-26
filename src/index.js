import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react'
import { ContentContainer } from './Components/Container'
import { TitleCard } from './Components/TitleCard'
import { PetGrid } from './Components/PetGrid'
import { HomePage } from './Components/Home'
import { Container, Header } from 'semantic-ui-react'


// Styles
import 'semantic-ui-css/semantic.min.css';

const styles = {
  Overlay: {


  }
};

const title = 'Setup complete!';

class App extends React.Component{
  render(){
    return(

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
    );
  }
}

ReactDOM.render(
  <App/>
,
  document.getElementById('content')
);
// Enable hot reloading
module.hot.accept();
