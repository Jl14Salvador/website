import React from 'react';
import Social from './social/Social';
import './MainStyles.scss';
import profile_picture from '../assets/profile_picture.jpg'

const ProfileCard: React.FC<{}> = () => {
  return (
    <div className="profile-card">
      <div className="profile__header">
        <div className="profile-card__title">
          <span className="profile-card__heading">Juan Monterrosa</span>
          <span className="profile-card__sub-text">Back-End Developer</span>
          <p className="profile-card__description">Honest, easy-going and driven Software Developer motivated to utilize my skills and creativity in Typescript, Javascript, Node.js and PostgreSQL. I have a passion for learning new technologies and love working on a team to build efficient products and services.</p>
        </div>
        <div>
          <img className="profile__portrait" src={profile_picture} alt="Juan Monterrosa" />
        </div>
        {/* <img className="profile__portrait" src="https://avatars.githubusercontent.com/u/12138574?v=4" alt="Juan Monterrosa" /> */}
      </div>
      <Social />
    </div>
  )
}

export default ProfileCard;
