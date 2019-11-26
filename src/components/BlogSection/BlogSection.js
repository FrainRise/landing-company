import React from 'react'
import communication from '../../assets/images/blog/people-communication.png'
import familyTime from '../../assets/images/blog/family-time.png'
import workingMoments from '../../assets/images/blog/working-moments.png'
import dateIcon from '../../assets/images/blog/date.png'
import commentsIcon from '../../assets/images/blog/comments.png'
import './BlogSection.css'

class BlogSection extends React.Component{
    render() {
        return (
            <div className="blog-section">
                <div className="blog-title">
                    <h2>Recent blog</h2>
                </div>
                <div className="blog-list">
                    <div className="row">
                        <div className="blog-item col">
                            <div className="card">
                                <img src={communication} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Lorem Ipsum is simply</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam..</p>
                                    <a href="#" className="date card-link"><img src={dateIcon} alt=""/>Sep 10’ 15</a>
                                    <a href="#" className="comment card-link"><img src={commentsIcon} alt=""/>5 Coments</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item col">
                            <div className="card">
                                <img src={familyTime} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Lorem Ipsum is simply</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam. </p>
                                    <a href="#" className="date card-link"><img src={dateIcon} alt=""/>Sep 10’ 15</a>
                                    <a href="#" className="comment card-link"><img src={commentsIcon} alt=""/>5 Coments</a>
                                </div>
                            </div>

                        </div>
                        <div className="blog-item col">
                            <div className="card">
                                <img src={workingMoments} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Lorem Ipsum is simply</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                        minim veniam. </p>
                                    <a href="#" className="date card-link"><img src={dateIcon} alt=""/>Sep 10’ 15</a>
                                    <a href="#" className="comment card-link"><img src={commentsIcon} alt=""/>5 Coments</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogSection