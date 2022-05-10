import React from "react";
import classes from "../../utils/classes";

interface ButtonProps {
	name: string;
}

const styles = {
	navLink: `p-1 capitalize`,
	button: `bg-violet-300 border-gray-200 border-[1px] rounded-md text-center w-full`,
};

const Button: React.FC<ButtonProps> = ({ name }) => {
	return (
		<button className={classes([styles.navLink, styles.button])}>
			{name}
		</button>
	);
};

export default Button;
