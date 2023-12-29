
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
                    <p class="experience__description">Working on a robotic system to automate and reduce human efforts. Dealing with Machine Learning, Python APIs, Linux and Vision based systems</p>             
                </div>
                <div className="experience">
                    <h3>Oracle India Pvt. Ltd.</h3>
                    <br />
                    <img className="experience__imagelink" src={OracleLogo} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Software Engineer II</h4>    
                    <h5>Dec 2021 - April 2023</h5>   
                    <p class="experience__description">Working on a robotic system to automate and reduce human efforts. Dealing with Machine Learning, Python APIs, Linux and Vision based systems</p>             
                </div>
                <div className="experience">
                    <h3>IIIT Hyderabad</h3>
                    <br />
                    <img className="experience__imagelink" src={IIITHyd} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Research Intern</h4>    
                    <h5>Dec 2021 - April 2023</h5>   
                    <p class="experience__description">Working on a robotic system to automate and reduce human efforts. Dealing with Machine Learning, Python APIs, Linux and Vision based systems</p>             
                </div>
                <div className="experience">
                    <h3>Relevel</h3>
                    <br />
                    <img className="experience__imagelink" src={RelevelLogo} height="64" width="64" alt="Vested logo" />
                    <br />
                    <br />
                    <h4>Subject Matter Expert</h4>    
                    <h5>Dec 2021 - April 2023</h5>   
                    <p class="experience__description">Working on a robotic system to automate and reduce human efforts. Dealing with Machine Learning, Python APIs, Linux and Vision based systems</p>             
                </div>
            </div>
        </div>
    )
}

export default Experience;