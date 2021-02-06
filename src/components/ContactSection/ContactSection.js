import React from 'react'
import homeIcon from '../../assets/images/contacts/home-address-fa.png'
import phoneIcon from '../../assets/images/contacts/phone-fa.png'
import emailIcon from '../../assets/images/contacts/comp-mail-fa.png'
import './ContactSection.css'

class ContactSection extends React.Component{
    render() {
        return (
            <div className="contact-section">
                <div className="custom-row row">
                    <div className="input-section col">
                        <div className="row">
                            <div className="input-list col">
                                <div className="input-item row">
                                    <h2> Don't be shy, say hello!</h2>
                                </div>
                                <div className="input-item row">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email"/>
                                    <input className="email-input" type="text" placeholder="Message"/>
                                </div>
                                <div className="input-item row">
                                    <button className="btn-contatct" type="submit">Send </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="address-section col">
                        <div className="contact-address">
                            <h2> Our Office</h2>
                            <div className="contact-form">
                                <div className="contact-item">
                                    <img src={homeIcon} alt=""/>
                                    <a>Erevanskiy 2 30 Slavutych,  Ukraine</a>
                                    <br/>
                                </div>
                                <div className="contact-item">
                                    <img src={phoneIcon} alt=""/>
                                    <a>+38066---8596</a>
                                    <br/>
                                </div>
                                <div className="contact-item">
                                    <img src={emailIcon} alt=""/>
                                    <a>frainrise@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactSection