import React from 'react'
import pagination from '../../assets/images/intro/pagination.png'

class IntroSection extends React.Component{
    render() {
        return (
            <div className="intro-section">
                <h1 className="intro-title"> Always a step ahead go pro</h1>
                <button className="intro-btn" type="submit">Learn More</button>
                <br/>
                <img src={pagination} style={{position: 'relative'}} alt=""/>
            </div>
        )
    }
}

export default IntroSection