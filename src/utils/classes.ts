type styleProps = Array<string>;

const clsx = (styles: styleProps) => {
	return styles.reduce((acc: string, value: string) => {
		return acc + value + " ";
	}, "");
};

export default clsx;
