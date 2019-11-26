import React from 'react'
import facebook from '../../assets/images/social-network/facebook.png'
import spotify from '../../assets/images/social-network/spotify.png'
import twitter from '../../assets/images/social-network/twitter.png'
import pinterest from '../../assets/images/social-network/pinterest.png'
import dribbble from '../../assets/images/social-network/dribbble.png'
import vimeo from '../../assets/images/social-network/vimeo.png'
import './SocialNetworkSection.css'

class SocialNetworkSection extends React.Component{
    render() {
        return (
            <div className="socials-section">
                <div className="social-title">
                    <h2>Go business</h2>
                </div>
                <div className="social-items">
                    <img src={facebook} alt=""/>
                    <img src={spotify} alt=""/>
                    <img src={twitter} alt=""/>
                    <img src={pinterest} alt=""/>
                    <img src={dribbble} alt=""/>
                    <img src={vimeo} alt=""/>
                </div>
            </div>
        )
    }
}

export default SocialNetworkSection