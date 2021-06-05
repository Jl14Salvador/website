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
          <p className="profile-card__description">It’s important to shape up your hedges, it’s like getting a haircut, stay fresh. I’m giving you cloth talk, cloth. Special cloth alert, cut from a special cloth. Eliptical talk. The other day the grass was brown, now it’s green because I ain’t give up. Never surrender.</p>
        </div>
        <img className="profile__portrait" src={profile_picture} alt="Juan Monterrosa" />
        {/* <img className="profile__portrait" src="https://avatars.githubusercontent.com/u/12138574?v=4" alt="Juan Monterrosa" /> */}
      </div>
      <Social />
    </div>
  )
}

export default ProfileCard;
