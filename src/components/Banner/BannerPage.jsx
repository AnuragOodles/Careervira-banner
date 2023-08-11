import React, { useCallback, useRef, useState } from 'react';
import { toJpeg} from 'html-to-image';
import './Banner.css'

import BannerDesktop from './Banners/BannerDesktop'
import BannerWeb from './Banners/BannerWeb';
import BannerMobile from './Banners/BannerMobile';


const BannerPage = () => {
    const desktopBannerRef = useRef(null);
    const webBannerRef = useRef(null);
    const mobileBannerRef = useRef(null);


    const [cardTitle, setCardTitle] = useState('Build a Successful Career in Data Scientist in India with this extensive Career');
    // const [cardName, setCardName] = useState('image');
    const [cardImage, setCardImage] = useState('./images/career-instructor.png');
    const [cardBg, setCardBg] = useState('linear-gradient(136deg, #FAFCFF 0%, #E4F0FF 100%)');

    function cardBackgroundColor() {
        if (cardBg === 'red') {
            return 'linear-gradient(157deg, #FFF5F5 0%, #FCD4D4 100%)'
        } else if (cardBg === 'yellow') {
            return 'linear-gradient(157deg, #FFFEF2 0%, #FCECC0 100%)'
        } else if (cardBg === 'dark-blue') {
            return 'linear-gradient(157deg, #F5F8FF 0%, #D0DDFF 100%)'
        } else {
            return 'linear-gradient(136deg, #FAFCFF 0%, #E4F0FF 100%)'
        }
    }

    function toPhoto(ref, format , quality = 0.95) {

        toJpeg(ref, { cacheBust: true, quality: quality })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = `${cardTitle.split(" ").join("_")}_${format}.png`
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })

    }


    const onButtonClick = useCallback(() => {
        if (desktopBannerRef.current === null) {
            return
        }

        toPhoto(desktopBannerRef.current, '16x9');
        toPhoto(webBannerRef.current, 'web',1.0);
        toPhoto(mobileBannerRef.current, '1x1',1.0);


    }, [desktopBannerRef, cardTitle])

    function storeImage(e) {
        //  code for local storage
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            localStorage.setItem('recent-image', reader.result);
            const uploadedImage = localStorage.getItem('recent-image')
            if (uploadedImage) {
                document.querySelector('#card-img').setAttribute('src', uploadedImage)
                document.querySelector('#card-img-web').setAttribute('src', uploadedImage)
                document.querySelector('#card-img-mobile').setAttribute('src', uploadedImage)
            }
        })

        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <div className='flex-center'>
            <div className='banner-buttons'>
                <div className='input-label-div'>
                    <label htmlFor="card-title">Title</label>
                    <input id='card-title' type="text" onChange={(e) => setCardTitle(e.target.value)} />
                </div>
                <div className='input-label-div'>
                    <label htmlFor="card-Image">Image</label>
                    {/* <input type='file' name="cardImage" id="card-Image" onChange={(e) => setCardImage(e.target.value.replace(/C:\\fakepath\\/i, './images/'))} /> */}
                    <input type='file' name="cardImage" id="card-Image" onChange={(e) => storeImage(e)} />
                </div>
                <div className='input-label-div'>
                    <label for="career-bg">Choose Bg Color:</label>
                    <select id="career-bg" onChange={(e) => setCardBg(e.target.value)}>
                        <option value="light-blue">Light Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="dark-blue">Dark Blue</option>
                        <option value="red">Red</option>
                    </select>
                </div>
                <div className='input-label-div'>

                </div>
                {/* <div className='input-label-div'>
                    <label htmlFor="card-Name">Image Name</label>
                    <input id='card-Name' type="text" onChange={(e) => setCardName(e.target.value)} />
                </div> */}
                <button onClick={onButtonClick}>Download</button>
            </div>
            <section className='all-images-conatiner'>
            <div ref={desktopBannerRef} className='career-banner-main'>
                <BannerDesktop cardTitle={cardTitle} cardImage={cardImage} cardBg={cardBackgroundColor()} />
            </div>
            <div ref={webBannerRef}  className='career-banner-web'>
                <BannerWeb cardTitle={cardTitle} cardImage={cardImage} cardBg={cardBackgroundColor()}/>
            </div>
            <div ref={mobileBannerRef}  className='career-banner-mobile'>
                <BannerMobile cardTitle={cardTitle} cardImage={cardImage} cardBg={cardBackgroundColor()}/>
            </div>
            </section>
        </div>
    )
}

export default BannerPage;