import IMG from '../assets/hu.png';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className="about-info">
                <p className="about-desc">With a solid background as a health data analyst, I found myself increasingly drawn to the dynamic and innovative world of software development. My innate curiosity and love for programming were the driving forces behind my decision to pivot my career and pursue my passion.I'm not just a quick learner; I'm someone who embraces change with enthusiasm, strives for excellence, and never stops exploring.</p>
                <div className="about-img">
                    <div className="about-img-wrapper">
                        <img src={IMG} alt="Detective" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;

// Previous
// Completed
// Next

