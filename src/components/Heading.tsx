import React from 'react';
import './Heading.css';

const Heading: React.FC = () => {
  return (
    <div className='heading-div'>

        <div className='yellow-line-div'>
            <div className='yellow-line yellow-line-1'></div>
            <div className='yellow-line yellow-line-2'></div>
            <div className='yellow-line yellow-line-3'></div>
        </div>
        
        <div className='fastest'>
        <h1 ><span className='top-heading'>Fastest of Today</span></h1>
        </div>
       
        <div className='blue-line-div'>
            <div className='blue-line blue-line-1'></div>
            <div className='blue-line blue-line-2'></div>
            <div className='blue-line blue-line-3'></div>
        </div>
    </div>
  )
}

export default Heading