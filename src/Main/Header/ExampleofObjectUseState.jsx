import React from 'react';

const initialState = {
	switches: {
		menuOpen: false,
		modalOpen: false,
	},
	fields: {
		username: '',
		password: '',
	},
};

export default function Header(props) {
	const [changeStateObj, setChangeStateObj] = useState(initialState.fields);
	const [toggleStateObj, setToggleStateObj] = useState(initialState.switches);

	useEffect(() => {
		console.log(changeStateObj, toggleStateObj);
	}, [changeStateObj, toggleStateObj]);

	const changeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setChangeStateObj((values) => ({ ...values, [name]: value }));
	};

	const clickHandler = () => {
		setToggleStateObj((prevState) => ({ [name]: !prevState.name }));
	};

	return (
		<div>
			<label htmlFor="username">
				User Name
				<input type="text" name="username" onChange={changeHandler} />
			</label>
			<label htmlFor="password">
				Password
				<input type="password" name="password" onChange={changeHandler} />
			</label>
			<button name="modalOpen" onClick={clickHandler}>
				Open modal
			</button>
			<button name="menuOpen" onClick={clickHandler}>
				Open menu
			</button>
		</div>
	);
}
