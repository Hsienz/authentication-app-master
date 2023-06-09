import AccountForm from "@/components/AccountForm";
import Link from "next/link";
import React from "react";

const Login = () => {
	return (
		<AccountForm
			title="Login"
			submitText="Login"
			addition={
				<p>
					Don&apos;t have an account yet?
					<Link href="/register">Register</Link>
				</p>
			}
		/>
	);
};

export default Login;
