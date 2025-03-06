import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const inter = localFont({
	src: './font/InterVariable.woff2',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Resume',
	description: 'Emma Mellgren',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>{children}</body>
		</html>
	);
}
