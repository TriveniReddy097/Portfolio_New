
import './experience.css';
import '../../App.css';
import IIITHyd from '../../assets/iiitHyd.jpeg';
import VestedLogo from '../../assets/vestedLogo.png';
import OracleLogo from '../../assets/oracleImg.jpeg';
import RelevelLogo from '../../assets/relevel.png';


const Experience = () => {
    return (
        <div id="experience" className="section experience">
            <h2 className="section__title">Experience</h2>
            <div className="experience__grid">
                <div className="experience">
                    <h3>Vested Finance</h3>
                    <br />
                    <img className="experience__imagelink" src={VestedLogo} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Software Engineer II</h4>    
                    <h5>Dec 2021 - April 2023</h5>   
                    <p class="experience__description">Worked on various products across the organisation in web and mobile applications encompassing both front-end and back-end development. Leveraging expertise in React, JavaScript, TypeScript, and Node, I contributed to the creation of seamless user interfaces and robust functionalities. </p>             
                </div>
                <div className="experience">
                    <h3>Oracle India Pvt. Ltd.</h3>
                    <br />
                    <img className="experience__imagelink" src={OracleLogo} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Member of Technical Staff</h4>    
                    <h5>Sep 2020 - Dec 2021</h5>   
                    <p class="experience__description">Worked on Oracle Autonomous cloud database monitoring and backup across 24+ country databases. Generated automated scripts and alerts using python, shell scripting and terraform.</p>             
                </div>
                <div className="experience">
                    <h3>Relevel</h3>
                    <br />
                    <img className="experience__imagelink" src={RelevelLogo} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Subject Matter Expert</h4>    
                    <h5>June 2020 - Aug 2020</h5>   
                    <p class="experience__description">Worked as SME for javascript and React classes and responsible for creating class plans, notes and projects for students. </p>  
                </div>
                <div className="experience">
                    <h3>IIIT Hyderabad</h3>
                    <br />
                    <img className="experience__imagelink" src={IIITHyd} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Research Intern</h4>    
                    <h5>May 2019 - June 2019</h5>   
                    <p class="experience__description">Worked as a Research Intern under Prof. Suryakanth V. Gangashetty, building ML/NLP models for Text-to-Speech systhesis in regional languages.</p>             
                </div>
            </div>
        </div>
    )
}

export default Experience;