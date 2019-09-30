import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaSoundcloud } from 'react-icons/fa';
import { FaIdBadge } from 'react-icons/fa';
import './App.scss';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt='profile' />
      </div>
      <div className='container'>
        <a href='https://www.facebook.com/bossley9'>
          <FaFacebookF />
          <span>facebook.com/bossley9</span>
        </a>
        <a href='https://www.instagram.com/samaraikun/'>
          <FaInstagram />
          <span>instagram.com/samaraikun</span>
        </a>
        <a href='https://soundcloud.com/sambossley'>
          <FaSoundcloud />
          <span>soundcloud.com/sambossley</span>
        </a>
        <a href='https://github.com/bossley9'>
          <FaGithub />
          <span>github.com/bossley9</span>
        </a>
        <a href='https://www.linkedin.com/in/bossley9/'>
          <FaLinkedinIn />
          <span>linkedin.com/in/bossley9</span>
        </a>
        {/* TODO favicons */}
        {/* last updated 09/30/19 */}
        <a download target='_blank' rel='noopener noreferrer' href={`${process.env.PUBLIC_URL}/Sam_Bossley.pdf`}>
          <FaIdBadge />
          <span>resume</span>
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
