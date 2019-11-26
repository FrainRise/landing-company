import React from 'react'
import member2 from '../../assets/images/member/member-female-1.png'
import pagination from '../../assets/images/member/pagination_copy.png'
import './FeedbackSection.css'

class FeedbackSection extends React.Component{
    render() {
        return (
                <div className="feedback-section">
                    <h1 className="feedback-title">Feedback</h1>
                    <div className="feedback">
                        <img className="fb-member-photo" src={member2} alt=""/>
                        <p>Designing is a matter of concentration. You go deep into what you want to do. It's about intensive research, really. The concentration is warm and
                            intimate and like
                            the fire inside the earth intense but not distorted.</p>
                        <img src={pagination} alt=""/>
                    </div>
                </div>
        )
    }
}

export default FeedbackSection