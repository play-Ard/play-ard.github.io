import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>

            <div className="container text-center">
                <hr />
                <div className="row">
                    <div className="col">
                        <p className="copyright-text">Copyright &copy; 2022 PLAYARD DEVELOPER TEAM</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col ">

                                <a  className="instagram m-2"style={{color:'white',fontSize:'36px'}} href="https://www.instagram.com/play_ard" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                                
                                <a className="linkedin "style={{color:'white',fontSize:'36px'}} href="https://www.linkedin.com/company/play-ard" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>

                                <a className="github m-2" style={{color:'white',fontSize:'36px'}} href="https://github.com/play-Ard" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>

                    </div>
                </div>
            </div>




    </div>
  )
}

export default Footer