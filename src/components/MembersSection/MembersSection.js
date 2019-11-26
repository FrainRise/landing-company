import React from 'react'
import member1 from '../../assets/images/member/member-male-1.png'
import member2 from '../../assets/images/member/member-female-1.png'
import member3 from '../../assets/images/member/member-male-2.png'
import member4 from '../../assets/images/member/member-female-2.png'
// import pagination from '../../assets/images/member/pagination_copy.png'
import './MembersSection.css'

class MembersSection extends React.Component{
    render() {
        const members = [member1, member2, member3, member4];
        return (
            <div className="member-section">
                <div className="member-section-title">
                    <h1>Our Team members</h1>
                    <p>We are a small team of passionate, creative and digital marketers with big ambitions.
                        We always look at the big picture and believe every business can find their audience online...
                    </p>
                </div>
                <div className="members-list">

                        {
                            members.map(function (member) {
                                return(
                                    <div className="member-container">
                                        <img className="member-photo" src={member} alt=""/>
                                        <div className="overlay">
                                            <div className="member-info">
                                                Member Name
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        )
    }
}

export default MembersSection