import React, { useState } from "react";
import classes from "../../utils/classes";
import Button from "../atoms/Button";

//styling for the component
const styles = {
	container: `flex justify-between items-center padding p-4 bg-teal-500`,
	flex: `flex`,
	navLink: `p-1 capitalize`,
	button: `bg-violet-300 mx-1 border-gray-200 border-[1px] rounded-md text-center w-full`,
	actionsButton: `hidden sm:flex space-x-2`,
	dropdown: `absolute top-12 -inset-x-12 p-2 transition transform origin-top-left sm:hidden`,
};

//navigation content names
const NavBars = ["home", "trending", "contact", "about us"];

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={styles.container}>
			<div className={styles.navLink}>logo</div>
			<div className={classes([styles.flex, "hidden sm:flex"])}>
				{NavBars.map((name) => {
					return (
						<div className={styles.navLink} key={name}>
							{name}
						</div>
					);
				})}
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
				<div
					className={classes([
						styles.dropdown,
						"w-20",
						isOpen ? "inline-block" : "hidden",
						"border-2 border-gray-200 bg-violet-100",
					])}
				>
					<Button name="Login" />
					<Button name="Signup" />
				</div>
			</div>
		</div>
	);
};

export default Header;
