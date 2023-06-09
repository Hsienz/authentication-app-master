import AccountForm from "@/components/AccountForm";
import React from "react";
import Link from "next/link";

const Register = () => {
	return (
		<AccountForm
			title="Join thousands of learners from around the world"
			desc="Master web development by making real-life projects. There are multiple paths for you to choose"
			submitText="Start coding now"
            addition={<p>Already a member? <Link href="./login">Login</Link></p>}
		/>
	);
};

export default Register;
