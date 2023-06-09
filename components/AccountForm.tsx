import React from "react";
import InputBar from "./InputBar";
import iconMail from "@/public/assets/mail_FILL0_wght400_GRAD0_opsz48.svg";
import iconLock from "@/public/assets/lock_FILL0_wght400_GRAD0_opsz48.svg";
interface Props {
	title: string;
	desc?: string;
	submitText: string;
    addition?: JSX.Element;
}

const AccountForm = (props: Props) => {
	return (
		<div className="sm:border-grayBD sm:border-2">
			<p>{props.title}</p>
			<p>{props.desc}</p>
			<InputBar inputAttrs={{ placeholder: "Email" }} icon={iconMail} />
			<InputBar
				inputAttrs={{ placeholder: "Password", type:"password"}}
				icon={iconLock}
			/>
            <p>or continue with these social profile</p>
            {props.addition && props.addition}
		</div>
	);
};

export default AccountForm;
