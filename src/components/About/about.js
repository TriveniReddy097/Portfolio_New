import './about.css'
import '../../App.css'

const About = () => {
    return (
        <div className='about center'>
            <h1>Hello, This is <span className='about-name'>Triveni Gudidoddi.</span></h1>
            <h2 className='about__role'>Software Developer and a Tech Geek.</h2>
            <p className="about__desc">
                A Computer Science student & passionate Full Stack Software Developer having an experience in building Web and Mobile applications and some other cool libraries and frameworks. I am currently pursing my masters degree. Previously, I worked as a Software Engineer as well as a freelancer. My research activities include Machine Learning, NLP, Docker, DevOps and many more.
            </p>
            <div className='about__contact center'>
                <a href="https://github.com/TriveniReddy097" target="_blank" rel="noreferrer" className='link link--icon'>
                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/triveni98/" target="_blank" rel="noreferrer" className='link link-icon'>
                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>
                </a>
            </div>
        </div>
    )
}

export default About