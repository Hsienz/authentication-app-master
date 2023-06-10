"use client"
import AccountForm from "@/components/AccountForm";
import React, { FormEvent } from "react";
import Link from "next/link";

const Register = () => {
	return (
		<AccountForm
			title="Join thousands of learners from around the world"
			desc="Master web development by making real-life projects. There are multiple paths for you to choose"
			submitText="Start coding now"
			addition={
				<p>
					Already a member?&nbsp;
					<Link className="text-blue" href="./login">
						Login
					</Link>
				</p>
			}
			formAttrs={{
				onSubmit: async (e:FormEvent) => {
					e.preventDefault()
					const res = await fetch('/api/auth/register',{method:'POST', headers:{
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
						'Access-Control-Allow-Headers': 'Content-Type, Authorization',
					}})
					console.log(await res.json())
				},
			}}
		/>
	);
};

export default Register;
