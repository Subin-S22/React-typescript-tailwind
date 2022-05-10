import React from "react";
import classes from "../../utils/classes";

interface ButtonProps {
	name: string;
}

const styles = {
	navLink: `p-1 capitalize text-[1rem]`,
	button: `bg-blue-500 border-blue-300 border-[1px] rounded-md text-center w-full hover:bg-blue-300`,
};

const Button: React.FC<ButtonProps> = ({ name }) => {
	return (
		<button className={classes([styles.navLink, styles.button])}>
			{name}
		</button>
	);
};

export default Button;
