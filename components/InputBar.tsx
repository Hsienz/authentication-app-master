import React from "react";
import Image from "next/image";

interface Props {
	inputAttrs?: React.InputHTMLAttributes<HTMLInputElement>;
	icon?: string;
}

const InputBar = (props: Props) => {
	return (
		<div className="flex gap-2 p-2 border-2 border-grayBD rounded-xl">
            { props.icon && <Image src={props.icon}  width={20} height={20} alt=""/> }
			<input className="outline-none" {...props.inputAttrs} />
		</div>
	);
};

export default InputBar;
