import React from "react";
import Image from "next/image";

interface Props {
	inputAttrs?: React.InputHTMLAttributes<HTMLInputElement>;
	icon?: string;
}

const InputBar = (props: Props) => {
	return (
		<div>
            { props.icon && <Image src={props.icon} width={20} height={20} alt=""/> }
			<input {...props.inputAttrs} />
		</div>
	);
};

export default InputBar;
