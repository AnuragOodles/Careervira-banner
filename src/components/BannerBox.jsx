import { useRef } from 'react';
import './Banner.css'

const BannerBox = ({ cardTitle, cardImage, cardBg }) => {

    const ImageRef = useRef('')

    return (
        <div id="career-banner">
            <div className='career-banner' style={{ background: cardBg }}>
                <div className="right-box">
                    <div className='flex-center' style={{height: '100%'}}>
                        <h1 id="card-title">{cardTitle}</h1>
                    </div>
                    <img className="logo" src="./images/careervira-logo-text.svg" alt="lgo" />
                </div>
                <div className="left-box">
                    <img ref={ImageRef} id="card-img" className="left-box-image" src={cardImage} alt="card-img" />
                </div>
            </div>

        </div>
    )
}

export default BannerBox;