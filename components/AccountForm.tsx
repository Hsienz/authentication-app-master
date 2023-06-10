"use client"
import React, { FormEvent, FormHTMLAttributes } from "react";
import InputBar from "./InputBar";
import iconMail from "@/public/assets/mail_FILL1_wght400_GRAD0_opsz48.svg";
import iconLock from "@/public/assets/lock_FILL1_wght400_GRAD0_opsz48.svg";
import Image from "next/image";
import iconFacebook from "@/public/assets/Facebook.svg";
import iconGithub from "@/public/assets/Gihub.svg";
import iconGoogle from "@/public/assets/Google.svg";
import iconTwitter from "@/public/assets/Twitter.svg";
import iconDev from "@/public/assets/devchallenges.svg"
import {signIn} from 'next-auth/react'
interface Props {
	title: string;
	desc?: string;
	submitText: string;
	addition?: JSX.Element;
	formAttrs?: FormHTMLAttributes<HTMLFormElement>
}

const SNS = [
	{
		buttonAttrs: {
			onClick: () => signIn('google'),
		},
		imageAttrs: {
			src: iconGoogle,
		},
	},
	{
		buttonAttrs: {
			onClick: () => signIn('facebook'),
		},
		imageAttrs: {
			src: iconFacebook,
		},
	},
	{
		buttonAttrs: {
			onClick: () => signIn('twitter'),
		},
		imageAttrs: {
			src: iconTwitter,
		},
	},
	{
		buttonAttrs: {
			onClick: () => signIn('github'),
		},
		imageAttrs: {
			src: iconGithub,
		},
	},
];

const AccountForm = (props: Props) => {
	return (
		<form {...props.formAttrs} className="rounded-lg gap-4 flex flex-col sm:border-grayBD sm:border-2 p-14 max-w-[475px]">
            <Image src={iconDev} width={150} height={50} alt="" className="pointer-events-none"/>
			<p className="text-lg font-semibold text-gray33">{props.title}</p>
			<p className="text-gray33">{props.desc}</p>
			<InputBar inputAttrs={{ placeholder: "Email" }} icon={iconMail} />
			<InputBar
				inputAttrs={{ placeholder: "Password", type: "password" }}
				icon={iconLock}
			/>
            <button type="submit" className="w-full py-2 text-white bg-blue rounded-xl">{props.submitText}</button>
			<div className="flex flex-col gap-6 px-10 mt-2 text-center text-gray82">
				<p>or continue with these social profile</p>
				<div className="flex justify-between">
					{SNS.map((x, i) => (
						<button key={i} {...x.buttonAttrs}>
							<Image
								{...x.imageAttrs}
								alt=""
								className="pointer-events-none"
							/>
						</button>
					))}
				</div>
				{props.addition && props.addition}
			</div>
		</form>
	);
};

export default AccountForm;
