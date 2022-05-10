import React, { useState } from "react";
import classes from "../../utils/classes";
import Button from "../atoms/Button";

//navigation content names
const NavBars = ["home", "trending", "contact", "about us"];

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	//styling for the component
	const styles = {
		container: `flex justify-between items-center padding p-4 bg-teal-600`,
		flex: `flex`,
		navLink: `p-1 capitalize text-[1rem] underline underline-offset-1 cursor-pointer hover:text-blue-200`,
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
				{NavBars.map((name) => (
					<div className={styles.navLink} key={name}>
						{name}
					</div>
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
						<div className={styles.navLink} key={name}>
							{name}
						</div>
					))}
					<Button name="Login" />
					<Button name="Signup" />
				</div>
			</div>
		</div>
	);
};

export default Header;
