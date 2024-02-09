import React from 'react'

interface IContactProps{
    src:string
}

const Contact:React.FC<IContactProps> = ({src}) => {
  return (
    <div>
         <img className='contact-logo' src={src} alt="logo" />
    </div>
  )
}

export default Contact