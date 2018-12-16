import React from 'react';
import Button from './Button';
import './Story.css';

const Story = (props) => {
  // debugger
  return (
    <div className='Story'>
      <img src={props.img} alt="Book"/>
      <div className='story-info'>
        <div className='book-info'>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <div className='author-info'>
          <img src={props.authImg} alt="Author image" />
          <div className='author-info-text'>
          {props.authName}
          <span>{props.estTime} read</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story;
