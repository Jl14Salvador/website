import React from 'react';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedin.svg';
import { ReactComponent as EmailIcon } from '../../assets/mail.svg';

const Social: React.FC<{}> = () => {
  return (
    <div className="social-links">
      <a href="mailto:jlmonterrosa14@gmail.com" target="_blank" rel="noreferrer">
        <div className="icon" id="email">
          <EmailIcon></EmailIcon>
          <span className="icon-title">jlmonterrosa14@gmail.com</span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/juan-monterrosa-58080720b/" target="_blank" rel="noreferrer">
        <div className="icon" id="LinkedIn">
          <LinkedInIcon></LinkedInIcon>
          <span className="icon-title">Linked In</span>
        </div>
      </a>
      <a href="https://github.com/Jl14Salvador" target="_blank" rel="noreferrer">
        <div className="icon" id="GitHub">
          <GitHubIcon></GitHubIcon>
          <span className="icon-title">GitHub</span>
        </div>
      </a>
    </div>
  )
}

export default Social;
