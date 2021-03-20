import React, { useState, useEffect} from 'react';
import Image from './component/Image';
import './App.css';

function App() {
const [image, setImage] = useState([]);

useEffect(()=>{
  fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
  .then(res => res.json())
  .then(res => {
    setImage(res)
  })
},[image]);

  return (
    <div className="gallery">
      <Image image={image} />
    </div>
  )
}

export default App;
