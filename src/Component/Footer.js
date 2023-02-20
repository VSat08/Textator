import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram,faGithub,faGoogle } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <>
            <footer className={`text-center pt-5 footersection bg-${props.mode} text-${props.modeText}`}>
                <div className="container">
                    <section>
                        <a className="btn btn-primary btn-floating m-1" target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/feed/"
                        ><FontAwesomeIcon icon={faLinkedin} /></a>

                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#E1306C" }} target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/invites/contact/?i=cxvorp6rkfqr&utm_content=pshifej "
                        ><FontAwesomeIcon icon={faInstagram} /></a>

                        <a className="btn btn-dark btn-outline-light btn-floating m-1" target='_blank' rel="noopener noreferrer" href="https://github.com/VSat08"
                        ><FontAwesomeIcon icon={faGithub}/></a>

                        <a className="btn text-light btn-floating m-1" target='_blank' rel="noopener noreferrer" href="mailto:satyam2001verma@gmail.com.com" style={{ backgroundColor: "#DB4437" }}><FontAwesomeIcon icon={faGoogle}/></a>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2023 Copyright:&nbsp;
                    <a href="https://github.com/VSat08">Satyam Verma</a>

                </div>
            </footer>
        </>
    )
}

export default Footer
