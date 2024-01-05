import '../../App.css';
import NITDgp from '../../assets/nitdgp.2accd723.jpeg';
import './education.css';

const Education = () => {
    return (
        <div id="education" className="section education">
            <h2 className="section__title">Education </h2>
            <div className="education__grid">
                <div className="education">
                    <h3>Masters in Computer Science</h3>
                    <h4>University of Florida, Gainesville</h4>
                    <h6>2023 - 2025</h6>
                    <br />
                    <svg className="education__image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.5 29.4" height="150" width="150" alt="U F Logo"><g fill="#285797"><path d="M31.1 24.2v-7.5h6.8v-4.9h-6.8V4.9h7.5v2.7h4.9V0H23.7v4.9h1.8v19.3h-1.8v4.9h9.1v-4.9h-1.7zM21.1 18.1V4.9h1.8V0h-9.2v4.9h1.8v11.6c0 4.9-.6 7.2-4 7.2s-4-2.3-4-7.2V4.9h1.8V0H0v4.9h1.8v13.2c0 2.9 0 5.3 1.4 7.4 1.5 2.4 4.3 3.9 8.3 3.9 7.1 0 9.6-3.7 9.6-11.3z"></path></g></svg>
                    <p class="education__description">Recipient of University of Florida, Herbert Wertheim College of Engineering Achievement Award Scholarship. </p>
                </div>
                <br />
                <div className="education">
                    <h3>Bachelors, Electronics and Communication Engineering</h3>
                    <h4>NIT Durgapur</h4>
                    <h6>2016 - 2020</h6>
                    <br />
                    <img class="education__imagelink" src={NITDgp} alt="NIT Durgapur" />
                    <p class="education__description">Ranked top 5% in the program with a CGPA of 9.32/10. Memeber of NCC and Web Design &amp; Creative Team.</p>
                </div>
            </div>
        </div>
    )
}

export default Education