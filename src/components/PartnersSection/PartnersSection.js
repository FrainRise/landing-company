import React from 'react'
import microsoftIcon from '../../assets/images/partners/microsoft-icon.png'
import envatoIcon from '../../assets/images/partners/envato-icon.png'
import dribbbleIcon from '../../assets/images/partners/dribbble-icon.png'
import spotifyIcon from '../../assets/images/partners/spotify-icon.png'
import googleIcon from '../../assets/images/partners/google-icon.png'
import './PartnersSection.css'

class PartnersSection extends React.Component{
    render() {
        return (
            <div className="partners-section">
                <div className="partners-list">
                    <div className="row">
                        <div className="partners-item col">
                            <a className="microsoft"><img className="microsoft-icon" src={microsoftIcon} alt=""/> Microsoft</a>
                        </div>
                        <div className="partners-item col">
                            <a className="envato"><img className="envato-icon" src={envatoIcon} alt=""/> Envato</a>
                        </div>
                        <div className="partners-item col">
                            <a className="dribbble"><img    className="dribbble-icon" src={dribbbleIcon} alt=""/></a>
                        </div>
                        <div className="partners-item col">
                            <a className="spotify"><img className="spotify-icon" src={spotifyIcon} alt=""/> Spotify</a>
                        </div>
                        <div className="partners-item col">
                            <a className="google"><img className="google-icon" src={googleIcon} alt=""/> Google</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PartnersSection