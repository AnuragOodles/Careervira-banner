import React from 'react'

const BannerWeb = ({ cardTitle, cardImage, cardBg }) => {
  return (
    <div className='web-banner' style={{ background: cardBg }}>
      <div className='flex-title web-title'>
        <h2>{cardTitle}</h2>
      </div>
      <img id='card-img-web' className='img-fluid' src={cardImage} alt="cardimage-web" />
    </div>
  )
}

export default BannerWeb;