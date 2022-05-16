import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../../utils/classes";
import Button from "../atoms/button";

//navigation content names
const NavBars = ["home", "trending", "contact", "aboutus", "login", "signup"];

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	//styling for the component
	const styles = {
		container: `flex justify-between items-center padding p-4 bg-teal-600 max-w-7xl`,
		flex: `flex`,
		navLink: `px-2 py-1 capitalize text-[1rem] hover:shadow-sm hover:text-white hover:bg-teal-300
		 hover:rounded-md active:bg-teal-500 cursor-pointer`,
		button: `bg-violet-300 mx-1 border-gray-200 border-[1px] rounded-md text-center w-full`,
		actionsButton: `hidden sm:flex space-x-2`,
		dropdown: `absolute top-12 -inset-x-20 p-2 transition transform origin-top-left sm:hidden 
						border-2 border-gray-200 bg-violet-100
						${isOpen ? "inline-block" : "hidden"} w-28
		`,
	};
	return (
		<div className={styles.container}>
			<div className={styles.navLink}>logo</div>
			<div className={classes([styles.flex, "hidden sm:flex space-x-2"])}>
				{NavBars.slice(0, 4).map((name) => (
					<Link to={`/${name}`} key={name}>
						<button className={styles.navLink}>{name}</button>
					</Link>
				))}
			</div>
			<div className="relative">
				<div
					className="sm:hidden p-2 rotate-90"
					onClick={() => setIsOpen(!isOpen)}
				>
					|||
				</div>
				<div className={classes([styles.actionsButton])}>
					<Button name="Login" />
					<Button name="Signup" />
				</div>
				<div className={classes([styles.dropdown])}>
					{NavBars.map((name) => (
						<Link to={`/${name}`} key={name}>
							<div className={styles.navLink}>{name}</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
