import React from 'react'
import item1 from '../../assets/images/projects/project-item-1.png'
import item2 from '../../assets/images/projects/project-item-2.png'
import item3 from '../../assets/images/projects/project-item-3.png'
import item4 from '../../assets/images/projects/project-item-4.png'
import item5 from '../../assets/images/projects/project-item-5.png'
import item6 from '../../assets/images/projects/project-item-6.png'
import './ProjectSection.css'

class ProjectsSection extends React.Component{
    render() {
        return (
            <div className="project-section">
                <div className="project-title">
                    <h1>Our recent Projects</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="project-list">
                    <div className="project-item">
                        <div className="row">
                            <div className="col">
                                <img className="project" src={item1} alt="image_1"/>
                            </div>
                            <div className="col">
                                <img className="project" src={item2} alt="image_2"/>
                            </div>
                            <div className="col">
                                <img className="project" src={item3} alt="image_3"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <img className="project" src={item4} alt="image_4"/>
                            </div>
                            <div className="col">
                                <img className="project" src={item5} alt="image_5"/>
                            </div>
                            <div className="col">
                                <img className="project" src={item6} alt="image_6"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit"> Load more</button>
            </div>
        )
    }
}

export default ProjectsSection