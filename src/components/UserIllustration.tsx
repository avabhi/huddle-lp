import React from 'react'
import userIllustration from '../illustration-mockups.svg'
const UserIllustration = () => {
  return (
    <div className='user-illustration'>
    <div className='content'>
        <p className='heading'>Build the Community Your Fans will love</p>
        <p className='illustration'>Huddle re-imagine  the way we build communities.You have a voice,but so does your audience.Create connections  with your users  as you engage  in genunie discussion</p>
        <button className='btn'>Get Started for free</button>
    </div>
    <div>
      <img className='u-illustration' src={userIllustration} alt="user-illustration-logo" />
    </div>
  </div>
  )
}

export default UserIllustration