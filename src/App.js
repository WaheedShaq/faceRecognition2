import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <ImageLinkForm />
      <Rank />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
