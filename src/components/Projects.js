import projectImage1 from '../assets/projectImage1.png';
import projectImage2 from '../assets/projectImage2.png';
import projectImage3 from '../assets/projectImage3.png';
import projectImage4 from '../assets/projectImage4.png';
import projectImage5 from '../assets/projectImage5.png';
import data from '../data/projects.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings = {
        dots: true,
        infinite: false,
        initialSlide: 0,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    infinite: false,
                    initialSlide: 0,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = [projectImage1, projectImage2, projectImage3, projectImage4, projectImage5];

    return (
        <div id='projects' className='projects'>
            <div className="heading">
                <h2>WORKS</h2>
            </div>
            <div className="projects-container">
                <Slider {...settings}>
                {
                    data.map((project, index) => {
                        return (
                            <div key={index} className="project">
                                <div className="content">
                                    <img src={images[index]} alt={project.name} />
                                    <h2 className="name">{project.name}</h2>
                                    {
                                        project.description.length > 130 
                                        ? <p className='description-min'>{project.description}</p>
                                        : <p className='description'>{project.description}</p>                                            
                                    }
                                    <div>
                                        <a
                                            className="project-button"
                                            target="_blank"
                                            href={project.link}
                                            rel="noreferrer"
                                        >See More 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
        </div>
    )
}

export default Projects;
