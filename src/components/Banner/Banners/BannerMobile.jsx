import React from 'react'

const BannerMobile = ({ cardTitle, cardImage, cardBg }) => {
  return (
    <div className='mobile-banner' style={{ background: cardBg }}>
      <img id='card-img-mobile' className='img-fluid' src={cardImage} alt="cardimage-mobile" />
    </div>
  )
}

export default BannerMobile;