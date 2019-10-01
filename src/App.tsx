import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSoundcloud } from 'react-icons/fa';
import { FaIdBadge } from 'react-icons/fa';
import './App.scss';

// {/* TODO favicons */}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt='profile' />
      </div>
      <div className='container'>
        <ul>
          <li>
            <a href='https://www.facebook.com/bossley9'>
              <div className='link'>
                <FaFacebookF />
                <span>Facebook</span>
              </div>
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/samaraikun/'>
              <div className='link'>
                <FaInstagram />
                <span>Instagram</span>
              </div>
            </a>
          </li>
          <li>
            <a href='https://soundcloud.com/sambossley'>
              <div className='link'>
                <FaSoundcloud />
                <span>Soundcloud</span>
              </div>
            </a>
          </li>
          <li>
            <a href='https://github.com/bossley9'>
              <div className='link'>
                <FaGithub />
                <span>Github</span>
              </div>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/bossley9/'>
              <div className='link'>
                <FaLinkedinIn />
                <span>Linkedin</span>
              </div>
            </a>
          </li>
          <li>
            {/* last updated 09/30/19 */}
            <a download target='_blank' rel='noopener noreferrer' href={`${process.env.PUBLIC_URL}/Sam_Bossley.pdf`}>
              <div className='link'>
                <FaIdBadge />
                <span>Resume</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
