import "./about.css"
import Img from "../../img/hugs.jpg"
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Img} alt="" className="a-img" />
                </div>

            </div>
            <div className="a-right">
                <h1 className="a-title"> About Me</h1>
                <p className="a-sub">
                    I am inspired by the things and people around me. And i love to code, so i put that 
                    inspirationto use and create beatiful and responsive sites.
                </p>
                <p className="a-desc">
                    Theres alot of things about me that will amaze you. Yes i put in such my time in so 
                    much time in my work to make sure the results are great. 
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title"> Second place Winner</h4>
                        <p className="a-award-desc">
                            My team and i won  second place in the TH.0 hackathon.
                        </p> 
                    </div>
                </div>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title"> Second place Winner</h4>
                        <p className="a-award-desc">
                            My team and i won  second place in the TH.0 hackathon.
                        </p> 
                    </div>
                </div>
                
            </div>          
        </div>
    )  
}

export default About
