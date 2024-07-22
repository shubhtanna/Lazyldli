import React from 'react';
import footer1 from '../Assets/footer1.png';
import footer2 from '../Assets/footer-2.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="auto-scrolling-footer">
            <div className="footer-image-container">
                <img src={footer1} alt="Footer 1" className='footer-image'/>
                <img src={footer2} alt="Footer 2" className='footer-image'/>
                <img src={footer1} alt="Footer 1" className='footer-image'/>
                <img src={footer2} alt="Footer 2" className='footer-image'/>
                <img src={footer1} alt="Footer 1" className='footer-image'/>
                <img src={footer2} alt="Footer 2" className='footer-image'/>
            </div>
            
            <div className='last-line-container'>
            <p className='last-line'>Get your name on the leader. Win amazing prizes!</p>
            </div>
        </div>
    )
}

export default Footer
