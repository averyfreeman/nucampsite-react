import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebookSquare,
	faInstagramSquare,
	faTwitterSquare,
	faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-social/bootstrap-social.css';
import './Footer.css';

function Footer(props) {
	const { mode, resPx } = props;

	let dynFoot = mode ? 'site-footer-dark' : 'site-footer-light';
	let dynHead = mode ? 'cyan-shadow' : 'dark-magenta';
	let dynLink = mode ? 'hover-link-dark lighter-orange' : 'hover-link-light';

	return (
		<footer className={dynFoot}>
			<div className="container">
				{/* <div className="d-flex align-items-start justify-content-between flex-wrap"> */}
				<div className="row">
					{/* <div className="row d-flex justify-content-center justify-content-sm-between"> */}
					<div className="col-4 col-sm-2 offset-1 offset-sm-0">
						{/* <div className="d-flex flex-column align-items-center text-center text-sm-left justify-content-center justify-content-sm-start col-12 col-sm-2 offset-1"> */}
						<h4 className={dynHead}>Links</h4>
						<ul className="list-unstyled text-decoration-none">
							<li>
								<Link className={dynLink} to="/home" role="navigation">
									Home
								</Link>
							</li>
							<li>
								<Link className={dynLink} to="/directory" role="navigation">
									Directory
								</Link>
							</li>
							<li>
								<Link className={dynLink} to="/aboutus" role="navigation">
									About
								</Link>
							</li>
							<li>
								<Link className={dynLink} to="/contactus" role="navigation">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<span className="col-6 col-sm-4 text-center offset-1 preserve-word">
						{/* <div className="col-12 col-sm-4 text-center justify-content-sm-center justify-content-end"> */}
						<h4 className={dynHead}>Social</h4>
						<a
							rel="noopener noreferrer"
							target="_blank"
							role="navigation"
							href="https://instagram.com/"
						>
							<FontAwesomeIcon
								className={`${dynLink} btn-instagram rounded`}
								icon={faInstagramSquare}
								style={{
									fontSize: `${resPx}px`,
								}}
							/>
						</a>{' '}
						<a
							rel="noopener noreferrer"
							target="_blank"
							role="navigation"
							href="https://www.facebook.com/"
						>
							<FontAwesomeIcon
								className={`${dynLink} btn-facebook rounded`}
								icon={faFacebookSquare}
								style={{
									fontSize: `${resPx}px`,
								}}
							/>
						</a>{' '}
						<a
							rel="noopener noreferrer"
							target="_blank"
							role="navigation"
							href="https://twitter.com/"
						>
							<FontAwesomeIcon
								className={`${dynLink} btn-twitter rounded`}
								icon={faTwitterSquare}
								style={{
									fontSize: `${resPx}px`,
								}}
							/>
						</a>{' '}
						<a
							rel="noopener noreferrer"
							target="_blank"
							role="navigation"
							href="https://youtube.com/"
						>
							<FontAwesomeIcon
								className={`${dynLink} btn-google rounded`}
								icon={faYoutubeSquare}
								style={{
									fontSize: `${resPx}px`,
								}}
							/>
							{/* {console.log(document.documentElement.clientWidth)} */}
						</a>
					</span>
					<div className="col col-sm-5 text-center">
						{/* <div className="d-flex flex-column align-items-center col-12 col-sm-5  justify-content-center"> */}
						<h4 className={`${dynHead}`}>Contact</h4>
						<a
							role="button"
							className={`btn btn-link ${dynLink} preserve-word`}
							rel="noopener noreferrer"
							target="_blank"
							href="tel:+12065551234"
						>
							<FontAwesomeIcon
								icon={faPhoneVolume}
								size="lg"
								transform={{ rotate: -45 }}
							/>{' '}
							1-206-555-1234
						</a>
						<br />
						<a
							role="button"
							rel="noopener noreferrer"
							className={`btn btn-link  text-decoration-none ${dynLink} preserve-word`}
							href="mailto:notreal@notreal.co"
						>
							<FontAwesomeIcon icon={faEnvelopeOpen} size="lg" />{' '}
							campsites@nucamp.co
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
