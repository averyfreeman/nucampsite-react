import React, { Fragment, useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import {
	Button,
	Collapse,
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Modal,
	ModalBody,
	ModalHeader,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	NavbarToggler,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouseDamage,
	faInfo,
	faPhoneVolume,
	faSignInAlt,
	faBookOpen,
} from '@fortawesome/free-solid-svg-icons';
import { Image } from '@chakra-ui/image';
import Jumbotron from 'Main/Header/Jumbotron/Jumbotron';
import 'Main/Header/Header.css';

const logo = '/assets/images/logo.png';
// const fallBack = 'apple-touch-icon.png';

const Header = (props) => {
	const { mode, toggleMode } = props;
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isModalOpen, setModalOpen] = useState(false);
	const [credentials, setCredentials] = useImmer({
		username: '',
		password: '',
		remember: false,
	});
	const [submitLogin, setSubmitLogin] = useImmer([]);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const toggleModal = () => {
		setModalOpen(!isModalOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const handleInput = (e, credentials) => {
		const target = e.target;
		const name = target.name;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		// console.log(target, { [name]: value });
		setCredentials((draftState) => {
			draftState[name] = value;
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitLogin((draft) => {
			draft.push(credentials);
		});
		console.log('sending: ' + Object.entries(credentials));
		setCredentials({
			username: '',
			password: '',
			remember: false,
		});
		toggleModal();
	};

	useEffect(() => {
		console.log(credentials);
		console.log(submitLogin);
	}, [credentials, submitLogin]);

	const borderColor = mode
		? 'rgba(055, 055, 200, 0.55)'
		: 'rgba(255, 255, 255, 0.35)';
	const cyanSwitcher = mode ? 'cyan' : 'text-light';
	const jumboSwitcher = mode ? 'Header__navbar-dark' : 'Header__navbar-light';
	const navItemBg = mode ? '#0000001a' : '#00000033';
	const orangeSwitcher = mode ? 'lighter-orange' : 'text-light';

	const navStyles = {
		linkSpan: {
			marginLeft: `${6}px`,
		},
		brand: {
			backgroundColor: navItemBg,
			border: `3px solid ${borderColor}`,
			borderRadius: `${20}px`,
			padding: `${8}px`,
			margin: `${0}`,
		},
		item: {
			alignSelf: 'flex-end',
			backgroundColor: navItemBg,
			border: `${3}px solid ${borderColor}`,
			borderRadius: `${12}px`,
			height: `${3}rem`,
			margin: `${2}px`,
			// paddingLeft: `${6}px`,
			textDecoration: `none`,
			width: `${9.5}rem`,
			'&:hover': {
				backgroundColor: '#efefefaa',
				opacity: '#efefefaa',
			},
		},
		login: {
			alignSelf: 'flex-end',
			backgroundColor: navItemBg,
			border: `${3}px solid ${borderColor}`,
			color: borderColor,
			borderRadius: `${12}px`,
			height: `${3}rem`,
			height: `${3}rem`,
			margin: `${2}px`,
			// paddingLeft: `${6}px`,
			textDecoration: `none`,
			// width: `${5}rem`,
			width: `100%`,
			'&:hover': {
				backgroundColor: '#efefefaa',
				opacity: '#efefefaa',
			},
		},
	};

	return (
		<Fragment>
			<Jumbotron
				mode={mode}
				onChange={toggleMode}
				orangeSwitcher={orangeSwitcher}
				cyanSwitcher={cyanSwitcher}
			/>

			<Navbar
				dark={mode ? true : false}
				className={`${jumboSwitcher}`}
				expand="md"
				sticky="top"
			>
				<Container>
					<NavbarBrand
						href="/"
						onClick={(e) => e.preventDefault(e)}
						style={navStyles.brand}
					>
						<Image
							align={`center`}
							src={logo}
							inlineSize={50}
							padding={0}
							loading={'lazy'}
							objectFit={`cover`}
						/>
					</NavbarBrand>
					{/* eslint-disable-line no-new-wrappers */}
					<NavbarToggler onClick={toggleMenu} id="navbarCollapse" />
					<Collapse isOpen={isMenuOpen} navbar>
						<Nav navbar className="ml-auto">
							<NavItem style={navStyles.item}>
								<NavLink
									to="/home"
									className="nav-link yellow with-dark-shadow"
									onClick={closeMenu}
									// style={navLinkStyle}
								>
									<FontAwesomeIcon icon={faHouseDamage} size="lg" fixedWidth />
									<span style={navStyles.linkSpan}>Home</span>
								</NavLink>
							</NavItem>
							<NavItem style={navStyles.item}>
								<NavLink
									to="/directory"
									className="nav-link lighter-orange with-dark-shadow"
									onClick={closeMenu}
									// style={navLinkStyle}
								>
									<FontAwesomeIcon icon={faBookOpen} size="lg" fixedWidth />
									<span style={navStyles.linkSpan}>Directory</span>
								</NavLink>
							</NavItem>
							<NavItem style={navStyles.item}>
								<NavLink
									to="/aboutus"
									className="nav-link lighter-orange with-dark-shadow"
									onClick={closeMenu}
									// style={navLinkStyle}
								>
									<FontAwesomeIcon icon={faInfo} size="lg" fixedWidth />
									<span style={navStyles.linkSpan}>About Us</span>
								</NavLink>
							</NavItem>
							<NavItem style={navStyles.item}>
								<NavLink
									to="/contactus"
									className="nav-link dark-orange with-dark-shadow"
									onClick={closeMenu}
									// style={navLinkStyle}
								>
									<FontAwesomeIcon
										icon={faPhoneVolume}
										size="lg"
										fixedWidth
										transform={{ rotate: -45 }}
									/>
									<span style={navStyles.linkSpan}>Contact Us</span>
								</NavLink>
							</NavItem>
						</Nav>
						<span style={navStyles.item}>
							{/* <span className="navbar-text ml-auto align-right"> */}
							<Button outline size="md" onClick={toggleModal}>
								<FontAwesomeIcon icon={faSignInAlt} size="lg" fixedWidth />
							</Button>
						</span>
					</Collapse>
				</Container>
			</Navbar>
			<Modal isOpen={isModalOpen}>
				<ModalHeader toggle={toggleModal}>Login</ModalHeader>
				<ModalBody>
					<Form onSubmit={handleSubmit}>
						<FormGroup>
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								name="username"
								onChange={handleInput}
								type="text"
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								onChange={handleInput}
								type="text"
							/>
						</FormGroup>
						<FormGroup>
							<Label check className="ml-5">
								<Input name="remember" onChange={handleInput} type="checkbox" />
								Remember me
							</Label>
						</FormGroup>
						<Button
							color="primary"
							onClick={handleSubmit}
							type="submit"
							value="submit"
						>
							Login
						</Button>
					</Form>
				</ModalBody>
			</Modal>
		</Fragment>
	);
};

export default Header;
