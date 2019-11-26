import React from 'react'
import serviceWeb from '../../assets/images/services/service-webdev.png'
import serviceDesign from '../../assets/images/services/service-design.png'
import serviceSoftdev from '../../assets/images/services/service-softdev.png'
import './ServiceSection.css'

class ServiceSection extends React.Component{
    render() {
        return (
            <div className="service-section">
                <div className="service-title">
                    <h1>WE PROVIDE THE BEST SERVICE</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="service-list">
                    <div className="service-item">
                        <img src={serviceWeb} alt=""/>
                        <h3>web development</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration.</p>
                    </div>
                    <div className="service-item">
                        <img src={serviceDesign} alt=""/>
                        <h3>UI/UX DESIGN</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration.</p>
                    </div>
                    <div className="service-item">
                        <img src={serviceSoftdev} alt=""/>
                        <h3>software development</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default ServiceSection