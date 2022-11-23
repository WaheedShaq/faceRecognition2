import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <>
        <div>...</div>
        <ParticlesBg type='cobweb' bg={true} />
      </>
      <Navigation />
      <ImageLinkForm />
      <Rank />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
