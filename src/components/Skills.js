import { FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker, FaPython, FaJava, FaNode } from "react-icons/fa";
import { SiMysql, SiHadoop, SiKafka, SiSpark, SiAirflow, SiTensorflow, SiDjango, SiLinux, SiPycharm, SiDocker, SiKubernetes, SiAws, SiAzure, SiGooglecloud } from "react-icons/si";
import { RiGitRepositoryLine } from "react-icons/ri";

const Skills = () => {
    const skillsArr = [
        { "name": 'JavaScript', "icon": FaJs },
        { "name": "HTML", "icon": FaHtml5 },
        { "name": "CSS", "icon": FaCss3 },
        { "name": "Git", "icon": RiGitRepositoryLine },
        { "name": "Reactjs", "icon": FaReact },
        { "name": "Docker", "icon": FaDocker },
        { "name": "SQL", "icon": SiMysql },
        { "name": "Python", "icon": FaPython },
        { "name": "Java", "icon": FaJava },
        
        // ... add other skills similarly
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                {Icon ? <Icon className='skill-icon'/> : null}
                                <p className="skill">
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
