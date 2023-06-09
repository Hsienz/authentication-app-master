import "./globals.css";
import { Noto_Sans } from "next/font/google";
import SessionProvider from "@/contexts/SessionProvider";

const notoSans = Noto_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${notoSans.className} flex justify-center items-center min-h-screen`}
			>
				<SessionProvider>{children}</SessionProvider>
			</body>
		</html>
	);
}
