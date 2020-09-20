import React from 'react';
import tenguy from './Images/memes/example.jpg';
import afraid from './Images/memes/1.jpg';
import apcr from './Images/memes/2.jpg';
import older from './Images/memes/3.jpg';

export default function Gallery() {
  return (
    <>
      <h1>Gallery</h1>
      <p>0. tenguy</p>
      <img src={tenguy} alt="" width="200" height="200"></img>
      <p>1. afraid</p>
      <img src={afraid} alt="" width="200" height="200"></img>
      <p>2. apcr</p>
      <img src={apcr} alt="" width="200" height="200"></img>
      <p>3. older</p>
      <img src={older} alt="" width="300" height="200"></img>
    </>
  );
}
