import React from 'react'
import Illustration from './Illustration'
import flow from '../illustration-flowing-conversation.svg'
import grow from '../illustration-grow-together.svg'
import users from '../illustration-your-users.svg'

const MainContent = () => {
  return (
    <div className='main'>
        <Illustration src={flow} className='content-left' content={`you wouldn't paginate a conversation in real life ,so why do  it online?Our threads have juts-in-time loading  for a more natural flow`} heading='Flowing Conversation'/>
        <Illustration src={grow} className='content-right' content={`Generate meaningful discussions with your audience and build a strong ,loyal community.Think of the insightful converstaions you miss  out onwith a feedback form`} heading='Grow Together'/>
        <Illustration src={users} className='content-left' content={`It take no time at all to integrate huddle with your app's authentication solution. This means,once signed into your app ,you user can start  chatting immediately.`} heading='Your Users'/>
    </div>
  )
}

export default MainContent