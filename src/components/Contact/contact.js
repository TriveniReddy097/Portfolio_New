import './contact.css';
import '../../App.css';

const Contact = () => {
    return (
        <div id="contact" className="section contact center">
            <h2 className="section__title">CONTACT</h2>
            <iframe src="https://tally.so/embed/3NorQp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276" frameborder="0" marginheight="0" marginwidth="0" title="Contact form"></iframe>
            {/* <iframe src="https://tally.so/embed/m6KyPO?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1" title="contact" height="475" width="80%" style={{borderRadius: "5px"}}></iframe> */}
        </div>
    )
}

export default Contact;