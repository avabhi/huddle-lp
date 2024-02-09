import React from 'react'

interface IllustrationProps {
    heading: string;
    className: string;
    content:string;
    src:any;
}

const Illustration:React.FC<IllustrationProps> = ({
    heading,
    className,
    content,
    src
}) => {
  return (
    <div className={className}>
        <div className='primary'>
            <p className='main-heading'>{heading}</p>
            <p className='main-content'>{content}</p>
        </div>
        <img className='logo-image' src={src} alt="illustration-logo" />
    </div>
  )
}

export default Illustration