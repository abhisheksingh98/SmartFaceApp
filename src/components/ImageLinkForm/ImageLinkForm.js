import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
  // Form for image link
  <div>
    <p className='f3'>
      {'This app will detect any face in your pictures. Give it a try!'}
    </p>
    <div className='center form'>
      <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange}/>
      <button className='w-30 grow f4 link ph3 pv2 dib white bg-blue' onClick={onButtonSubmit}>Detect</button>
    </div>
  </div>);
}

export default ImageLinkForm;
