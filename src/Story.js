import React from 'react';
import Button from './Button';
import Author from './Author';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} alt="Book"/>
      <div className='story-info'>
        <div className='book-info'>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <div className='author-info'>
          {
            <div className='story-info'>
              <Author {...props} />
            </div>    
          }
          </div>      
      </div>
    </div>
  )
}

export default Story;
